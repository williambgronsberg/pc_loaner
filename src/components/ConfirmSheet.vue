<script setup lang="ts">
import BaseSheet from "@/components/BaseSheet.vue";

defineProps<{
  show: boolean;
  title: string;
  message?: string;
  confirmLabel: string;
  cancelLabel?: string;
  danger?: boolean;
}>();

const emit = defineEmits<{ confirm: []; close: [] }>();
</script>

<template>
  <BaseSheet :show="show" @close="emit('close')">
    <div class="confirm-head">
      <h3>{{ title }}</h3>
      <p v-if="message" class="confirm-message">{{ message }}</p>
    </div>
    <div class="confirm-actions">
      <button class="confirm-btn confirm-primary" :class="{ danger }" @click="emit('confirm')">
        {{ confirmLabel }}
      </button>
      <button class="confirm-btn confirm-cancel" @click="emit('close')">
        {{ cancelLabel ?? "Avbryt" }}
      </button>
    </div>
  </BaseSheet>
</template>

<style scoped>
.confirm-head {
  margin-bottom: 16px;
}

.confirm-head h3 {
  font-size: 1.0625rem;
  font-weight: 800;
  color: #fff;
  text-align: left;
  margin: 0 0 6px;
}

.confirm-message {
  font-size: 0.875rem;
  color: #888;
  margin: 0;
}

.confirm-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.confirm-btn {
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 15px;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
  min-height: 48px;
  transition: opacity 0.15s;
}

.confirm-btn:active {
  opacity: 0.85;
}

.confirm-primary {
  background: #f5c518;
  color: #111;
}

.confirm-primary.danger {
  background: #e53935;
  color: #fff;
}

.confirm-cancel {
  background: #2a2a2a;
  color: #fff;
}
</style>