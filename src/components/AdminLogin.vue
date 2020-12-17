<template>
  <div>
    <v-card class="text-center ma-3">
      <v-responsive class="pt-4">
        <v-img aspect-ratio="2" src="images/admin.jpg" />
      </v-responsive>

      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed color="white" block v-bind="attrs" v-on="on">
            <v-icon small left>mdi-developer-board</v-icon>
            <span>System Admin</span>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Credentials</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="AdminID*"
                    :rules="requiredRules"
                    v-model="form.adminID"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    :rules="requiredRules"
                    type="password"
                    v-model="form.password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="signIn">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        adminID: "",
        password: "",
      },
      dialog: false,
      requiredRules: [(v) => !!v || "This field must be required"],
    };
  },
  methods: {
    signIn() {
      let user = {
        staffID: this.form.adminID,
        password: this.form.password,
      };
      axios
        .post("https://mysterious-oasis-62350.herokuapp.com/auth/login", user)
        .then((res) => {
          console.log(res);

          //if success
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/admin");
            this.dialog = false;
          }
        }),
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
          this.dialog = false;
        };
    },
  },
};
</script>

<style>
</style>