<template>
  <div>
    <v-app id="inspire">
      <v-toolbar max-height="100" flat color="#2196F3"></v-toolbar>
      <v-card elevation="6" max-width="450" min-height="400" class="mx-auto mt-12">
        <div class="titleLogin mb-6">
          <v-card-title class="mb-4">
            <h2>Agenda Pessoal</h2>
          </v-card-title>
        </div>

        <v-card-text class="pt-5">
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="username" label="Usuário" required outlined hide-details
                  prepend-inner-icon="mdi-account" />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="password" label="Senha" required outlined hide-details
                  prepend-inner-icon="mdi-lock" />
              </v-col>
              <v-col cols="12" class="mt-6">
                <v-btn color="primary" large block @click="submit()"> Entrar </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() { },
  methods: {
    ...mapActions("auth", ["ActionDoLogin"]),
    submit() {

      const data = {
        username: this.username,
        password: this.password,
      };

      this.ActionDoLogin(data)
      .then((res) => {
        this.$router.push({ name: 'home' })
      }).catch((err) => {
        this.$root.$emit("Notification::show", {
          type: "warning",
          message: "Usuário ou senha inválido(s)",
        });
      })





    },
  },
};
</script>
