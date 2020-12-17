<template>
  <div>
    <Navbar />
    <!--house officer staff-->
    <v-container class="my-5">
      <h1 class="subheading">HO Staff</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="member of hoStaff" :key="member">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="80">
                <img :src="member.avatar" alt srcset />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-subtitle>{{member.name}}</v-card-subtitle>
              <div class="grey--text">{{member.staffID}}</div>
            </v-card-text>
            <v-card-action>
              <v-btn depressed color="white" block="true">
                <v-icon small left>mdi-android-messages</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!--Nurse staff-->
    <v-container class="my-5">
      <h1 class="subheading">Nurse Staff</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="member of nurseStaff" :key="member">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="80">
                <img :src="member.avatar" alt srcset />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-subtitle>{{member.name}}</v-card-subtitle>
              <div class="grey--text">{{member.staffID}}</div>
            </v-card-text>
            <v-card-action>
              <v-btn depressed color="white" block="true">
                <v-icon small left>mdi-android-messages</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar
  },

  data() {
    return {
      hoStaff: [
        {
          name: "house officer1",
          staffID: "16APC0001",
          avatar: "images/profile_HO.jpg"
        },
        {
          name: "house officer2",
          staffID: "16APC0002",
          avatar: "images/profile_HO.jpg"
        },
        {
          name: "house officer3",
          staffID: "16APC0003",
          avatar: "images/profile_HO.jpg"
        },
        {
          name: "house officer4",
          staffID: "16APC0004",
          avatar: "images/profile_HO.jpg"
        },
        {
          name: "house officer5",
          staffID: "16APC0005",
          avatar: "images/profile_HO.jpg"
        }
      ],
      nurseStaff: [
        {
          name: "house officer1",
          staffID: "16APC0001",
          avatar: "images/avatar.png"
        },
        {
          name: "house officer2",
          staffID: "16APC0002",
          avatar: "images/avatar.png"
        },
        {
          name: "house officer3",
          staffID: "16APC0003",
          avatar: "images/avatar.png"
        },
        {
          name: "house officer4",
          staffID: "16APC0004",
          avatar: "images/avatar.png"
        },
        {
          name: "house officer5",
          staffID: "16APC0005",
          avatar: "images/avatar.png"
        }
      ]
    };
  }
};
</script>

<style>
</style>