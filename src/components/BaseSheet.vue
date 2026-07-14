<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

const props = defineProps<{ show: boolean }>();
const emit = defineEmits<{ close: [] }>();

const sheetRef = ref<HTMLElement | null>(null);

let startY = 0;
let currentY = 0;
let dragging = false;

function onTouchStart(e: TouchEvent) {
  if (e.touches[0].clientY < 40) {
    startY = e.touches[0].clientY;
    dragging = true;
  }
}

function onTouchMove(e: TouchEvent) {
  if (!dragging) return;
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
          class="sheet"
          @touchstart.prevent="onTouchStart"
          @touchmove.prevent="onTouchMove"
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
  z-index: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.sheet {
  width: 100%;
  max-width: 500px;
  background: var(--card, #fff);
  border-radius: 20px 20px 0 0;
  box-shadow: var(--shadow-sheet, 0 -4px 24px rgba(0,0,0,0.15));
  padding: 8px 0 24px;
  transition: transform var(--duration-normal) var(--curve-standard);
  will-change: transform;
  max-height: 85dvh;
  overflow-y: auto;
}

.sheet-handle {
  width: 36px;
  height: 5px;
  border-radius: 3px;
  background: var(--separator, #C6C6C8);
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
