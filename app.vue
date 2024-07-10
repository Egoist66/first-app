<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const appcConfig = useAppConfig();

function getItem(item: string) {
  if (import.meta.client) {
    return localStorage.getItem(item);
  } else {
    return undefined;
  }
}
</script>

<template>
  <NuxtLoadingIndicator color="#34E49C" :height="5" :duration="2000" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
