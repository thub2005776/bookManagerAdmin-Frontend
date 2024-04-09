<script setup>
import { RouterView } from 'vue-router'
import { Header } from './components';

</script>

<template>
    <Header></Header>
    <div class="mx-5 mb-6">
        <RouterView />
    </div>
</template>