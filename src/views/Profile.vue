<script setup>
import { BookCard } from '@/components';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref('');
const data = ref();
id.value = route.params.id;
const user = ref({
    name: '',
    email: '',
    password: '',
    img: '',
    permission: '',
    favorite: ''
});



var borrowedBooks = ref([]);
const favorites = ref([]);
onMounted(() => {
    axios.get(import.meta.env.VITE_SERVER_URL + `api/users/${id.value}`)
        .then(res => user.value = res.data)
        .catch(err => console.log(err));

    axios.get(import.meta.env.VITE_SERVER_URL + `api/borrowedBooks/uid/${id.value}`)
        .then(res => borrowedBooks.value = res.data)
        .catch(err => console.log(err));

    axios.get(import.meta.env.VITE_SERVER_URL + `api/favorites/uid/${id.value}`)
        .then(res => favorites.value = res.data)
        .catch(err => console.log(err));
});

</script>

<template>
    <div class="mt-5 text-green-700 dark:text-white">
        <h1 class="font-bold text-2xl text-center mb-6">Thông tin tài khoản</h1>
        <div class="lg:flex lg:gap-6 p-2 dark:bg-gray-800 ">
            <div class="lg:w-[35%] text-center">
                <img class="mx-auto w-32 h-32 md:w-52 md:h-52 rounded-full p-1 border border-blue-300 dark:border-gray-600"
                    :src="`http://localhost:3000/${user.img}`" alt="avatar">
                <p class="mb-2">{{ user.name }}</p>
                <p class="mb-3 dark:text-gray-400">{{ user.email }}</p>
                <router-link :to="`/editprofile/${user._id}`">
                    <button type="button"
                        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Cập nhật hồ sơ
                    </button>
                </router-link>
            </div>

            <div class="mb-6">
                <h1 class="font-bold text-lg mb-6">Sách đang mượn</h1>
                <p v-if="borrowedBooks.length == 0" class="text-center text-gray-500">
                    Chưa có sách đang mượn
                </p>
                <ol v-if="borrowedBooks.length > 0" class="flex flex-wrap gap-5">
                    <BookCard v-for="book in borrowedBooks" :key="book._id" :book="book" />
                </ol>
            </div>
        </div>
        <div>
            <h1 class="font-bold text-lg my-2">Danh sách yêu thích</h1>
            <p v-if="favorites.length == 0" class="text-center text-gray-500">
                Chưa có sách trong danh sách yêu thích
            </p>
            <div v-if="favorites.length > 0" class="flex flex-wrap gap-5">
                <BookCard v-for="book in favorites" :key="book._id" :book="book"/>
            </div>

        </div>
    </div>
</template>