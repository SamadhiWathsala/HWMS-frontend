<template>
  <div>
    <DefaultNavbar />
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="(task,idx) of tasks" :key="idx">
          <v-card class="text-center ma-3" router :to="task.route">
            <v-responsive class="pt-4">
              <v-img aspect-ratio="2" :src="task.avatar" />
            </v-responsive>
            <v-card-title>{{task.name}}</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DefaultNavbar from "../components/DefaultNavbar";

export default {
  components: {
    DefaultNavbar,
  },
  data() {
    return {
      tasks: [
        {
          name: "USER MANAGE",
          avatar: "images/accounts.jpg",
          route: "/userManage",
        },
        {
          name: "EMERGENCY TROLLEY",
          avatar: "images/trolley.jpg",
          route: "/trolley",
        },
        {
          name: "DUTY ROSTER",
          avatar: "images/roster_1.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>