<template>
  <v-app>
    <v-main>
      <router-view/>
      <notificationVue />
    </v-main>
  </v-app>
</template>

<script>
import notificationVue from './components/global/notification.vue';
export default {
  name: 'App',
  components:{
    notificationVue
  },

  data: () => ({
    //
  }),
};
</script>
