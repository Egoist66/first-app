<script lang="ts" setup>

    

</script>


<template>
     
    <div @click="(e) => $emit('onClick', e)" @contextmenu.prevent="console.log('clicked')" class="alert alert-primary" role="alert">
        <slot></slot>
    </div>
</template>