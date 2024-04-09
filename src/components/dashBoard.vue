<script setup>
import { SideBar, Card, Notify } from '../components'
import { ref } from 'vue';

const props = defineProps({
   auth: Object,
});

const users = ref([]);
axios.get(import.meta.env.VITE_SERVER_URL + `api/users`)
   .then(res =>
      users.value = res.data
   )
   .catch(err => console.log(err))

const books = ref([]);
axios.get(import.meta.env.VITE_SERVER_URL + `api/books`)
   .then(res =>
      books.value = res.data
   )
   .catch(err => console.log(err))

</script>

<template>
   <div v-if="props.auth.email">
      <SideBar @event-name="handleDataFromChild"></SideBar>
      <div class="p-4 sm:ml-44 ml-14">
         <Card v-if="dataFromChild == '2'" :title="'Quản lý Sách'" :data="books"></Card>
         <Card v-if="dataFromChild == '3'" :title="'Quản lý người dùng'" :data="users"></Card>
         <Notify v-if="dataFromChild == '4'"></Notify>
      </div>
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