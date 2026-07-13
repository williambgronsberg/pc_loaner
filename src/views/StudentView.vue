<script setup lang="ts">
import { ref, inject, onMounted, computed, nextTick } from "vue";
import type { ViewName, ToastType } from "@/types";
import { useDb } from "@/composables/useDb";

const currentView = inject<ReturnType<typeof ref<ViewName>>>("currentView")!;
const showToast = inject<(msg: string, type?: ToastType) => void>("showToast")!;
const loading = inject<ReturnType<typeof ref<boolean>>>("loading")!;

const { workstations, subscribeWorkstations, borrowWorkstation } = useDb();

const showModal = ref(false);
const selectedWs = ref<string | null>(null);
const borrowerName = ref("");
const nameInput = ref<HTMLInputElement | null>(null);

const selected = computed(() =>
  workstations.value.find((ws) => ws.id === selectedWs.value)
);

function openBorrow(id: string) {
  selectedWs.value = id;
  borrowerName.value = "";
  showModal.value = true;
  nextTick(() => nameInput.value?.focus());
}

function cancel() {
  showModal.value = false;
  selectedWs.value = null;
  borrowerName.value = "";
}

async function confirm() {
  const name = borrowerName.value.trim();
  if (!name || !selectedWs.value) return;
  loading.value = true;
  try {
    await borrowWorkstation(selectedWs.value, name);
    showModal.value = false;
    showToast(`Du låner ${selectedWs.value}`, "success");
    selectedWs.value = null;
    borrowerName.value = "";
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke fullføre lånet", "error");
  } finally {
    loading.value = false;
  }
}

onMounted(() => subscribeWorkstations());
</script>

<template>
  <div style="display:flex;flex-direction:column;min-height:100dvh;">
    <header class="header">
      <div>
        <div class="header-title">Lån utstyr</div>
        <div class="header-subtitle">Trykk på en ledig enhet</div>
      </div>
      <button class="btn-admin-link" @click="currentView = 'login'">Admin</button>
    </header>

    <main class="content">
      <p v-if="workstations.length === 0" class="empty-state">Laster...</p>
      <div v-else class="ws-grid">
        <div
          v-for="ws in workstations"
          :key="ws.id"
          class="ws-card"
          :class="ws.status"
          tabindex="0"
          role="button"
          @click="ws.status === 'available' && openBorrow(ws.id)"
          @keydown.enter="ws.status === 'available' && openBorrow(ws.id)"
        >
          <div class="ws-emoji">💻</div>
          <div class="ws-name">{{ ws.name }}</div>
          <div v-if="ws.keyboard || ws.mouse" class="ws-detail">
            {{ [ws.keyboard, ws.mouse].filter(Boolean).join(" · ") }}
          </div>
          <div v-if="ws.status === 'borrowed' && ws.borrower" class="ws-borrower">
            {{ ws.borrower }}
          </div>
          <div class="ws-badge" :class="ws.status">
            {{ ws.status === "available" ? "Ledig" : "Opptatt" }}
          </div>
        </div>
      </div>
    </main>

    <Teleport to="body">
      <div v-if="showModal && selected" class="modal-overlay" @click.self="cancel">
        <div class="modal">
          <h3>{{ selected.name }}</h3>
          <p class="modal-sub">Skriv inn navnet ditt for å låne</p>

          <div class="form-group">
            <label for="name-input">Ditt navn</label>
            <input
              id="name-input"
              ref="nameInput"
              v-model="borrowerName"
              class="input"
              placeholder="Skriv her..."
              autocomplete="name"
              @keydown.enter="confirm"
            />
          </div>

          <ul class="modal-items">
            <li v-for="item in [selected.name, selected.keyboard, selected.mouse].filter(Boolean)" :key="item">{{ item }}</li>
          </ul>

          <div class="modal-actions">
            <button class="btn btn-primary btn-full" :disabled="!borrowerName.trim()" @click="confirm">
              Bekreft lån
            </button>
            <button class="btn btn-secondary btn-full" @click="cancel">Avbryt</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
