<script setup lang="ts">
import { ref, computed, inject, onMounted } from "vue";
import type { ViewName, TabName, ToastType } from "@/types";
import { useAuth } from "@/composables/useAuth";
import { useDb } from "@/composables/useDb";
import SfIcon from "@/components/SfIcon.vue";

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
  seedDefaultWorkstations,
  addWorkstation,
  removeWorkstation,
  updateWorkstation,
} = useDb();

const activeTab = ref<TabName>("borrows");
const tabs = [
  { key: "borrows", label: "Utlån", icon: "list" },
  { key: "history", label: "Historikk", icon: "clock" },
  { key: "manage", label: "Enheter", icon: "gear" },
] as const;
const userEmail = computed(() => currentUser.value?.email ?? "");
const historyRecords = ref<any[]>([]);
const historyLastDoc = ref<any>(null);
const addName = ref("");
const addType = ref<"pc" | "playstation">("pc");
const addKeyboard = ref("");
const addMouse = ref("");
const addAccessories = ref("");

async function handleLogout() {
  await logout();
  currentView.value = "student";
}

async function handleReturn(wsId: string) {
  if (!confirm(`Returner ${wsId}?`)) return;
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
    historyRecords.value = await getHistory();
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke laste historikk", "error");
  } finally {
    loading.value = false;
  }
}

async function handleSeed() {
  if (!confirm("Sett inn standardenheter?")) return;
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
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke legge til enheten", "error");
  } finally {
    loading.value = false;
  }
}

async function handleRemoveWs(name: string) {
  if (!confirm(`Fjern ${name}?`)) return;
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
    <aside class="sidebar">
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
            <button class="btn-return" @click="handleReturn(rec.workstation)">Returner</button>
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
        <h2 class="section-title">Enheter</h2>

        <div class="card-list">
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
                @click="handleRemoveWs(ws.name)"
              >Fjern</button>
            </template>
          </div>
          <div v-if="workstations.length === 0" class="empty-state">Ingen enheter</div>
        </div>

        <button class="btn-seed" @click="handleSeed">
          <SfIcon name="tray.and.arrow.down" :size="16" />
          Sett inn standardenheter
        </button>

        <form class="add-form" @submit.prevent="handleAddWs">
          <h3>Ny enhet</h3>
          <div class="form-group">
            <label for="new-name">Navn</label>
            <input id="new-name" v-model="addName" class="input" placeholder="F.eks. PC 4" required />
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
            <label for="new-keyboard">{{ addType === 'playstation' ? 'Tilbehør' : 'Tastatur' }}</label>
            <input id="new-keyboard" v-model="addKeyboard" class="input" :placeholder="addType === 'playstation' ? 'F.eks. Kontroller x2, ladestasjon' : 'F.eks. Tastatur 4'" />
          </div>
          <div v-if="addType === 'pc'" class="form-group">
            <label for="new-mouse">Mus</label>
            <input id="new-mouse" v-model="addMouse" class="input" placeholder="F.eks. Mus 4" />
          </div>
          <div v-if="addType === 'pc'" class="form-group">
            <label for="new-accessories">Annet tilbehør</label>
            <input id="new-accessories" v-model="addAccessories" class="input" placeholder="F.eks. Headset" />
          </div>
          <button type="submit" class="btn-submit">Legg til</button>
        </form>
      </section>
    </main>
  </div>
</template>

<style scoped>
.admin-split {
  display: flex;
  height: 100dvh;
  width: 100%;
  background: #000;
  color: #fff;
}

/* ===== Sidebar ===== */
.sidebar {
  width: 220px;
  background: #111;
  border-right: 1px solid #222;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

@media (max-width: 700px) {
  .sidebar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    border-right: none;
    border-top: 1px solid #222;
    z-index: 100;
    flex-direction: row;
  }
  .sidebar-top { display: none; }
  .sidebar-nav {
    flex-direction: row;
    padding: 6px 8px;
    gap: 4px;
  }
  .sidebar-item {
    flex: 1;
    justify-content: center;
    padding: 8px 6px;
    font-size: 0.75rem;
    gap: 4px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
  }
  .sidebar-footer { display: none; }
}

.sidebar-top {
  padding: 20px 16px 16px;
  border-bottom: 1px solid #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 800;
}

.sidebar-logout {
  background: none;
  border: none;
  color: #f5c518;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
}

.sidebar-logout:active {
  background: #222;
}

.sidebar-nav {
  flex: 1;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: none;
  background: transparent;
  color: #888;
  font-size: 0.9375rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
  width: 100%;
}

.sidebar-item:active {
  background: #222;
}

.sidebar-item.active {
  background: #f5c518;
  color: #111;
}

.sidebar-footer {
  padding: 12px 16px;
  border-top: 1px solid #222;
}

.sidebar-email {
  font-size: 0.75rem;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ===== Content ===== */
.admin-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

@media (max-width: 700px) {
  .admin-content {
    padding: 14px;
    padding-bottom: 80px;
  }
}

.section-title {
  font-size: 1.0625rem;
  font-weight: 700;
  margin-bottom: 14px;
  color: #fff;
}

/* ===== Cards ===== */
.card-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
}

.card-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #1a1a1a;
  border-radius: 14px;
  border: 1px solid #2a2a2a;
}

