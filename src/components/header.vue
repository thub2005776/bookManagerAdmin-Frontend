<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
  auth: Object
})


</script>

<template>
  <div class="z-[100] fixed top-0 w-full bg-white dark:bg-gray-900 border-gray-200 shadow shadow-">
    <nav class="mx-5">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/admin">
          <h3 class="self-center text-2xl font-extrabold whitespace-nowrap text-blue-500">Books - Admin</h3>
        </RouterLink>
        <img v-if="!props"
          class="w-10 h-10 me-10 rounded-full"
        :src="`http://localhost:3000/${props.auth[0].img}`" alt="avatar">
      </div>
    </nav>
  </div>
</template>