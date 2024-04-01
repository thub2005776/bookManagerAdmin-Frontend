<script setup>
import { RouterView } from 'vue-router'
import { Header } from './components';
import axios from 'axios';
import { ref } from 'vue';

const auth = ref({})
const email = ref('');
    
    axios.defaults.withCredentials = true;
    axios.get(import.meta.env.VITE_SERVER_URL + "log/ad/token")
        .then(res => {
            if (res.data.Status === "Success") {
                email.value = res.data.email;
            }
        })
        .catch(err => console.log(err))

    axios.get(import.meta.env.VITE_SERVER_URL + `users/${email.value}`)
        .then(res => {
            if (res.status === 200) {
                auth.value = res.data;
            } else { console.log(res.status); }
        })
        .catch(err => console.log(err))
</script>

<template>

    <Header :auth="auth"></Header>
    <div class="mx-5 mb-6">
        <RouterView />
    </div>
</template>