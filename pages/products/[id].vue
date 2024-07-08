<script setup lang="ts">
//@ts-ignore
import {useRoute} from "nuxt/app";
import type { Product } from "./index.vue";

const route = useRoute()

const product = await useFetch<Product>(`https://fakestoreapi.com/products/${route.params.id}`, {
   
   lazy: true,
   key: route?.params?.id.toString()
})


useHead({
    title: `Product - ${product.data.value?.title ?? ''}`

})

</script>

<template>

    <div>
        <div v-if="product.status.value === 'pending'" class="flex justify-center items-center h-screen">
            <div class="loader ease-linear indeterminate:!dark:text-white rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
        <div class="flex flex-col items-center p-5">
            <img class="w-48 h-48 object-cover mb-2" :src="product.data?.value?.image" />
            <h2 class="text-lg font-medium mb-2">{{ product.data?.value?.title }}</h2>
            <p class="text-gray-500 mb-2">Category: {{ product.data?.value?.category }}</p>
            <p class="text-gray-900 font-medium text-xl mb-2">{{ product.data?.value?.price }}$</p>
            <p class="text-gray-900 font-medium text-lg mb-6">{{ product.data?.value?.description }}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add to cart
            </button>
            <button @click="$router.back()" class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">Back</button>
        </div>
    </div>

</template>


<style scoped>

p {
    color: white;
}

</style>