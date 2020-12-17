<template>
  <v-container>
    <h2>Add new user</h2>
    <form>
      <v-text-field v-model="name" :error-messages="nameErrors" label="User Name" required></v-text-field>
      <v-text-field v-model="staffID" label="Staff ID" required></v-text-field>
      <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required></v-text-field>
      <v-text-field v-model="role" label="User Role" required></v-text-field>
      <!-- <v-select
        v-model="role"
        :items="items"
        :error-messages="selectErrors"
        label="User Role"
        required
      ></v-select>-->
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Are you sure?"
        required
      ></v-checkbox>

      <v-btn class="mr-4" @click="addUser">Add User</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(100) },
    email: { required, email },
    staffID: { required },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    staffID: "",
    role: "",
    // select: null,
    // items: ["HO", "Nurse", "Admin"],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("User Role is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 100 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    ...mapActions(["addNewUser"]),

    addUser() {
      let user = {
        userName: this.name,
        staffID: this.staffID,
        email: this.email,
        password: this.staffID,
        role: this.role,
      };

      this.addNewUser(user);
      this.clear();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.staffID = "";
      this.role = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>

<style>
</style>