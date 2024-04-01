<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref('');
const data = ref({});
const title = ref('');
const category = ref('');
const author = ref('');
const img = ref('');
const excerpt = ref('');
const stored = ref(0);
id.value = route.params.id;

onMounted(() => {
    axios.get(import.meta.env.VITE_SERVER_URL + `books/${id.value}`)
        .then(res => {
            data.value = res.data;

            const values = data.value;
            title.value = values.title;
            category.value = values.category;
            author.value = values.author;
            img.value = values.img;
            excerpt.value = values.excerpt;
            stored.value = values.stored;
        })
        .catch(err => console.log(err));
});

const categories = ['Ngôn tình', 'Văn học Việt Nam', 'Lịch sử Việt Nam', 'Giáo trình'];

let file = null;
let uploaded = '';
const handleChange = (e) => {
    file = e.target.files[0];
    uploaded = URL.createObjectURL(file);
}
const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
        'title': title.value,
        'img': file ? file.name : img.value,
        'category': category.value,
        'author': author.value,
        'excerpt': excerpt.value,
        'borrowedTimes': 0,
        'stored': stored.value,
    }

    let fileStatus = 0;
    if (file) {
        const data = new FormData();
        data.append("file", file);

        axios.post(import.meta.env.VITE_SERVER_URL + 'file/upload', data)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    fileStatus = 200;
                }
            })
            .catch(err => console.log(err))
    }

    axios.post(import.meta.env.VITE_SERVER_URL + `books/${id.value}`, values)
        .then(res => {
            if (res.status === 200) {
                alert("Cập nhật thành công!");
                document.location.reload();
            }
        })
        .catch(err => console.log(err))
}
</script>

<template>
    <div class="mt-20">
        <h1 class="text-green-500 text-center font-bold text-2xl dark:text-white mb-5">Cập nhật thông tin sách</h1>
        <form @submit="handleSubmit"
            class=" p-4 dark:border bg-gray-100 dark:bg-gray-900  dark:border-gray-600 rounded-md">
            <div class="sm:flex gap-5">
                <div class="w-full md:w-1/2">
                    <div class="mb-5">
                        <label for="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Cập nhật ảnh bìa
                        </label>
                        <input type="file" id="file" accept="image/*" @change="handleChange"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    <div class="mb-5">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tên sách
                        </label>
                        <input type="text" id="title" v-model="title"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Mắc biếc" required />
                    </div>
                    <div class="mb-5">
                        <label for="athor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tác giả
                        </label>
                        <input type="text" id="athor" v-model="author"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    <div class="mb-5">
                        <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Thể loại
                        </label>
                        <select v-model="category"
                            class="text-center shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            name="categories" id="categories">
                            <option v-for="item in categories" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label for="stored" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Số lượng
                        </label>
                        <input type="number" id="stored" v-model="stored"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    <div class="mb-5">
                        <label for="excerpt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Trích dẫn
                        </label>
                        <textarea id="excerpt" v-model="excerpt"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></textarea>
                    </div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Cập nhật
                    </button>
                </div>
                <img v-if="uploaded" class="mx-auto mb-5 lg:w-72 w-64 rounded-lg" :src="uploaded" alt="book">
                <img v-if="!uploaded" class="mx-auto mb-5 lg:w-72 w-64 rounded-lg" :src="`http://localhost:3000/${img}`" alt="book">
            </div>
        </form>
    </div>
</template>
<script>

</script>