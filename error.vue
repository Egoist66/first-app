<script setup lang="ts">
import { computed } from "vue";

const props = defineProps(["error"]);
const statusCode = computed(() => {
  return props.error.statusCode ?? 404;
});

const title = computed(() => {
  switch (statusCode.value) {
    case 404:
      return "Page Not Found";
    case 500:
      return "Internal Server Error";
    default:
      return "Oops";
  }
});
</script>

<template>
  <div class="flex flex-col items-center min-h-screen p-6">
    <div class="flex flex-col text-center">
      <h1 class="text-6xl font-bold">{{ error.message }}</h1>
      <p class="text-gray-600 text-xl mt-5">{{ statusCode }} - {{ title }}</p>
      <p class="text-gray-600 text-xl mt-5">
        If you think something is broken, please let us know on our
        <a
          class="text-blue-600 hover:underline"
          href="https://github.com/vinissimus/nuxt-404-page/issues"
          >GitHub</a
        >.
      </p>
      <p class="text-gray-600 text-xl mt-5">{{ error.cause }}</p>
      <p class="text-gray-600 text-xl mt-5">The requested URL was {{ error.url }}</p>
      <button
        :class="'bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600'"
        @click="clearError({ redirect: '/' })"
        class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
      >
        Back to Home
      </button>
      <button
        :class="'bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600'"
        @click="$router.back()"
        class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
      >
        Back
      </button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #34e49c;
}

p {
  color: #495057;
}
</style>
