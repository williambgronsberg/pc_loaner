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
const controllerCount = ref(2);
const nameInput = ref<HTMLInputElement | null>(null);

const psList = computed(() => workstations.value.filter((w) => w.type === "playstation"));
const pcs = computed(() => workstations.value.filter((w) => w.type === "pc"));
const selected = computed(() => workstations.value.find((ws) => ws.id === selectedWs.value));
const isPs = computed(() => selected.value?.type === "playstation");

const PS_ACCENT = "#0A84FF";
const PC_ACCENT = "#30D158";

function wsAccent(ws: { type: string; status: string }) {
  if (ws.status !== "available") return "transparent";
  return ws.type === "playstation" ? PS_ACCENT : PC_ACCENT;
}

function openBorrow(id: string) {
  selectedWs.value = id;
  borrowerName.value = "";
  controllerCount.value = 2;
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
    await borrowWorkstation(
      selectedWs.value,
      name,
      isPs.value ? controllerCount.value : undefined
    );
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
  <div class="student-layout">
    <button class="admin-corner" @click="currentView = 'login'">Admin</button>

    <p v-if="workstations.length === 0" class="empty-state">Laster...</p>

    <div v-else class="ws-scroll">
      <div v-if="psList.length" class="section">
        <div class="section-label">PlayStation</div>
        <div class="card-row">
          <div
            v-for="ws in psList"
            :key="ws.id"
            class="card"
            :class="{ borrowed: ws.status !== 'available' }"
            :style="{ borderLeftColor: wsAccent(ws) }"
            tabindex="0"
            role="button"
            @click="ws.status === 'available' && openBorrow(ws.id)"
            @keydown.enter="ws.status === 'available' && openBorrow(ws.id)"
          >
            <div class="card-body">
              <div class="card-name">{{ ws.name }}</div>
              <div v-if="ws.keyboard" class="card-detail">{{ ws.keyboard }}</div>
            </div>
            <div class="card-right">
              <div class="card-badge" :class="ws.status">
                {{ ws.status === "available" ? "Ledig" : "Opptatt" }}
              </div>
              <div v-if="ws.status === 'available'" class="card-arrow">
                →
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="pcs.length" class="section">
        <div class="section-label">PC</div>
        <div class="card-row">
          <div
            v-for="ws in pcs"
            :key="ws.id"
            class="card"
            :class="{ borrowed: ws.status !== 'available' }"
            :style="{ borderLeftColor: wsAccent(ws) }"
            tabindex="0"
            role="button"
            @click="ws.status === 'available' && openBorrow(ws.id)"
            @keydown.enter="ws.status === 'available' && openBorrow(ws.id)"
          >
            <div class="card-body">
              <div class="card-name">{{ ws.name }}</div>
              <div v-if="ws.keyboard || ws.mouse" class="card-detail">
                {{ [ws.keyboard, ws.mouse].filter(Boolean).join(" · ") }}
              </div>
            </div>
            <div class="card-right">
              <div class="card-badge" :class="ws.status">
                {{ ws.status === "available" ? "Ledig" : "Opptatt" }}
              </div>
              <div v-if="ws.status === 'available'" class="card-arrow">
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="showModal && selected" class="modal-overlay" @click.self="cancel">
        <div class="modal">
          <h3>{{ selected.name }}</h3>
          <p class="modal-sub">Skriv navnet ditt for å låne</p>

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

          <div v-if="isPs" class="form-group">
            <label for="ctrl-input">Antall kontrollere</label>
            <div class="ctrl-select">
              <button class="ctrl-btn" :class="{ active: controllerCount === 1 }" @click="controllerCount = 1">1</button>
              <button class="ctrl-btn" :class="{ active: controllerCount === 2 }" @click="controllerCount = 2">2</button>
              <button class="ctrl-btn" :class="{ active: controllerCount === 3 }" @click="controllerCount = 3">3</button>
              <button class="ctrl-btn" :class="{ active: controllerCount === 4 }" @click="controllerCount = 4">4</button>
            </div>
          </div>

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

<style scoped>
.student-layout {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  background: var(--bg, #F2F2F7);
  color: var(--text-primary, #1C1C1E);
  position: relative;
}

.admin-corner {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  background: var(--text-primary, #1C1C1E);
  color: var(--card, #FFFFFF);
  border: none;
  padding: 10px 18px;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.ws-scroll {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 6px;
  gap: 6px;
}

.section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-tertiary, #8E8E93);
  margin-bottom: 4px;
  padding-left: 2px;
}

.card-row {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 6px;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;
  background: var(--card, #FFFFFF);
  border-radius: 16px;
  border-left: 4px solid transparent;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: all var(--duration-fast, 150ms) var(--curve-standard, cubic-bezier(0.25, 0.1, 0.25, 1));
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  gap: 6px;
}

.card:active {
  transform: scale(0.98);
}

.card.borrowed {
  opacity: 0.5;
  cursor: not-allowed;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.card-name {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-primary, #1C1C1E);
}

.card-detail {
  font-size: 0.8125rem;
  color: var(--text-tertiary, #8E8E93);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.card-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
}

.card-badge.available {
  background: var(--accent-success, #34C759);
  color: #fff;
}

.card-badge.borrowed {
  background: var(--fill, #E5E5EA);
  color: var(--text-tertiary, #8E8E93);
}

.card-arrow {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--fill, #E5E5EA);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--text-tertiary, #8E8E93);
  flex-shrink: 0;
  transition: background var(--duration-fast, 150ms) var(--curve-standard, cubic-bezier(0.25, 0.1, 0.25, 1));
}

.modal-emoji {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 8px;
}

.ctrl-select {
  display: flex;
  gap: 8px;
}

.ctrl-btn {
  flex: 1;
  padding: 14px;
  font-size: 1.2rem;
  font-weight: 700;
  border: 2px solid var(--separator, #C6C6C8);
  border-radius: var(--radius-sm, 14px);
  background: var(--fill, #E5E5EA);
  color: var(--text-primary, #1C1C1E);
  cursor: pointer;
  transition: all var(--duration-fast, 150ms) var(--curve-standard, cubic-bezier(0.25, 0.1, 0.25, 1));
  text-align: center;
}

.ctrl-btn.active {
  background: var(--accent-ps, #0A84FF);
  color: var(--button-text, #FFFFFF);
  border-color: var(--accent-ps, #0A84FF);
}
</style>
