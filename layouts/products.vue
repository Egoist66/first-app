<script setup lang="ts">
const mapRoutes = [
    {id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'Contacts', path: '/contacts'},
    {id: 4, name: 'Products', path: '/products'},
]
</script>
<template>

    <div>

        <header class="sticky top-0 shadow-md bg-blue-950">
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
        Prouducts Layout
    </div>
</template>


<style scoped>

</style>