@media (max-width: 700px) {
  .card-row {
    padding: 12px 12px;
    gap: 8px;
    flex-wrap: wrap;
  }
  .card-body { min-width: 0; flex: 1 1 60%; }
}

.manage-row {
  flex-wrap: wrap;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;
}

.card-meta {
  font-size: 0.8125rem;
  color: #666;
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ===== Buttons ===== */
.btn-return {
  background: none;
  border: 1px solid #f5c518;
  color: #f5c518;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 0.8125rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.1s;
}

.btn-return:active {
  background: #f5c518;
  color: #111;
}

.btn-remove {
  background: none;
  border: 1px solid #ef4444;
  color: #ef4444;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 0.8125rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

.btn-remove:active {
  background: #ef4444;
  color: #fff;
}

.btn-edit {
  background: none;
  border: 1px solid #555;
  color: #888;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 0.8125rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

.btn-edit:active {
  background: #555;
  color: #fff;
}

.edit-inline {
  width: 100%;
}

.edit-name {
  font-size: 0.9375rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}

.edit-actions {
  display: flex;
  gap: 8px;
  margin-top: 6px;
}

.edit-actions .btn-return,
.edit-actions .btn-remove {
  flex: 1;
}

.btn-load {
  width: 100%;
  padding: 12px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  color: #888;
  border-radius: 14px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-load:active {
  background: #222;
}

/* ===== Status badge ===== */
.card-status {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 100px;
  white-space: nowrap;
}

.card-status.returned {
  background: #22c55e;
  color: #fff;
}

.card-status.active {
  background: #f5c518;
  color: #111;
}

/* ===== Seed button ===== */
.btn-seed {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  color: #888;
  border-radius: 14px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 14px;
}

.btn-seed:active {
  background: #222;
}

/* ===== Add form ===== */
.add-form {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 20px;
}

.add-form h3 {
  font-size: 0.9375rem;
  font-weight: 700;
  margin-bottom: 14px;
  color: #fff;
}

@media (max-width: 700px) {
  .add-form { padding: 14px; }
  .type-btn { padding: 10px; font-size: 0.8125rem; }
}

.type-picker {
  display: flex;
  gap: 8px;
}

.type-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  background: #111;
  color: #888;
  cursor: pointer;
}

.type-btn.active {
  border-color: #f5c518;
  background: #f5c518;
  color: #111;
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background: #f5c518;
  color: #111;
  border: none;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
}

.btn-submit:active {
  opacity: 0.85;
}

/* ===== Empty state ===== */
.empty-state {
  text-align: center;
  color: #555;
  padding: 32px 16px;
  font-size: 0.875rem;
}

/* ===== Override global input for dark admin ===== */
:deep(.input) {
  background: #111 !important;
  border-color: #2a2a2a !important;
  color: #fff !important;
}

:deep(.input:focus) {
  border-color: #f5c518 !important;
}

:deep(.input::placeholder) {
  color: #555 !important;
}

:deep(.form-group label) {
  color: #888 !important;
}
</style>
