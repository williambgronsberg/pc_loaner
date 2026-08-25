<script setup lang="ts">
import { ref, computed, inject, onMounted } from "vue";
import type { ViewName, TabName, ToastType } from "@/types";
import { useAuth } from "@/composables/useAuth";
import { useDb } from "@/composables/useDb";
import SfIcon from "@/components/SfIcon.vue";
import ConfirmSheet from "@/components/ConfirmSheet.vue";
import BaseSheet from "@/components/BaseSheet.vue";

const currentView = inject<ReturnType<typeof ref<ViewName>>>("currentView")!;
const showToast = inject<(msg: string, type?: ToastType) => void>("showToast")!;
const loading = inject<ReturnType<typeof ref<boolean>>>("loading")!;

const { currentUser, logout } = useAuth();
const {
  workstations,
  activeBorrows,
  subscribeWorkstations,
  subscribeActiveBorrows,
  returnWorkstation,
  getHistory,
  anonymizeOldRecords,
  seedDefaultWorkstations,
  addWorkstation,
  removeWorkstation,
  updateWorkstation,
} = useDb();

const activeTab = ref<TabName>("borrows");
const menuOpen = ref(false);
const tabs = [
  { key: "borrows", label: "Utlån", icon: "list" },
  { key: "history", label: "Historikk", icon: "clock" },
  { key: "manage", label: "Enheter", icon: "gear" },
] as const;
const userEmail = computed(() => currentUser.value?.email ?? "");
const historyRecords = ref<any[]>([]);
const historyLastDoc = ref<any>(null);
const showAddSheet = ref(false);
const addName = ref("");
const addType = ref<"pc" | "playstation">("pc");
const addKeyboard = ref("");
const addMouse = ref("");
const addAccessories = ref("");

function openAddSheet() {
  addName.value = "";
  addKeyboard.value = "";
  addMouse.value = "";
  addAccessories.value = "";
  addType.value = "pc";
  showAddSheet.value = true;
}

async function handleLogout() {
  await logout();
  currentView.value = "student";
}

async function handleReturn(wsId: string) {
  loading.value = true;
  try {
    await returnWorkstation(wsId);
    showToast(`${wsId} er returnert`, "success");
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke returnere", "error");
  } finally {
    loading.value = false;
  }
}

async function loadHistory() {
  loading.value = true;
  try {
    await anonymizeOldRecords();
    historyRecords.value = await getHistory();
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke laste historikk", "error");
  } finally {
    loading.value = false;
  }
}

async function handleSeed() {
  loading.value = true;
  try {
    await seedDefaultWorkstations();
    showToast("Standardenheter er lagt til", "success");
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke sette inn enheter", "error");
  } finally {
    loading.value = false;
  }
}

async function handleAddWs() {
  if (!addName.value.trim()) return;
  loading.value = true;
  try {
    await addWorkstation(addName.value.trim(), addType.value, addKeyboard.value.trim(), addMouse.value.trim(), addAccessories.value.trim());
      showToast(`${addName.value} er lagt til`, "success");
      addName.value = "";
      addKeyboard.value = "";
      addMouse.value = "";
      addAccessories.value = "";
      showAddSheet.value = false;
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke legge til enheten", "error");
  } finally {
    loading.value = false;
  }
}

async function handleRemoveWs(name: string) {
  loading.value = true;
  try {
    await removeWorkstation(name);
    showToast(`${name} er fjernet`, "success");
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke fjerne enheten", "error");
  } finally {
    loading.value = false;
  }
}

interface ConfirmState {
  title: string;
  message?: string;
  confirmLabel: string;
  danger?: boolean;
  onConfirm: () => void;
}

const confirmState = ref<ConfirmState | null>(null);

function requestConfirm(state: ConfirmState) {
  confirmState.value = state;
}

function closeConfirm() {
  confirmState.value = null;
}

function resolveConfirm() {
  const state = confirmState.value;
  if (!state) return;
  confirmState.value = null;
  state.onConfirm();
}

