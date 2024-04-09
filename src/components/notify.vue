<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { NotifyItem } from '../components';

const brrbooks = ref([]);

axios.get(import.meta.env.VITE_SERVER_URL + 'api/borrowedBooks')
    .then(res => {
        brrbooks.value = res.data;
    })
    .catch(err => console.log(err))


</script>

<template>
    <div>
        <h1 class="text-green-500 text-center font-bold text-2xl dark:text-white mb-5">
            Thông báo
        </h1>
        {{ books }}
        <p v-if="brrbooks.length == 0" class="text-center text-gray-500 font-semibold">
            Không có thông báo
        </p>
        <div v-if="brrbooks.length > 0">
            <ul
                class="p-4 divide-y divide-gray-200 border dark:divide-gray-700 bg-gray-100 dark:bg-gray-900 rounded-md dark:border-gray-600">
                <NotifyItem v-for="book in brrbooks" :key="book.bid" :book="book" />
            </ul>
        </div>
    </div>
</template>