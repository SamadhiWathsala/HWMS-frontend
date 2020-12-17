<template>
  <div>
    <v-container class="my-5">
      <h2>All Users</h2>
      <h3 class="subheading">Admin Panel</h3>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(member,idx) of AdminList" :key="idx">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="80">
                <img src="images/profile_HO.jpg" alt srcset />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-subtitle>{{member.userName}}</v-card-subtitle>
              <div class="grey--text">{{member.stafID}}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="my-5">
      <h3 class="subheading">HO Staff</h3>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(member,idx) of HOList" :key="idx">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="80">
                <!-- <img src="images/profile_HO.jpg" alt srcset /> -->
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-subtitle>{{member.userName}}</v-card-subtitle>
              <div class="grey--text">{{member.stafID}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" text>Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="my-5">
      <h3 class="subheading">Nursing Staff</h3>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(member,idx) of NurseList" :key="idx">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="80">
                <img src="images/profile_HO.jpg" alt srcset />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-card-subtitle>{{member.userName}}</v-card-subtitle>
              <div class="grey--text">{{member.stafID}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" text>Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["HOList", "NurseList", "AdminList"]),
  created() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(["fetchUsers"]),

    // uderRemove(id) {
    //   console.log(id);
    //   this.deleteUser(id);
    // },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>