<template>
  <div>
    <Navbar />
    <!--Dashboard View-->
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
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar,
  },

  data() {
    return {
      tasks: [
        {
          name: "Admissions",
          avatar: "images/admission.jpg",
          route: "/admission",
        },
        {
          name: "Medical Examination",
          avatar: "images/m_examination.jpg",
          route: "/myPatients/",
        },
        {
          name: "View Ward",
          avatar: "images/ward.jpg",
          route: "/ward",
        },
      ],
    };
  },
};
</script>

<style>
</style>