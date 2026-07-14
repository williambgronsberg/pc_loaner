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
      <div v-if="psList.length" class="ps-row">
        <div
          v-for="ws in psList"
          :key="ws.id"
          class="ws-bar"
          :class="ws.status"
          tabindex="0"
          role="button"
          @click="ws.status === 'available' && openBorrow(ws.id)"
          @keydown.enter="ws.status === 'available' && openBorrow(ws.id)"
        >
          <div class="ws-bar-inner">
            <div class="ws-bar-name">{{ ws.name }}</div>
            <div v-if="ws.keyboard" class="ws-bar-detail">{{ ws.keyboard }}</div>
            <div class="ws-block-badge" :class="ws.status">
              {{ ws.status === "available" ? "Trykk for å låne" : "Opptatt" }}
            </div>
          </div>
        </div>
      </div>

      <div class="ws-row">
        <div
          v-for="ws in pcs"
          :key="ws.id"
          class="ws-block"
          :class="ws.status"
          tabindex="0"
          role="button"
          @click="ws.status === 'available' && openBorrow(ws.id)"
          @keydown.enter="ws.status === 'available' && openBorrow(ws.id)"
        >
          <div class="ws-block-inner">
            <div class="ws-block-name">{{ ws.name }}</div>
            <div v-if="ws.keyboard || ws.mouse" class="ws-block-detail">
              {{ [ws.keyboard, ws.mouse].filter(Boolean).join(" · ") }}
            </div>
            <div class="ws-block-badge" :class="ws.status">
              {{ ws.status === "available" ? "Trykk for å låne" : "Opptatt" }}
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
  background: #000;
  color: #fff;
  position: relative;
}

.admin-corner {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  background: #f5c518;
  color: #1a1a1a;
  border: none;
  padding: 10px 18px;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.ws-scroll {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;
  gap: 8px;
}

.ps-row {
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-shrink: 0;
}

.ws-bar {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.15s;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  text-align: center;
  min-height: 120px;
}

.ws-bar.available {
  background: #1e88e5;
  color: white;
}

.ws-bar.available:active {
  opacity: 0.85;
  transform: scale(0.98);
}

.ws-bar.borrowed {
  background: #2a2a2a;
  border: 2px solid #3a3a3a;
  color: #a3a3a3;
  cursor: not-allowed;
  opacity: 0.6;
}

.ws-bar-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  gap: 12px;
}

.ws-bar-name {
  font-size: 1.5rem;
  font-weight: 800;
  white-space: nowrap;
}

.ws-bar-detail {
  font-size: 0.85rem;
  opacity: 0.7;
  flex-shrink: 0;
}

.ws-row {
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 8px;
}

.ws-block {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.15s;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  text-align: center;
}

.ws-block.available {
  background: #f5c518;
  color: #1a1a1a;
}

.ws-block.available:active {
  opacity: 0.85;
  transform: scale(0.98);
}

.ws-block.borrowed {
  background: #2a2a2a;
  border: 2px solid #3a3a3a;
  color: #a3a3a3;
  cursor: not-allowed;
  opacity: 0.6;
}

.ws-block-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0 8px;
}

.ws-block-name {
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.1;
}

.ws-block-detail {
  font-size: 0.8rem;
  opacity: 0.65;
  margin-top: 2px;
}

.ws-block-badge {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 100px;
  margin-top: 6px;
}

.ws-block-badge.available {
  background: rgba(0,0,0,0.15);
  color: inherit;
}

.ws-bar .ws-block-badge.available {
  background: rgba(255,255,255,0.2);
  color: white;
}

.ws-block-badge.borrowed {
  background: #404040;
  color: #a3a3a3;
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
  border: 2px solid #3a3a3a;
  border-radius: 14px;
  background: #1a1a1a;
  color: #fff;
  cursor: pointer;
  transition: all 0.15s;
  text-align: center;
}

.ctrl-btn.active {
  border-color: #f5c518;
  background: #f5c518;
  color: #1a1a1a;
}
</style>
