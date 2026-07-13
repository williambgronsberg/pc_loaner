<script setup lang="ts">
import { ref, provide } from "vue";
import type { ViewName, ToastType } from "@/types";
import StudentView from "@/views/StudentView.vue";
import LoginView from "@/views/LoginView.vue";
import AdminView from "@/views/AdminView.vue";

const currentView = ref<ViewName>("student");

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}
const toasts = ref<Toast[]>([]);
let toastId = 0;

function showToast(message: string, type: ToastType = "info") {
  const id = ++toastId;
  toasts.value.push({ id, message, type });
  setTimeout(() => {
    const idx = toasts.value.findIndex((t) => t.id === id);
    if (idx !== -1) toasts.value.splice(idx, 1);
  }, 3000);
}

provide("showToast", showToast);
provide("currentView", currentView);

const loading = ref(false);
provide("loading", loading);
</script>

<template>
  <div id="toast-container">
    <div
      v-for="t in toasts"
      :key="t.id"
      class="toast"
      :class="t.type"
    >{{ t.message }}</div>
  </div>

  <div id="loading-overlay" v-if="loading">
    <div class="spinner"></div>
    <p>Laster...</p>
  </div>

  <StudentView v-if="currentView === 'student'" />
  <LoginView v-else-if="currentView === 'login'" />
  <AdminView v-else-if="currentView === 'admin'" />
</template>

<style>
@import url("https://williambgronsberg.github.io/pc_loaner/css/style.css");
</style>
