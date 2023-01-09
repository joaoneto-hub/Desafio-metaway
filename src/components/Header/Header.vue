<template>
  <div>
    <v-toolbar flat class="primary">
      <v-btn text :to="'/'">
        Home
      </v-btn>
      <v-btn text :to="'/MyUser'">
        Meu Cadastro
      </v-btn>

      <v-btn text :to="'/Users'">
        Usuário
      </v-btn>
      <v-btn text :to="'/Peoples'">
        Pessoas
      </v-btn>
      <v-btn text :to="'/Contacts'">
        Contatos
      </v-btn>
    </v-toolbar>
  </div>
</template>