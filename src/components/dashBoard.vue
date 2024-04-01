<script setup>
import { SideBar, Card, Notify, Statitics } from '../components'
import { ref } from 'vue';
const users = ref([]);

axios.get(import.meta.env.VITE_SERVER_URL + `users`)
   .then(res =>
      users.value = res.data
   )
   .catch(err => console.log(err))

const books = ref([]);
axios.get(import.meta.env.VITE_SERVER_URL + `books`)
   .then(res =>
      books.value = res.data
   )
   .catch(err => console.log(err))

</script>

<template>
   <SideBar @event-name="handleDataFromChild"></SideBar>
   <div class="p-4 sm:ml-44 ml-14">
      <Card v-if="dataFromChild == '2'" :title="'Quản lý Sách'" :data="books"></Card>
      <Card v-if="dataFromChild == '3'" :title="'Quản lý người dùng'" :data="users"></Card>
      <Notify v-if="dataFromChild == '4'"></Notify>
      <Statitics v-if="dataFromChild == '5'"></Statitics>
   </div>
</template>

<script>
import axios from 'axios';
export default {

   data() {
      return {
         dataFromChild: '',
      };
   },
   methods: {
      handleDataFromChild(data) {
         this.dataFromChild = data;
      },

   }
}
</script>