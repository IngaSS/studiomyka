<template>
  <b-modal :id="id">
    <h1 class="modalHead">Оставть заявку</h1>
    <div class="logInMdDiv">
      <v-text-field v-model="name" :rules="nameRules" label="Имя*" class="name" required></v-text-field>
      <v-text-field v-model="serName" :rules="nameRules" label="Фамилия*" class="name" required></v-text-field>
      <v-text-field class="email" label="Телефон*"></v-text-field>
      <v-text-field class="email" label="Email*" :rules="emailRules"></v-text-field>
      <v-textarea
        outline
        class="mytextArea"
        name="input-7-1"
        label="Какое мероприятие Вы бы хотели провести?*"
      ></v-textarea>
      <v-card-actions>
        <v-btn text @click="$bvModal.hide('myRequest')" class="logInMdBtn">Забронировать</v-btn>
      </v-card-actions>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ['id'],
  data: () => ({
    serName: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
  }),
};
</script>>