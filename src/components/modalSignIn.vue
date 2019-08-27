<template>
  <b-modal :id="id">
    <h1 class="modalHead">Войти</h1>
    <div class="logInMdDiv">
      <v-text-field class="email" label="Email*" :rules="emailRules"></v-text-field>
      <v-text-field
        class="password"
        v-model="password"
        label="Пароль*"
        :append-icon="show1 ? 'visibility' : 'visibility_off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        hint="At least 8 characters"
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-checkbox class="logInmdCheckRem" v-model="checkbox" label="Запомнить" required></v-checkbox>
      <p>
        У вас еще нет аккуанта
        <a
          @click="$bvModal.hide('my-modal'), $bvModal.show('registr-modal')"
          class="createAcc"
        >Создать аккуант</a>
      </p>
      <ul class="linksMd">
        <li>
          <a href="#">Забыли пароль</a>
        </li>
        <li>
          <a href="#">Не получили инструкций по активации</a>
        </li>
        <li>
          <a href="#">Не получили инструкций по разблокировки</a>
        </li>
      </ul>
      <v-card-actions>
        <v-btn text @click="$bvModal.hide('my-modal')" class="logInMdBtn">Отправить</v-btn>
      </v-card-actions>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["id"],
  data: () => ({
    show1: false,
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    checkbox: false
  })
};
</script>>