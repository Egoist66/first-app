<script lang="ts" setup>

    

</script>


<template>
     
    <div @click="$emit('onClick', $event)" @contextmenu.prevent="console.log('clicked')" class="alert alert-primary" role="alert">
        <slot></slot>
    </div>
</template>