<script setup>

</script>

<template>
    <div class="mt-20">
        <h1 class="text-green-500 text-center font-bold text-2xl dark:text-white">Thêm thông tin sách</h1>
        <form class=" p-4 dark:border bg-gray-100 dark:bg-gray-900  dark:border-gray-600 rounded-md">
            <div class="sm:flex gap-5">
                <img class="mx-auto mb-5 lg:w-72 w-64 rounded-lg" src="https://i.pinimg.com/564x/5b/26/88/5b2688e8573b370c6990ac5721988793.jpg" alt="book">

                <div class="w-full md:w-1/2">
                    <div class="mb-5">
                        <label for="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Cập nhật ảnh bìa
                        </label>
                        <input type="file" id="file" accept="image/png, image/gif, image/jpeg"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required />
                    </div>
                    <div class="mb-5">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tên sách
                        </label>
                        <input type="text" id="title"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Mắc biếc" required />
                    </div>
                    <div class="mb-5">
                        <label for="athor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tác giả
                        </label>
                        <input type="text" id="athor"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Nguyễn Nhật Ánh" required />
                    </div>
                    <div class="mb-5">
                        <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Thể loại
                        </label>
                        <select class="text-center shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name="categories" id="categories">
                            <option value="0">Giáo trình</option>
                            <option value="1">Văn học Việt Nam</option>
                            <option value="2">Lịch sử Việt Nam</option>
                    </select>
                    </div>
                    <div class="mb-5">
                        <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Số lượng
                        </label>
                        <input type="number" id="quantity"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="10" required />
                    </div>
                    <div class="mb-5">
                        <label for="excerpt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Trích dẫn
                        </label>
                        <textarea  id="excerpt"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required ></textarea>
                    </div>
                    <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Cập nhật
            </button>
                </div>
            </div>
        </form>
    </div>
</template>