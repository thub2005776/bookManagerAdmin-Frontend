<script setup>
import { ref } from 'vue';
import { ItemCard, SearchInput } from '../components'

const props = defineProps({
    title: String,
    data: Array
})

const searchInput = ref(false);
const showSearchInput = (e) => {
    searchInput.value = e;
}


</script>

<template>
    <div v-if="props.data.length > 0" class=" relative p-2 rounded-lg dark:bg-gray-900 dark:border dark:border-gray-600">
        <h1 class=" text-green-500 text-center font-bold text-2xl dark:text-white mb-5">
            {{ props.title }}
        </h1>
        <div class="flex">
          <router-link to="/book/add">
            <button type="button"
                class="flex gap-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                        clip-rule="evenodd" />
                </svg>
                Thêm
            </button>
        </router-link>  
        <div v-if="!searchInput" @click="showSearchInput(true)" 
            class="w-full">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Tìm kiếm
        </label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="default-search" v-model="search"
                class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tìm kiếm..." />
            <button type="submit"
                class="text-white absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Tìm kiếm
            </button>
        </div>
        </div>
        <SearchInput v-if="searchInput" :data="props.data" @send-closed="showSearchInput(false)"/>
        </div>
        
        <ul class="divide-y divide-gray-200 border dark:divide-gray-700 bg-gray-100 rounded-md dark:border-gray-600">
           <ItemCard v-for="item in props.data" :key="item._id" :item="item" />
        </ul>
    </div>
</template>