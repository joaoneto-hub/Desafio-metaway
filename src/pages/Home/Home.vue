<template>
  <div>
    <Header/>
    <h1>Home</h1>
    <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>

import {api} from '../../services/api';
import Header from '../../components/Header/Header.vue';
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  components:{
    Header
  },
  data(){
    return{}
  },
  async created() {
    const response = await api.get('/favorito/pesquisar', {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
      
    })
    console.log(response.data)

    this.mostar()
  },
  methods:{
    ...mapActions("auth", ["ActionSetUser"]),
   async mostar(){
     await console.log(this.ActionSetUser())
    }
  }
};
</script>
