<template>
  <b-modal :id="id">
    <h1 class="modalHead">Регистрация</h1>
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
      <v-text-field
        class="password"
        v-model="repeatPassword"
        label="Повторите пароль*"
        :rules="[rules2.required, rules2.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        hint="At least 8 characters"
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-text-field v-model="name" :rules="nameRules" label="Имя*" class="name" required></v-text-field>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
        class="menuDate"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            class="menuBirth"
            v-model="date"
            label="Дата Рождения"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          ref="picker"
          v-model="date"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
          @change="save"
        ></v-date-picker>
      </v-menu>
      <b-form-checkbox
        class="logInmdCheck"
        v-model="checkbox1"
        value="accepted"
        unchecked-value="not_accepted"
      >
        Я согласен на обработку персональных данных
        <a target="_blank" href="#">(читать)</a>
      </b-form-checkbox>

      <b-form-checkbox class="logInmdCheck" v-model="checkbox2" value="accepted">
        Я согласен с пользовательским соглашением
        <a target="_blank" href="#">(читать)</a>
      </b-form-checkbox>

      <v-card-actions>
        <v-btn @click="$bvModal.hide('registr-modal')" class="logInMdBtn">Отправить</v-btn>
      </v-card-actions>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["id"],
  data: () => ({
    date: null,
    menu: false,
    show1: false,
    password: "",
    repeatPassword: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    rules2: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    checkbox1: false,
    checkbox2: false
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</script>>