<script setup lang="ts">
import { ref, inject } from "vue";
import type { ViewName, ToastType } from "@/types";
import { useAuth } from "@/composables/useAuth";

const currentView = inject<ReturnType<typeof ref<ViewName>>>("currentView")!;
const showToast = inject<(msg: string, type?: ToastType) => void>("showToast")!;
const loading = inject<ReturnType<typeof ref<boolean>>>("loading")!;

const { login } = useAuth();

const email = ref("");
const password = ref("");
const errorMsg = ref("");

async function handleLogin() {
  errorMsg.value = "";
  loading.value = true;
  try {
    await login(email.value, password.value);
    currentView.value = "admin";
  } catch (err: any) {
    const code = err.code;
    if (code === "auth/user-not-found") errorMsg.value = "Bruker ikke funnet";
    else if (code === "auth/wrong-password") errorMsg.value = "Feil passord";
    else if (code === "auth/invalid-email") errorMsg.value = "Ugyldig e-post";
    else if (code === "auth/too-many-requests")
      errorMsg.value = "For mange forsøk. Prøv igjen senere.";
    else errorMsg.value = "Feil e-post eller passord";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="view active">
    <header class="header">
      <div class="header-top">
        <button class="btn-text back-btn" @click="currentView = 'student'">
          &larr; Tilbake
        </button>
        <h1 class="header-title">Admin</h1>
      </div>
    </header>
    <main class="content">
      <section class="card login-card">
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="login-email">E-post</label>
            <input
              id="login-email"
              v-model="email"
              class="input"
              type="email"
              placeholder="admin@eksempel.no"
              autocomplete="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="login-password">Passord</label>
            <input
              id="login-password"
              v-model="password"
              class="input"
              type="password"
              placeholder="Passord"
              autocomplete="current-password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary btn-full">Logg inn</button>
          <p v-if="errorMsg" class="error-message">{{ errorMsg }}</p>
        </form>
      </section>
    </main>
  </div>
</template>
