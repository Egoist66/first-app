<script lang="ts" setup>

    

</script>


<template>
     
    <div @click="$emit('onClick')" class="alert alert-primary" role="alert">
        <slot></slot>
    </div>
</template>