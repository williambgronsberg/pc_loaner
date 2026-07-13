<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, computed } from "vue";
import type { ViewName, ToastType } from "@/types";
import { useDb } from "@/composables/useDb";

const currentView = inject<ReturnType<typeof ref<ViewName>>>("currentView")!;
const showToast = inject<(msg: string, type?: ToastType) => void>("showToast")!;
const loading = inject<ReturnType<typeof ref<boolean>>>("loading")!;

const {
  workstations,
  subscribeWorkstations,
  borrowWorkstation,
} = useDb();

const borrowerName = ref("");
const selectedWs = ref<string | null>(null);
const showConfirm = ref(false);

const availableWs = computed(() =>
  workstations.value.filter((ws) => ws.status === "available")
);

const selectedWsData = computed(() =>
  workstations.value.find((ws) => ws.id === selectedWs.value)
);

function selectWorkstation(id: string) {
  if (!borrowerName.value.trim()) return;
  selectedWs.value = id;
  showConfirm.value = true;
}

function cancel() {
  showConfirm.value = false;
  selectedWs.value = null;
}

async function confirmBorrow() {
  if (!selectedWs.value || !borrowerName.value.trim()) return;
  loading.value = true;
  try {
    await borrowWorkstation(selectedWs.value, borrowerName.value.trim());
    showConfirm.value = false;
    showToast(`Du låner ${selectedWs.value} — God bruk!`, "success");
    borrowerName.value = "";
    selectedWs.value = null;
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke fullføre lånet", "error");
  } finally {
    loading.value = false;
  }
}

function handleNameEnter() {
  const first = document.querySelector<HTMLElement>(".ws-card.available");
  first?.scrollIntoView({ behavior: "smooth", block: "center" });
  first?.focus();
}

onMounted(() => subscribeWorkstations());
</script>

<template>
  <div class="view active">
    <header class="header header-student">
      <div class="header-top">
        <svg class="rc-logo" viewBox="0 0 100 100" aria-label="Røde Kors">
          <rect x="10" y="10" width="80" height="80" rx="8" fill="#fff" stroke="#b81c1c" stroke-width="4"/>
          <rect x="38" y="22" width="24" height="56" rx="4" fill="#b81c1c"/>
          <rect x="22" y="38" width="56" height="24" rx="4" fill="#b81c1c"/>
        </svg>
        <div>
          <h1 class="header-title">Røde Kors</h1>
          <p class="header-subtitle">Lån & returner utstyr</p>
        </div>
      </div>
      <button class="btn-text btn-admin-link" @click="currentView = 'login'">Admin</button>
    </header>

    <main class="content">
      <section class="card borrower-card">
        <div class="form-group">
          <label for="borrower-name">Ditt navn</label>
          <input
            id="borrower-name"
            v-model="borrowerName"
            class="input"
            placeholder="Skriv inn navnet ditt"
            autocomplete="name"
            @keydown.enter="handleNameEnter"
          />
        </div>
      </section>

      <section class="card">
        <h2 class="section-title">Tilgjengelige enheter</h2>
        <div v-if="workstations.length === 0" class="empty-state">Laster enheter...</div>
        <div v-else class="workstations-list">
          <div
            v-for="ws in workstations"
            :key="ws.id"
            class="workstation-item"
            :class="{
              available: ws.status === 'available',
              borrowed: ws.status === 'borrowed',
            }"
            :tabindex="ws.status === 'available' ? 0 : -1"
            role="button"
            @click="ws.status === 'available' && selectWorkstation(ws.id)"
            @keydown.enter="ws.status === 'available' && selectWorkstation(ws.id)"
          >
            <span class="status-dot" :class="ws.status"></span>
            <div class="workstation-info">
              <div class="workstation-name">{{ ws.name }}</div>
              <div v-if="ws.keyboard || ws.mouse" class="workstation-details">
                {{ [ws.keyboard, ws.mouse].filter(Boolean).join(", ") }}
              </div>
              <div v-if="ws.status === 'borrowed' && ws.borrower" class="workstation-borrower">
                Lånt av: {{ ws.borrower }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Teleport to="body">
      <div v-if="showConfirm && selectedWsData" class="confirmation-overlay" @click.self="cancel">
        <div class="confirmation-card card">
          <h3>Bekreft lån</h3>
          <p>Du er i ferd med å låne:</p>
          <ul class="confirmation-details">
            <li>{{ selectedWsData.name }}</li>
            <li v-if="selectedWsData.keyboard">{{ selectedWsData.keyboard }}</li>
            <li v-if="selectedWsData.mouse">{{ selectedWsData.mouse }}</li>
          </ul>
          <p style="margin-top:12px;font-size:0.9375rem;color:var(--gray-600);">
            <strong>Låntaker:</strong> {{ borrowerName.trim() }}
          </p>
          <div class="confirmation-actions">
            <button class="btn btn-primary btn-full" @click="confirmBorrow">Bekreft lån</button>
            <button class="btn btn-secondary btn-full" @click="cancel">Avbryt</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
