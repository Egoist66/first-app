<script setup lang="ts">
import {useRoute} from "nuxt/app";
import type { Product } from "./index.vue";

const route = useRoute()
const router = useRouter()
const id = useState("id", () => route.params.id)


const {data: product, status, refresh} = await useFetch<Product>(`https://fakestoreapi.com/products/${id.value}`, {
   
   lazy: false,
   key: `product-${id.value}`,
   retry: 3
//    query: {
//        id
//    }
})

if(!product.value){
    throw createError({
        statusCode: 404, 
        statusMessage: 'Product not found',
        fatal: true,
        
    })
}



watch(id, (newid) => {
    if(newid) {
        router.replace({
            path: `/products/${newid}`,
            query: {...route.query}
        });
    }
} );



useHead({
    title: `Product - ${product.value?.title ?? ''}`,
    meta: [
        {name: 'description', content: product.value?.description ?? ''},
    ]
   

})


</script>

<template>

    <div>
       
        <div v-if="status === 'pending'" class="flex justify-center items-center h-screen">
            <div class="loader ease-linear indeterminate:!dark:text-white rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
        <div class="flex flex-col items-center p-5">
            <img class="w-48 h-48 object-cover mb-2" :src="product?.image" />
            <h2 class="text-lg font-medium mb-2">{{ product?.title }}</h2>
            <p class="text-gray-500 mb-2">Category: {{ product?.category }}</p>
            <p class="text-gray-900 font-medium text-xl mb-2">{{ product?.price }}$</p>
            <p class="text-gray-900 font-medium text-lg mb-6">{{ product?.description }}</p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add to cart
            </button>
            <input class="block my-5"  autofocus type="number" placeholder="Enter id" v-model="id">
         
            <button @click="$router.back()" class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">Back</button>

        </div>
    </div>

</template>


<style scoped>

p {
    color: white;
}


.router-link-active {
    display: none;
}

</style>


