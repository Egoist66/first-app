<script setup lang="ts">
export type Products = Product[];

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}

useHead({
    title: "Products",
});

// definePageMeta({
//     layout: 'products',
//     redirectTo: '/products/1'
// })

const { data: products, status, refresh } = await useFetch<Products>("https://fakestoreapi.com/products", {
    responseType: "json",
    server: true,
    cache: 'default',
    key: "products",
    lazy: true,
});

console.log(products);
</script>

<template>
    <div>
        <h1>Products</h1>
        <button @click="refresh()" class="bg-blue-500 mb-4 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
            {{ status === "pending" ? "Refreshing..." : "Refresh" }}
        </button>

        <div v-if="status === 'pending'" class="flex justify-center items-center h-screen">
            <div
                class="loader ease-linear indeterminate:!dark:text-white rounded-full border-8 border-t-8 border-gray-200 h-32 w-32">
            </div>
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="product in products" :key="product.id" class="bg-white shadow-md rounded-md p-5">
                <a target="_blank" :href="product.image">
                    <img :src="product.image" class="w-full h-40 object-cover mb-2" />
                </a>
                <h2 class="text-lg text-gray-900 font-medium">{{ product.title }}</h2>
                <p class="text-gray-500 mt-2">Category: {{ product.category }}</p>
                <p class="text-gray-900 font-medium text-lg mt-2">{{ product.price }}$</p>
                <p class="text-gray-500 mt-2">Rating: {{ product.rating.rate }}</p>


                <div class="flex gap-2 items-center">

                    <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
                        Add to cart
                    </button>
                    <NuxtLink class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
                        :to="`/products/${product.id}`">View Details</NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped></style>
