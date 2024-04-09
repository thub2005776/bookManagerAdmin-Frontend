<script setup>
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const auth = ref({});
axios.defaults.withCredentials = true;
axios.get("http://localhost:3000/api/log/ad/token")
  .then(res => {
    if (res.data.Status === "Success") {
      email.value = res.data.email;
      axios.get(`http://localhost:3000/api/users/email/${email.value}`)
        .then(res => {
          if (res.status === 200) {
            auth.value = res.data;
          } else { console.log(res.status); }
        })
        .catch(err => console.log(err))
    }
  })
  .catch(err => console.log(err))

</script>

<template>
  <div class="z-[100] fixed top-0 w-full bg-white dark:bg-gray-900 border-gray-200 shadow shadow-">
    <nav class="mx-5">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/admin">
          <h3 class="self-center text-2xl font-extrabold whitespace-nowrap text-blue-500">Books - Admin</h3>
        </RouterLink>
        <img v-if="auth && auth.email"
          class="w-10 h-10 me-10 rounded-full"
        :src="`http://localhost:3000/${auth.img}`" alt="avatar">
      </div>
    </nav>
  </div>
</template>