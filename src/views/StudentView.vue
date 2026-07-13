<script setup lang="ts">
import { ref, inject, onMounted, computed } from "vue";
import type { ViewName, ToastType } from "@/types";
import { useDb } from "@/composables/useDb";

const currentView = inject<ReturnType<typeof ref<ViewName>>>("currentView")!;
const showToast = inject<(msg: string, type?: ToastType) => void>("showToast")!;
const loading = inject<ReturnType<typeof ref<boolean>>>("loading")!;

const { workstations, subscribeWorkstations, borrowWorkstation } = useDb();

const showModal = ref(false);
const selectedWs = ref<string | null>(null);
const borrowerName = ref("");

const selectedWsData = computed(() =>
  workstations.value.find((ws) => ws.id === selectedWs.value)
);

function openBorrow(id: string) {
  selectedWs.value = id;
  borrowerName.value = "";
  showModal.value = true;
}

function cancel() {
  showModal.value = false;
  selectedWs.value = null;
  borrowerName.value = "";
}

async function confirmBorrow() {
  const name = borrowerName.value.trim();
  if (!name || !selectedWs.value) return;
  loading.value = true;
  try {
    await borrowWorkstation(selectedWs.value, name);
    showModal.value = false;
    showToast(`Du låner ${selectedWs.value} — God bruk!`, "success");
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
  <div class="view active" style="display:flex;flex-direction:column;min-height:100dvh;">
    <header class="header">
      <div>
        <div class="header-title">Lån utstyr</div>
        <div class="header-subtitle">Trykk på en ledig enhet for å låne</div>
      </div>
      <button class="btn-admin-link" @click="currentView = 'login'">Admin</button>
    </header>

    <main class="content">
      <div v-if="workstations.length === 0" class="empty-state">Laster enheter...</div>
      <div v-else class="workstations-grid">
        <div
          v-for="ws in workstations"
          :key="ws.id"
          class="ws-box"
          :class="ws.status"
          :tabindex="ws.status === 'available' ? 0 : -1"
          role="button"
          :aria-label="ws.status === 'available' ? `Lån ${ws.name}` : `${ws.name} er utlånt`"
          @click="ws.status === 'available' && openBorrow(ws.id)"
          @keydown.enter="ws.status === 'available' && openBorrow(ws.id)"
        >
          <div class="ws-box-icon">💻</div>
          <div class="ws-box-name">{{ ws.name }}</div>
          <div v-if="ws.keyboard || ws.mouse" class="ws-box-details">
            {{ [ws.keyboard, ws.mouse].filter(Boolean).join(" · ") }}
          </div>
          <div v-if="ws.status === 'borrowed' && ws.borrower" class="ws-box-borrower">
            Lånt av: {{ ws.borrower }}
          </div>
          <div class="ws-box-status" :class="ws.status">
            {{ ws.status === 'available' ? 'Ledig' : 'Utlånt' }}
          </div>
        </div>
      </div>
    </main>

    <Teleport to="body">
      <div v-if="showModal && selectedWsData" class="modal-overlay" @click.self="cancel">
        <div class="modal">
          <h3>Lån {{ selectedWsData.name }}</h3>

          <div class="form-group">
            <label for="modal-name">Ditt navn</label>
            <input
              id="modal-name"
              v-model="borrowerName"
              class="input"
              placeholder="Skriv inn navnet ditt"
              autocomplete="name"
              ref="nameInput"
              @keydown.enter="confirmBorrow"
            />
          </div>

          <ul class="modal-items">
            <li v-for="item in [selectedWsData.name, selectedWsData.keyboard, selectedWsData.mouse].filter(Boolean)" :key="item">{{ item }}</li>
          </ul>

          <div class="modal-actions">
            <button class="btn btn-primary btn-full" :disabled="!borrowerName.trim()" @click="confirmBorrow">
              Bekreft lån
            </button>
            <button class="btn btn-secondary btn-full" @click="cancel">Avbryt</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
