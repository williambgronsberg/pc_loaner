<script setup lang="ts">
import { ref, computed, inject, onMounted, onUnmounted } from "vue";
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
} = useDb();

const activeTab = ref<TabName>("borrows");
const tabs = [
  { key: "borrows", label: "Utlån", icon: "📋" },
  { key: "history", label: "Historikk", icon: "🕐" },
  { key: "manage", label: "Enheter", icon: "⚙️" },
] as const;
const userEmail = computed(() => currentUser.value?.email ?? "");
const historyRecords = ref<any[]>([]);
const historyLastDoc = ref<any>(null);
const addName = ref("");
const addType = ref<"pc" | "playstation">("pc");
const addKeyboard = ref("");
const addMouse = ref("");

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

async function loadHistory(append = false) {
  loading.value = true;
  try {
    const result = await getHistory(20, append ? historyLastDoc.value : null);
    historyLastDoc.value = result.lastVisible;
    if (append) {
      historyRecords.value.push(...result.records);
    } else {
      historyRecords.value = result.records;
    }
  } catch (err) {
    console.error(err);
    showToast("Kunne ikke laste historikk", "error");
  } finally {
    loading.value = false;
  }
}

async function handleSeed() {
  if (!confirm("Sett inn standardenheter (PC 1, PC 2, PC 3)?")) return;
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
      await addWorkstation(addName.value.trim(), addType.value, addKeyboard.value.trim(), addMouse.value.trim());
      showToast(`${addName.value} er lagt til`, "success");
      addName.value = "";
      addKeyboard.value = "";
      addMouse.value = "";
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

function switchTab(tab: TabName) {
  activeTab.value = tab;
  if (tab === "history") {
    historyRecords.value = [];
    historyLastDoc.value = null;
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
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-top">
        <div class="sidebar-title">Admin</div>
        <button class="sidebar-close" @click="handleLogout">
          <span class="sidebar-close-icon">←</span>
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
          <span class="sidebar-item-icon">{{ tab.icon }}</span>
          <span class="sidebar-item-label">{{ tab.label }}</span>
        </button>
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-footer-text">{{ userEmail }}</div>
      </div>
    </aside>

    <!-- Content area -->
    <main class="admin-content">
      <!-- === ACTIVE BORROWS === -->
      <section v-show="activeTab === 'borrows'">
        <h2 class="section-title">Utlånt utstyr</h2>
        <div v-if="activeBorrows.length === 0" class="empty-state">Ingen utlånt utstyr</div>
        <div v-else class="borrows-list">
          <div v-for="rec in activeBorrows" :key="rec.id" class="borrow-card">
            <div class="borrow-card-info">
              <h4>{{ rec.workstation }}</h4>
              <p>Lånt av: {{ rec.borrower }}</p>
              <div v-if="rec.controllers" class="borrow-card-time">🎮 {{ rec.controllers }} kontrollere</div>
              <div class="borrow-card-time">{{ formatTime(rec.borrowedAt) }}</div>
            </div>
            <button
              class="btn btn-danger btn-sm"
              @click="handleReturn(rec.workstation)"
            >Returner</button>
          </div>
        </div>
      </section>

      <!-- === HISTORY === -->
      <section v-show="activeTab === 'history'">
        <h2 class="section-title">Historikk</h2>
        <div v-if="historyRecords.length === 0" class="empty-state">Ingen historikk</div>
        <div v-else class="borrows-list">
          <div v-for="rec in historyRecords" :key="rec.id" class="borrow-card">
            <div class="borrow-card-info">
              <h4>{{ rec.workstation }}</h4>
              <p>Lånt av: {{ rec.borrower }}</p>
              <div v-if="rec.controllers" class="borrow-card-time">🎮 {{ rec.controllers }} kontrollere</div>
              <div class="borrow-card-time">
                Lånt: {{ formatDate(rec.borrowedAt) }}
                <span v-if="rec.returnedAt"> | Returnert: {{ formatDate(rec.returnedAt) }}</span>
              </div>
            </div>
            <span
              style="font-size:0.8125rem;font-weight:600;"
              :style="{ color: rec.returnedAt ? 'var(--accent-success)' : 'var(--accent-error)' }"
            >{{ rec.returnedAt ? "Returnert" : "Aktiv" }}</span>
          </div>
          <button
            v-if="historyRecords.length >= 20"
            class="btn btn-secondary btn-full"
            @click="loadHistory(true)"
          >Last flere</button>
        </div>
      </section>

      <!-- === MANAGE === -->
      <section v-show="activeTab === 'manage'">
        <h2 class="section-title">Administrer enheter</h2>

        <div class="workstations-manage-list">
          <div v-for="ws in workstations" :key="ws.id" class="ws-manage-item">
            <div>
              <div class="ws-name"><SfIcon :name="ws.type === 'playstation' ? 'gamecontroller' : 'desktopcomputer'" :size="16" /> {{ ws.name }}</div>
              <div class="ws-status">{{ ws.status === 'available' ? 'Ledig' : 'Utlånt' }}</div>
            </div>
            <button
              v-if="ws.status === 'available'"
              class="btn-text"
              @click="handleRemoveWs(ws.name)"
            >Fjern</button>
          </div>
          <div v-if="workstations.length === 0" class="empty-state">Ingen enheter</div>
        </div>

        <button class="btn btn-secondary btn-full" style="margin-bottom:16px;" @click="handleSeed">
          Sett inn standardenheter (PS 1-2 + PC 1-3)
        </button>

        <form class="add-form" @submit.prevent="handleAddWs">
          <h3>Legg til ny enhet</h3>
          <div class="form-group">
            <label for="new-name">Navn</label>
            <input id="new-name" v-model="addName" class="input" placeholder="F.eks. PC 4" required />
          </div>
          <div class="form-group">
            <label>Type</label>
            <div style="display:flex;gap:8px;">
              <button type="button" class="btn" :class="addType === 'pc' ? 'btn-primary' : 'btn-secondary'" style="flex:1;gap:6px;" @click="addType = 'pc'"><SfIcon name="desktopcomputer" :size="16" /> PC</button>
              <button type="button" class="btn" :class="addType === 'playstation' ? 'btn-primary' : 'btn-secondary'" style="flex:1;gap:6px;" @click="addType = 'playstation'"><SfIcon name="gamecontroller" :size="16" /> PlayStation</button>
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
          <button type="submit" class="btn btn-primary">Legg til</button>
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
  background: var(--bg, #F2F2F7);
}

.sidebar {
  width: 240px;
  background: var(--card, #FFFFFF);
  border-right: 1px solid var(--separator, #C6C6C8);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 20px 0;
}

.sidebar-top {
  padding: 0 20px 20px;
  border-bottom: 1px solid var(--separator, #C6C6C8);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-primary, #1C1C1E);
}

.sidebar-close {
  background: none;
  border: none;
  color: var(--accent-ps, #0A84FF);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
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
  gap: 12px;
  padding: 12px 16px;
  border: none;
  background: transparent;
  color: var(--text-secondary, #3A3A3C);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all var(--duration-fast) var(--curve-standard);
  text-align: left;
  width: 100%;
}

.sidebar-item:hover {
  background: var(--fill, #E5E5EA);
}

.sidebar-item.active {
  background: var(--accent-ps, #0A84FF);
  color: var(--button-text, #FFFFFF);
}

.sidebar-item-icon {
  font-size: 1.25rem;
  width: 28px;
  text-align: center;
  flex-shrink: 0;
}

.sidebar-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--separator, #C6C6C8);
}

.sidebar-footer-text {
  font-size: 0.8125rem;
  color: var(--text-tertiary, #8E8E93);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.admin-content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  max-width: 800px;
}
</style>
