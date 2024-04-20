<script setup>
import axios from 'axios';

const props = defineProps({
    book: Object,
});

const returnDate = new Date(props.book.borrowDate);
returnDate.setDate(returnDate.getDate() + 14);
const today = new Date();
const month = returnDate.getMonth() - today.getMonth();
const late = returnDate.getDate() - today.getDate();

const handleChecked = (data) => {
    axios.post(import.meta.env.VITE_SERVER_URL + `api/borrowedBooks/${props.book._id}`, {state: data})
        .then(res => {
            axios.post(import.meta.env.VITE_SERVER_URL + `api/books/stored/${props.book.bid}`, {quantity: props.book.quantity})
                .then(() => {window.location.reload()})
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

</script>

<template>
    <li v-if="book.state != 'Đã trả' && book.state != 'Đã hủy'" 
        class="flex justify-between p-4 hover:bg-blue-100 hover:cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700">
        <router-link :to="`/profile/${book.uid}`">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <div class="flex-shrink-0">
                    <img class="w-8 rounded-lg" :src="`http://localhost:3000/${book.img}`" alt="book">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {{ book.title }}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {{ new Date(book.borrowDate).toLocaleDateString() }}
                    </p>
                </div>
                <div >
                    <span  class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {{ book.state }}
                    </span>
                    <span v-if="late > 0 || month > 0" class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                        Thời hạn:{{  new Date(returnDate).toLocaleDateString()  }}
                    </span>
                    <span v-if="late <= 0 && month <= 0" class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                        Trễ hạn
                    </span>
                </div>
            </div>
        </router-link>
        <button v-if="book.state == 'Đang chờ duyệt' && book.returnDate" @click="handleChecked('Đã trả')"
            type="button" 
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >Xác nhận đã trả
        </button>
        <button v-if="book.state == 'Yêu cầu hủy'" @click="handleChecked('Đã hủy')"
            type="button" 
            class="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >Xác nhận hủy
        </button>
    </li>
</template>