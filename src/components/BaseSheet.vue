<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

const props = defineProps<{ show: boolean }>();
const emit = defineEmits<{ close: [] }>();

const sheetRef = ref<HTMLElement | null>(null);

let startY = 0;
let currentY = 0;
let dragging = false;

function onTouchStart(e: TouchEvent) {
  if (!sheetRef.value) return;
  const rect = sheetRef.value.getBoundingClientRect();
  const touchY = e.touches[0].clientY;
  // only start drag when touching handle area (top 40px of sheet)
  if (touchY - rect.top < 40) {
    startY = touchY;
    dragging = true;
  }
}

function onTouchMove(e: TouchEvent) {
  if (!dragging) return;
  // prevent scroll while dragging sheet
  e.preventDefault();
  currentY = e.touches[0].clientY - startY;
  if (currentY > 0 && sheetRef.value) {
    sheetRef.value.style.transform = `translateY(${currentY}px)`;
  }
}

function onTouchEnd() {
  if (!dragging) return;
  dragging = false;
  if (currentY > 100 && sheetRef.value) {
    emit("close");
  }
  if (sheetRef.value) {
    sheetRef.value.style.transform = "";
  }
  currentY = 0;
}
</script>

<template>
  <Teleport to="body">
    <Transition name="sheet">
      <div v-if="show" class="sheet-overlay" @click.self="emit('close')">
        <div
          ref="sheetRef"
          class="sheet glass-strong"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <div class="sheet-handle" />
          <div class="sheet-content">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.sheet-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 400;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
}

.sheet {
  width: 100%;
  max-width: 500px;
  border-radius: 20px 20px 0 0;
  padding: 8px 0 calc(16px + env(safe-area-inset-bottom));
  transition: transform var(--duration-normal) var(--curve-standard);
  will-change: transform;
  max-height: 92dvh;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.sheet-handle {
  width: 36px;
  height: 5px;
  border-radius: 3px;
  background: rgba(255,255,255,0.28);
  margin: 8px auto 16px;
  flex-shrink: 0;
}

.sheet-content {
  padding: 0 24px 16px;
}

.sheet-enter-active,
.sheet-leave-active {
  transition: all var(--duration-slow) var(--curve-standard);
}

.sheet-enter-from .sheet,
.sheet-leave-to .sheet {
  transform: translateY(100%);
}

.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
}
</style>
