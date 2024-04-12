<script setup>
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const address = ref('');

const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
        'name': name.value,
        'address': address.value,
    }


    axios.post(import.meta.env.VITE_SERVER_URL + 'api/publishers', values)
        .then(res => {
                alert("Thêm thành công!");
                document.location.reload();
        })
        .catch(err => console.log(err))
}

</script>

<template>
    <div class="mt-20">
        <h1 class="text-green-500 text-center font-bold text-2xl dark:text-white">
            Thêm thông tin nhà xuất bản
        </h1>
        <form @submit="handleSubmit"
            class=" p-4 dark:border bg-gray-100 dark:bg-gray-900  dark:border-gray-600 rounded-md">
                    <div class="mb-5">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tên nhà xuất bản
                        </label>
                        <input type="text" id="name" v-model="name"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required />
                    </div>
                    
                    <div class="mb-5">
                        <label for="adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Địa chỉ
                        </label>
                        <textarea id="adress" v-model="address"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required></textarea>
                    </div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Thêm
                    </button>
        </form>
    </div>
</template>