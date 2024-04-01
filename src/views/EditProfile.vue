<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import Delete from '@/components/delete.vue';

const route = useRoute();
const id = ref('');
const data = ref({});
const showDeleted = ref(false);
const password = ref('');
const comfirmPassword = ref('');
const user = ref({
    name: '',
    email: '',
    img: '',
    permission: '',
    favorite: ''
});
id.value = route.params.id;

onMounted(() => {
    axios.get(import.meta.env.VITE_SERVER_URL + `users/${id.value}`)
        .then(res => {
            data.value = res.data;
            user.value = data.value;
        })
        .catch(err => console.log(err));
});

let file = null;
let uploaded = '';
const handleChange = (e) => {
    file = e.target.files[0];
    uploaded = URL.createObjectURL(file);
}

const showDeletePopUp = (e) => {
    showDeleted.value = e;
}

const handleClosed = (e) => {
    showDeleted.value = !e;
}

const handleDeleted = () => {
    console.log(user.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.value);
}
</script>

<template>
    <div class="mt-20">
        <h1 class="text-green-700 dark:text-white font-bold text-center text-2xl mb-6">
            Cập nhật hồ sơ
        </h1>
        <div class="absolute top-32 left-[30%] z-50">
            <Delete v-if="showDeleted" @sendClosed="handleClosed" @sendDeleted="handleDeleted" />
        </div>
        <div class="md:flex justify-center gap-5">
            <div class="relative lg:mt-10 mb-6">
                <img v-if="uploaded" class="mx-auto mb-5 lg:w-72 w-64 rounded-lg" :src="uploaded" alt="book">
                <img v-if="!uploaded" class="mx-auto mb-5 lg:w-72 w-64 rounded-lg"
                    :src="`http://localhost:3000/${user.img}`" alt="book">
                <button @click="showDeletePopUp(true)"
                    class="relative float-right inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Xóa tài khoản
                    </span>
                </button>

            </div>
            <form @submit="handleSubmit" class="lg:w-1/3 w-full p-4  rounded-md dark:bg-gray-900">
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Tài khoản
                    </label>
                    <input type="name" id="name" v-model="user.name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input type="email" id="email" v-model="user.email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@gmail.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Mật khẩu
                    </label>
                    <input type="password" id="password" v-model="password"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required />
                </div>
                <div class="mb-5">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Nhập lại mật khẩu
                    </label>
                    <input type="password" id="repeat-password" v-model="comfirmPassword"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required />
                </div>

                <button type="submit"
                    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Cập nhật
                </button>
            </form>
        </div>
    </div>
</template>
