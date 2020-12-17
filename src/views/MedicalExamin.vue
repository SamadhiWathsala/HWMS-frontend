<template>
  <div>
    <Navbar />
    <!--Dashboard View-->
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(patient,indx) of hoPatientList" :key="indx">
          <!-- <v-card class="text-center ma-3" router :to="`/patientExamin/${patient._id}`"> -->
          <v-card class="text-center ma-3" router :to="`/patientExamin/${patient._id}`">
            <v-responsive class="pt-4" v-if="patient.patientCategory == 'MI'">
              <v-avatar size="80">
                <img src="images/heart1.png" />
              </v-avatar>
            </v-responsive>
            <v-responsive class="pt-4" v-if="patient.patientCategory == 'Leptospirosis'">
              <v-avatar size="80">
                <img src="images/leptos.jpg" />
              </v-avatar>
            </v-responsive>
            <v-responsive class="pt-4" v-if="patient.patientCategory == 'Dengue'">
              <v-avatar size="80">
                <img src="images/dengue.jpg" />
              </v-avatar>
            </v-responsive>
            <v-list-item-content>
              <v-list-item-title>{{patient.patientName}}</v-list-item-title>
              <v-list-item-subtitle>
                {{patient.address
                }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["hoPatientList"]),
  },
  created() {
    this.fetchMyPatients();
  },

  methods: {
    ...mapActions(["fetchMyPatients"]),
  },
};
</script>

<style>
</style>