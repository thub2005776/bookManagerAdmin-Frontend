<script setup>

</script>

<template>
    <div>
        <h1 class="text-green-500 text-center font-bold text-2xl dark:text-white mb-5">
            Thông báo
        </h1>
        <div>
            <ul
                class="p-4 divide-y divide-gray-200 border dark:divide-gray-700 bg-gray-100 dark:bg-gray-900 rounded-b-md dark:border-gray-600">
                <li
                    class="flex justify-between p-4 hover:bg-blue-100 hover:cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700">
                    <router-link to="/profile/123">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full"
                                    src="https://i.pinimg.com/564x/d8/3a/cc/d83acc7127277ed8bc768787e20681a3.jpg"
                                    alt="book">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@flowbite.com
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                    </router-link>
                    <div
                        class="flex bg-gray-100 border rounded-lg border-blue-100 dark:border-gray-600 dark:bg-gray-900">
                        <button class="p-1.5 rounded-s-lg hover:bg-gray-300 dark:hover:bg-gray-800">
                            <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                        </button>
                        <button class="p-1.5 border-s rounded-e-lg hover:bg-gray-300 dark:hover:bg-gray-800">
                            <svg class="w-6 h-6 text-red-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>