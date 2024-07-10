<script lang="ts" setup>
onBeforeMount(() => {
  console.log("Contacts page before mounted");
});

onMounted(() => {
  console.log("Contacts page mounted");
});

onBeforeUnmount(() => {
  console.log("Contacts page before unmounted");
});

onUnmounted(() => {
  console.log("Contacts page unmounted");
});

const route = useRoute();

onUpdated(() => {
  console.log("Contacts page updated", route.query);

  // route.query.a = input.value;
  // const url = `${route.fullPath}?${new URLSearchParams(`a=${route.query.a}`).toString()}`;
  // window.history.replaceState(null, '', url);
});

const input = ref<string>("");
</script>

<template>
  <div>
    <Head>
      <Title>Contacts {{ input }}</Title>
    </Head>

    <h1>Contacts</h1>

    <div class="mb-4 relative">
      <input
        class="block my-5 w-full px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter your name"
        v-model="input"
        type="text"
      />
      <div class="absolute inset-y-0 end-0 pr-3 flex items-center pointer-events-none">
        <svg
          class="h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          ></path>
        </svg>
      </div>
    </div>

    <Alert @onClick="console.log('clicked', $event)">This is an alert</Alert>
  </div>
</template>
