<script setup lang="ts">
const mapRoutes = [
    {id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'Contacts', path: '/contacts'},
    {id: 4, name: 'Products', path: '/products'},
]
</script>


<template>
    <div>
        <header class="sticky top-0 shadow-md bg-blue-600">
            <div class="container">
                <nav class="flex gap-4">
                    <NuxtLink v-for="route in mapRoutes"
                              :key="route.id"
                              active-class="active"
                              :to="route.path">{{route.name}}
                    </NuxtLink>
                </nav>
            </div>
        </header>


        <main class="py-5">
            <div class="container">
                <slot/>
            </div>
        </main>


        <footer></footer>
    </div>
</template>
  