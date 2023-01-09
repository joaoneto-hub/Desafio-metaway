<template>
  <div v-if="show" class="alert">
    <v-alert
      max-width="500"
      :type="type"
      dismissible
      close-text="Close Alert"
      >{{ message }}</v-alert
    >
  </div>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      show: false,
      type: "success",
      message: "",
    };
  },
  created() {
    this.$root.$on("Notification::show", (payload) => {
      this.show = true;
      this.type = payload.type;
      this.message = payload.message;

      setTimeout(() => {
        this.close();
      }, payload.timeout || 4000);
    });
  },
  methods: {
    close() {
      (this.message = ""), (this.type = "error"), (this.show = false);
    },
  },
};
</script>

<style>
.alert {
  top: 80%;
  bottom: 0;
  right: 0;
  left: 80%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>