const editingWs = ref<string | null>(null);
const editName = ref("");
const editType = ref<"pc" | "playstation">("pc");
const editKeyboard = ref("");
const editMouse = ref("");
const editAccessories = ref("");

function startEdit(ws: { id: string; name: string; type: string; keyboard: string; mouse: string; accessories: string }) {
  editingWs.value = ws.id;
  editName.value = ws.name;
  editType.value = ws.type as "pc" | "playstation";
  editKeyboard.value = ws.keyboard || "";
  editMouse.value = ws.mouse || "";
  editAccessories.value = ws.accessories || "";
}

function cancelEdit() {
  editingWs.value = null;
}

async function saveEdit() {
  if (!editingWs.value) return;
  loading.value = true;
  try {
    await updateWorkstation(editingWs.value, {
      newName: editName.value.trim(),
      type: editType.value,
      keyboard: editKeyboard.value.trim(),
      mouse: editMouse.value.trim(),
      accessories: editAccessories.value.trim(),
    });
    showToast(`${editingWs.value} er oppdatert`, "success");
    editingWs.value = null;
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke oppdatere enheten", "error");
  } finally {
    loading.value = false;
  }
}

function switchTab(tab: TabName) {
  activeTab.value = tab;
  menuOpen.value = false;
  if (tab === "history") {
    historyRecords.value = [];
    loadHistory();
  }
}

