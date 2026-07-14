<script setup lang="ts">
import { ref, inject, onMounted, computed, nextTick } from "vue";
import type { ViewName, ToastType } from "@/types";
import { useDb } from "@/composables/useDb";
import SfIcon from "@/components/SfIcon.vue";
import BaseSheet from "@/components/BaseSheet.vue";

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

const PS_COLOR = "#3B82F6";
const PC_COLOR = "#22C55E";
const UNAVAILABLE = "#E5E7EB";

function wsBg(ws: { type: string; status: string }) {
  if (ws.status !== "available") return UNAVAILABLE;
  return ws.type === "playstation" ? PS_COLOR : PC_COLOR;
}

function wsTextColor(ws: { type: string; status: string }) {
  return ws.status === "available" ? "#fff" : "#9CA3AF";
}

function badgeBg(ws: { status: string }) {
  return ws.status === "available" ? "#22C55E" : "#EF4444";
}

function badgeText(ws: { status: string }) {
  return ws.status === "available" ? "Ledig" : "Opptatt";
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
        <div class="section-label"><SfIcon name="gamecontroller" :size="14" /> PlayStation</div>
        <div class="card-row">
          <div
            v-for="ws in psList"
            :key="ws.id"
            class="card"
            :class="{ borrowed: ws.status !== 'available' }"
            :style="{ background: wsBg(ws), color: wsTextColor(ws) }"
            tabindex="0"
            role="button"
            @click="ws.status === 'available' && openBorrow(ws.id)"
            @keydown.enter="ws.status === 'available' && openBorrow(ws.id)"
          >
            <div class="card-name">{{ ws.name }}</div>
            <div v-if="ws.keyboard" class="card-detail">{{ ws.keyboard }}</div>
            <div class="card-badge" :style="{ background: badgeBg(ws), color: '#fff' }">
              {{ badgeText(ws) }}
            </div>
          </div>
        </div>
      </div>

      <div v-if="pcs.length" class="section">
        <div class="section-label"><SfIcon name="desktopcomputer" :size="14" /> PC</div>
        <div class="card-row">
          <div
            v-for="ws in pcs"
            :key="ws.id"
            class="card"
            :class="{ borrowed: ws.status !== 'available' }"
            :style="{ background: wsBg(ws), color: wsTextColor(ws) }"
            tabindex="0"
            role="button"
            @click="ws.status === 'available' && openBorrow(ws.id)"
            @keydown.enter="ws.status === 'available' && openBorrow(ws.id)"
          >
            <div class="card-name">{{ ws.name }}</div>
            <div v-if="ws.keyboard || ws.mouse" class="card-detail">
              {{ [ws.keyboard, ws.mouse].filter(Boolean).join(" · ") }}
            </div>
            <div class="card-badge" :style="{ background: badgeBg(ws), color: '#fff' }">
              {{ badgeText(ws) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <BaseSheet :show="showModal" @close="cancel">
      <div class="sheet-emoji"><SfIcon :name="isPs ? 'gamecontroller' : 'desktopcomputer'" :size="40" /></div>
      <h3 class="sheet-title">{{ selected?.name }}</h3>
      <p class="sheet-sub">Skriv navnet ditt for å låne</p>

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
        <label>Antall kontrollere</label>
        <div class="segmented-control">
          <button
            v-for="n in [1, 2, 3, 4]"
            :key="n"
            class="segmented-btn"
            :class="{ active: controllerCount === n }"
            @click="controllerCount = n"
          >{{ n }}</button>
        </div>
      </div>

      <div class="sheet-actions">
        <button class="btn btn-primary btn-full" :disabled="!borrowerName.trim()" @click="confirm">
          Bekreft lån
        </button>
        <button class="btn btn-secondary btn-full" @click="cancel">Avbryt</button>
      </div>
    </BaseSheet>
  </div>
</template>

<style scoped>
.student-layout {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
  background: var(--bg);
  color: var(--text-primary);
  position: relative;
}

.admin-corner {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  background: var(--text-primary);
  color: var(--card);
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
  padding: 16px;
  gap: 24px;
  overflow-y: auto;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-tertiary);
  margin-bottom: 10px;
}

.card-row {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 24px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all var(--duration-fast) var(--curve-standard);
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  text-align: center;
  box-shadow: var(--shadow-card);
}

.card:active {
  transform: scale(0.97);
  opacity: 0.9;
}

.card.borrowed {
  cursor: not-allowed;
}

.card-name {
  font-size: 1.5rem;
  font-weight: 800;
}

.card-detail {
  font-size: 0.8125rem;
  opacity: 0.75;
}

.card-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 5px 16px;
  border-radius: 100px;
  margin-top: 4px;
}

.sheet-emoji {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.sheet-title {
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  color: var(--text-primary, #1C1C1E);
  margin-bottom: 4px;
}

.sheet-sub {
  text-align: center;
  color: var(--text-secondary, #3A3A3C);
  font-size: 0.9375rem;
  margin-bottom: 20px;
}

.segmented-control {
  display: flex;
  gap: 0;
  border: 1px solid var(--separator, #C6C6C8);
  border-radius: 10px;
  overflow: hidden;
}

.segmented-btn {
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background: transparent;
  color: var(--text-secondary, #3A3A3C);
  cursor: pointer;
  transition: all var(--duration-fast) var(--curve-standard);
  text-align: center;
}

.segmented-btn:last-child {
  border-right: none;
}

.segmented-btn.active {
  background: var(--accent-ps, #0A84FF);
  color: var(--button-text, #fff);
}

.sheet-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
</style>
