<template>
  <div>
    <v-card class="text-center ma-3">
      <v-responsive class="pt-4">
        <v-img aspect-ratio="2" src="images/rqst.jpg" />
      </v-responsive>

      <v-dialog v-model="dialog3" persistent max-width="650px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed color="white" block v-bind="attrs" v-on="on">
            <v-icon small left>mdi-send</v-icon>
            <span>Account Request</span>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Request Account</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="User Name*" :rules="nameRules" required v-model="userName"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Staff ID*" :rules="staffIdRules" required v-model="staffID"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    :rules="emailRules"
                    required
                    type="email"
                    v-model="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    :rules="staffID1"
                    v-model="file1"
                    label="Staff ID front side"
                    filled
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    :rules="staffID1"
                    v-model="file2"
                    label="Staff ID back side"
                    filled
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>

          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog3 = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="sendRequest">Send Request</v-btn>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      staffID: "",
      email: "",
      file1: [],
      file2: [],
      dialog: false,
      dialog3: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 50 || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      staffID1: [(v) => !!v || "ID photo is required"],
      staffIdRules: [(v) => !!v || "staff Id is required"],
    };
  },

  methods: {
    async sendRequest() {
      var metadata = {
        contentType: "image/*",
      };

      console.log("run");
      try {
        var storageRef1 = firebase.storage().ref();
        await storageRef1
          .child(`${this.staffID} /front.png`)
          .put(this.file1, metadata);

        var storageRef2 = firebase.storage().ref();
        await storageRef2
          .child(`${this.staffID} / back.png`)
          .put(this.file2, metadata);

        const frontURL = await storageRef1
          .child(`${this.staffID} /front.png`)
          .getDownloadURL();

        const backURL = await storageRef2
          .child(`${this.staffID} / back.png`)
          .getDownloadURL();

        console.log(frontURL);
        console.log(backURL);

        let requestUser = {
          userName: this.userName,
          userRole: "HO",
          email: this.email,
          staffID: this.staffID,
          front: frontURL,
          back: backURL,
        };

        await axios.post(
          "https://mysterious-oasis-62350.herokuapp.com/accRqst",
          requestUser
        );
        console.log(requestUser);
        this.dialog3 = false;
      } catch (e) {
        console.log(e);
        this.dialog3 = false;
      }
    },
  },
};
</script>

<style>
</style>