function formatTime(ts: any) {
  if (!ts) return "—";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function formatDate(ts: any) {
  if (!ts) return "—";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

onMounted(() => {
  subscribeWorkstations();
  subscribeActiveBorrows();
});
</script>

<template>
  <div class="admin-split">
    <button class="menu-toggle" :class="{ hidden: menuOpen || confirmState !== null || showAddSheet }" @click="menuOpen = true" aria-label="Åpne meny">
      <SfIcon name="line.3.horizontal" :size="22" />
      <span>Meny</span>
    </button>
    <div v-if="menuOpen" class="sidebar-backdrop" @click="menuOpen = false" />
    <aside class="sidebar" :class="{ open: menuOpen }">
      <div class="sidebar-top">
        <div class="sidebar-title">Admin</div>
        <button class="sidebar-logout" @click="handleLogout">
          Logg ut
        </button>
      </div>
      <nav class="sidebar-nav">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="sidebar-item"
          :class="{ active: activeTab === tab.key }"
          @click="switchTab(tab.key)"
        >
          <SfIcon :name="tab.icon" :size="20" />
          <span>{{ tab.label }}</span>
        </button>
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-email">{{ userEmail }}</div>
      </div>
    </aside>

    <main class="admin-content">
      <!-- Utlån -->
      <section v-show="activeTab === 'borrows'">
        <h2 class="section-title">Utlån</h2>
        <div v-if="activeBorrows.length === 0" class="empty-state">Ingen utlån</div>
        <div v-else class="card-list">
          <div v-for="rec in activeBorrows" :key="rec.id" class="card-row">
            <div class="card-body">
              <div class="card-title">{{ rec.workstation }}</div>
              <div class="card-meta">{{ rec.borrower }}<span v-if="rec.phone"> · {{ rec.phone }}</span></div>
              <div class="card-meta">
                <template v-if="rec.controllers"><SfIcon name="gamecontroller" :size="12" /> {{ rec.controllers }} kontrollere · </template>
                {{ formatTime(rec.borrowedAt) }}
              </div>
            </div>
            <button class="btn-return" @click="requestConfirm({ title: `Returner ${rec.workstation}?`, message: 'Enheten blir tilgjengelig igjen etter retur.', confirmLabel: 'Returner', onConfirm: () => handleReturn(rec.workstation) })">Returner</button>
          </div>
        </div>
      </section>

      <!-- Historikk -->
      <section v-show="activeTab === 'history'">
        <h2 class="section-title">Historikk</h2>
        <div v-if="historyRecords.length === 0" class="empty-state">Ingen historikk</div>
        <div v-else class="card-list">
          <div v-for="rec in historyRecords" :key="rec.id" class="card-row history-row">
            <div class="card-body">
              <div class="card-title">{{ rec.workstation }}</div>
              <div class="card-meta">{{ rec.borrower }}<span v-if="rec.phone"> · {{ rec.phone }}</span></div>
              <div class="card-meta">
                <template v-if="rec.controllers"><SfIcon name="gamecontroller" :size="12" /> {{ rec.controllers }} kontrollere · </template>
                Lånt {{ formatDate(rec.borrowedAt) }}
                <span v-if="rec.returnedAt"> | retur {{ formatDate(rec.returnedAt) }}</span>
              </div>
            </div>
            <span class="card-status" :class="rec.returnedAt ? 'returned' : 'active'">
              {{ rec.returnedAt ? "Returnert" : "Aktiv" }}
            </span>
          </div>
          <!-- "Oppdater" knapp uten paginering -->
        </div>
      </section>

      <!-- Enheter -->
      <section v-show="activeTab === 'manage'">
        <div class="manage-header">
          <h2 class="section-title">Enheter</h2>
          <button class="btn-add-fab" @click="openAddSheet" aria-label="Legg til enhet">+</button>
        </div>

        <div class="card-list manage-list">
          <div v-for="ws in workstations" :key="ws.id" class="card-row manage-row">
            <template v-if="editingWs === ws.id">
              <div class="edit-inline">
                <div class="form-group">
                  <label>Navn</label>
                  <input v-model="editName" class="input" placeholder="Navn" />
                </div>
                <div class="type-picker" style="margin-bottom:8px;">
                  <button type="button" class="type-btn" :class="{ active: editType === 'pc' }" @click="editType = 'pc'">
                    <SfIcon name="desktopcomputer" :size="16" /> PC
                  </button>
                  <button type="button" class="type-btn" :class="{ active: editType === 'playstation' }" @click="editType = 'playstation'">
                    <SfIcon name="gamecontroller" :size="16" /> PS
                  </button>
                </div>
                <input v-model="editKeyboard" class="input" :placeholder="editType === 'playstation' ? 'Tilbehør' : 'Tastatur'" style="margin-bottom:6px;" />
                <input v-if="editType === 'pc'" v-model="editMouse" class="input" placeholder="Mus" style="margin-bottom:6px;" />
                <input v-if="editType === 'pc'" v-model="editAccessories" class="input" placeholder="Annet tilbehør" style="margin-bottom:6px;" />
                <div class="edit-actions">
                  <button class="btn-return" @click="saveEdit">Lagre</button>
                  <button class="btn-remove" @click="cancelEdit">Avbryt</button>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-body">
                <div class="card-title">
                  <SfIcon :name="ws.type === 'playstation' ? 'gamecontroller' : 'desktopcomputer'" :size="16" />
                  {{ ws.name }}
                </div>
                <div class="card-meta">{{ ws.status === 'available' ? 'Ledig' : 'Utlånt' }}</div>
              </div>
              <button
                v-if="ws.status === 'available'"
                class="btn-edit"
                @click="startEdit(ws)"
              >Rediger</button>
              <button
                v-if="ws.status === 'available'"
                class="btn-remove"
                @click="requestConfirm({ title: `Fjern ${ws.name}?`, message: 'Enheten og dens lån blir slettet.', confirmLabel: 'Fjern', danger: true, onConfirm: () => handleRemoveWs(ws.name) })"
              >Fjern</button>
            </template>
          </div>
          <div v-if="workstations.length === 0" class="empty-state">Ingen enheter</div>
        </div>
      </section>
    </main>
  </div>

  <ConfirmSheet
    :show="confirmState !== null"
    :title="confirmState?.title ?? ''"
    :message="confirmState?.message"
    :confirm-label="confirmState?.confirmLabel ?? 'OK'"
    :danger="confirmState?.danger"
    @confirm="resolveConfirm"
    @close="closeConfirm"
  />

  <BaseSheet :show="showAddSheet" @close="showAddSheet = false">
    <h3 style="font-size: 1.0625rem; font-weight: 600; margin-bottom: 16px; color: #ffffff;">Ny enhet</h3>
    <form @submit.prevent="handleAddWs">
      <div class="form-group">
        <label for="sheet-new-name">Navn</label>
        <input id="sheet-new-name" v-model="addName" class="input" placeholder="F.eks. PC 4" required />
      </div>
      <div class="form-group">
        <label>Type</label>
        <div class="type-picker">
          <button type="button" class="type-btn" :class="{ active: addType === 'pc' }" @click="addType = 'pc'">
            <SfIcon name="desktopcomputer" :size="18" /> PC
          </button>
          <button type="button" class="type-btn" :class="{ active: addType === 'playstation' }" @click="addType = 'playstation'">
            <SfIcon name="gamecontroller" :size="18" /> PlayStation
          </button>
        </div>
      </div>
      <div class="form-group">
        <label for="sheet-new-keyboard">{{ addType === 'playstation' ? 'Tilbehør' : 'Tastatur' }}</label>
        <input id="sheet-new-keyboard" v-model="addKeyboard" class="input" :placeholder="addType === 'playstation' ? 'F.eks. Kontroller x2, ladestasjon' : 'F.eks. Tastatur 4'" />
      </div>
      <div v-if="addType === 'pc'" class="form-group">
        <label for="sheet-new-mouse">Mus</label>
        <input id="sheet-new-mouse" v-model="addMouse" class="input" placeholder="F.eks. Mus 4" />
      </div>
      <div v-if="addType === 'pc'" class="form-group">
        <label for="sheet-new-accessories">Annet tilbehør</label>
        <input id="sheet-new-accessories" v-model="addAccessories" class="input" placeholder="F.eks. Headset" />
      </div>
      <button type="submit" class="btn-submit" style="margin-top: 8px;">Legg til</button>
      <button type="button" class="btn btn-secondary btn-full" style="margin-top: 10px;" @click="showAddSheet = false">Avbryt</button>
    </form>
  </BaseSheet>
</template>
<style scoped>
.admin-split {
  display: flex;
  height: 100dvh;
  width: 100%;
  background: #1d1d1f;
  color: #ffffff;
  font-family: "SF Pro Text", system-ui, -apple-system, sans-serif;
}

/* ===== Sidebar ===== */
.sidebar {
  width: 220px;
  background: #2c2c2e;
  border-right: 1px solid #38383a;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.menu-toggle {
  display: none;
  position: fixed;
  bottom: calc(16px + env(safe-area-inset-bottom));
  left: 15px;
  right: 15px;
  z-index: 300;
  width: calc(100% - 30px);
  height: 48px;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  box-shadow:
    inset 0 1px 0 var(--glass-highlight),
    0 8px 32px rgba(0, 0, 0, 0.4);
  color: var(--accent);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9375rem;
  font-weight: 400;
  cursor: pointer;
  transition: transform var(--duration-fast) var(--curve-standard), background var(--duration-fast) var(--curve-standard);
}

.menu-toggle:active { transform: scale(0.95); background: var(--glass-bg-strong); }
.menu-toggle.hidden { opacity: 0; pointer-events: none; }

@media (max-width: 700px) {
  .menu-toggle { display: flex; }
  .sidebar-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
  }
  .sidebar {
    position: fixed;
    left: 0; right: 0; bottom: 0; top: auto;
    width: 100%;
    height: auto;
    max-height: 70dvh;
    z-index: 105;
    background: var(--glass-bg);
    -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
    backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
    border-top: 1px solid var(--glass-border);
    border-right: none;
    border-radius: 18px 18px 0 0;
    box-shadow:
      inset 0 1px 0 var(--glass-highlight),
      0 8px 32px rgba(0, 0, 0, 0.4);
    transform: translateY(100%);
    transition: transform 0.22s var(--curve-standard);
    overflow-y: auto;
    padding-bottom: env(safe-area-inset-bottom);
  }
  .sidebar::before {
    content: "";
    display: block;
    width: 36px;
    height: 4px;
    border-radius: 2px;
    background: rgba(255,255,255,0.28);
    margin: 10px auto 0;
    flex-shrink: 0;
  }
  .sidebar.open { transform: translateY(0); }
  .sidebar-top { padding-top: 10px; }
  .sidebar-nav { flex-direction: column; padding: 8px 16px 16px; gap: 2px; }
  .sidebar-item { flex: none; flex-direction: row; justify-content: flex-start; padding: 12px; font-size: 0.9375rem; gap: 10px; border-radius: 10px; min-height: 44px; }
  .sidebar-item.active { background: rgba(245, 197, 24, 0.15); color: #f5c518; }
  .sidebar-footer { display: block; }
}

.sidebar-top {
  padding: 22px 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-title {
  font-family: "SF Pro Display", system-ui, sans-serif;
  font-size: 1.3125rem;
  font-weight: 600;
  letter-spacing: -0.014em;
  color: #ffffff;
}

.sidebar-logout {
  background: none;
  border: none;
  color: #f5c518;
  font-size: 0.8125rem;
  font-weight: 400;
  cursor: pointer;
  padding: 4px 0;
}

.sidebar-nav {
  flex: 1;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border: none;
  background: transparent;
  color: #999999;
  font-size: 0.9375rem;
  font-weight: 400;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  text-align: left;
  width: 100%;
}

.sidebar-item.active {
  background: rgba(245, 197, 24, 0.12);
  color: #f5c518;
  font-weight: 600;
}

.sidebar-footer {
  padding: 14px 20px;
  border-top: 1px solid #333333;
}

.sidebar-email {
  font-size: 0.75rem;
  color: #999999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ===== Content ===== */
.admin-content {
  flex: 1;
  padding: 32px 40px;
  overflow-y: auto;
  background: #1d1d1f;
}

@media (max-width: 700px) {
  .admin-content { padding: 20px 16px 90px; }
  .section-title { font-size: 1.125rem; margin-bottom: 14px; }
}

.section-title {
  font-family: "SF Pro Display", system-ui, sans-serif;
  font-size: 1.3125rem;
  font-weight: 600;
  letter-spacing: -0.016em;
  margin-bottom: 20px;
  color: #ffffff;
}

.manage-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.manage-header .section-title {
  margin-bottom: 0;
}

.btn-add-fab {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #f5c518;
  color: #1d1d1f;
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s, background 0.15s;
}

.btn-add-fab:active {
  transform: scale(0.92);
  background: #f7cf3f;
}

/* ===== Cards ("store-utility-card", dark tile variant) ===== */
.manage-list { container-type: inline-size; }

.card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.card-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  background: #272729;
  border: 1px solid #3a3a3c;
  border-radius: 18px;
}

@media (max-width: 700px) {
  .card-row { padding: 12px 14px; gap: 8px; border-radius: 14px; }
  .card-title { font-size: 0.9375rem; }
  .card-meta { font-size: 0.8125rem; }
  .card-status { font-size: 0.75rem; }
  .add-form { padding: 20px; }
  .add-form h3 { font-size: 0.9375rem; }
  .type-btn { padding: 10px; font-size: 0.8125rem; min-height: 44px; }
  .btn-return, .btn-edit, .btn-remove { padding: 8px 16px; font-size: 0.8125rem; min-height: 40px; display: inline-flex; align-items: center; justify-content: center; }
  .btn-load, .btn-seed { padding: 12px; font-size: 0.8125rem; min-height: 44px; }
  .btn-submit { padding: 14px; font-size: 0.9375rem; min-height: 48px; }
  .form-group label { font-size: 0.8125rem; }
  .edit-inline { gap: 6px; }
  .edit-inline .form-group { min-width: 0; }
  input.input { font-size: 1rem; padding: 12px; }
  .history-row { flex-direction: column; align-items: flex-start; }
  .history-row .card-body { width: 100%; }
}

@container (max-width: 360px) {
  .manage-row { flex-direction: column; align-items: stretch; gap: 10px; }
  .manage-row .card-body { width: 100%; }
  .manage-row .btn-edit, .manage-row .btn-remove { flex: 1; padding: 10px; }
  .edit-actions { gap: 8px; }
  .type-picker { flex-wrap: wrap; }
  .type-btn { min-width: 0; }
  input.input { font-size: 1rem; }
}

.manage-row { flex-wrap: wrap; }
.card-body { flex: 1; min-width: 0; }

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 6px;
}

.card-meta {
  font-size: 0.875rem;
  color: #999999;
  margin-top: 3px;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ===== Buttons ===== */
.btn-return {
  background: #f5c518;
  border: none;
  color: #1d1d1f;
  padding: 8px 18px;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.15s, background 0.15s;
}

.btn-return:active { transform: scale(0.95); background: #f7cf3f; }

.btn-remove {
  background: none;
  border: 1px solid #3a3a3c;
  color: #999999;
  padding: 8px 18px;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.15s, color 0.15s;
}

.btn-remove:active { transform: scale(0.95); color: #ff6961; }

.btn-edit {
  background: none;
  border: 1px solid #3a3a3c;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.15s;
}

.btn-edit:active { transform: scale(0.95); background: #333333; }

.edit-inline { width: 100%; }

.edit-name {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
}

.edit-actions {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.edit-actions .btn-return,
.edit-actions .btn-remove {
  flex: 1;
}

.btn-load {
  width: 100%;
  padding: 12px;
  background: #272729;
  border: 1px solid #3a3a3c;
  color: #ffffff;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  transition: transform 0.15s;
}

.btn-load:active { transform: scale(0.98); }

/* ===== Status ===== */
.card-status {
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 100px;
  white-space: nowrap;
}

.card-status.returned {
  background: #333333;
  color: #999999;
}

.card-status.active {
  background: rgba(245, 197, 24, 0.15);
  color: #f5c518;
}

/* ===== Seed button ===== */
.btn-seed {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: #272729;
  border: 1px solid #3a3a3c;
  color: #ffffff;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  margin-bottom: 16px;
  transition: transform 0.15s;
}

.btn-seed:active { transform: scale(0.98); }

/* ===== Add form ===== */
.add-form {
  background: #252527;
  border: 1px solid #3a3a3c;
  border-radius: 18px;
  padding: 24px;
}

.add-form h3 {
  font-family: "SF Pro Display", system-ui, sans-serif;
  font-size: 1.0625rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #ffffff;
}

@media (max-width: 700px) {
  .type-btn { padding: 10px; font-size: 0.8125rem; }
}

.type-picker { display: flex; gap: 8px; }

.type-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  font-size: 0.875rem;
  font-weight: 400;
  border: 1px solid #3a3a3c;
  border-radius: 100px;
  background: #1d1d1f;
  color: #999999;
  cursor: pointer;
  transition: transform 0.15s, border-color 0.15s;
}

.type-btn:active { transform: scale(0.96); }

.type-btn.active {
  border: 2px solid #f5c518;
  color: #f5c518;
  font-weight: 600;
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background: #f5c518;
  color: #1d1d1f;
  border: none;
  border-radius: 100px;
  font-size: 0.9375rem;
  font-weight: 400;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
}

.btn-submit:active { transform: scale(0.97); background: #f7cf3f; }

/* ===== Empty state ===== */
.empty-state {
  text-align: center;
  color: #666666;
  padding: 32px 16px;
  font-size: 0.875rem;
}

/* ===== Inputs ===== */
:deep(.input) {
  background: #1d1d1f !important;
  border: 1px solid #3a3a3c !important;
  border-radius: 12px !important;
  color: #ffffff !important;
}

:deep(.input:focus) {
  border-color: #f5c518 !important;
  box-shadow: 0 0 0 3px rgba(245, 197, 24, 0.25) !important;
}

:deep(.input::placeholder) {
  color: #666666 !important;
}

:deep(.form-group label) {
  color: #999999 !important;
  font-size: 0.8125rem !important;
}
</style>