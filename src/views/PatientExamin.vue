<template>
  <div>
    <Navbar />
    <v-container>
      <center>
        <v-responsive class="pt-4" v-if="singlePatient.patientCategory == 'MI'">
          <v-avatar size="80">
            <img src="images/heart1.png" />
          </v-avatar>
        </v-responsive>
        <v-responsive class="pt-4" v-if="singlePatient.patientCategory == 'Leptospirosis'">
          <v-avatar size="80">
            <img src="images/leptos.jpg" />
          </v-avatar>
        </v-responsive>
        <v-responsive class="pt-4" v-if="singlePatient.patientCategory == 'Dengue'">
          <v-avatar size="80">
            <img src="images/dengue.jpg" />
          </v-avatar>
        </v-responsive>
        <h3 class="text-uppercase">{{singlePatient.bht}}</h3>
        <h3 class="text-uppercase">{{singlePatient.patientName}}</h3>
        <h3 class="text-uppercase">{{singlePatient.address}}</h3>
      </center>
      <br />

      <v-row app>
        <v-flex xs12 sm12 md4 class="red lighten-5">
          <h5>Allergic Details</h5>
          <p>{{singlePatient.allergicDetails}}</p>
        </v-flex>
        <v-flex xs12 sm12 md4 class="red lighten-5">
          <h5>Sergical History</h5>
          <p>{{singlePatient.sergicalHistory}}</p>
        </v-flex>
        <v-flex xs12 sm12 md4 class="red lighten-5">
          <h5>Medical History</h5>
          <p>{{singlePatient.medicalHistory}}</p>
        </v-flex>
      </v-row>

      <header class="font-weight-medium">Treatment Details</header>
      <br />
      <v-layout row>
        <v-flex xs12 sm6>
          <p>Treatment History</p>
          <span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odio, fugiat nostrum ab quod incidunt nesciunt animi ipsam aliquid tempora consequatur veritatis delectus optio, expedita exercitationem sunt itaque fuga? Qui?</p>
          </span>
        </v-flex>
        <v-flex xs12 sm6>
          <p>Inprogress Treatment</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere blanditiis delectus dolorem architecto, amet illum. Amet, dolor dicta debitis possimus nulla sunt eos est distinctio temporibus sequi animi laudantium.</span>
        </v-flex>
        <v-flex>
          <Treatment
            :pid="singlePatient._id"
            :patientName="singlePatient.patientName"
            :paddress="singlePatient.address"
            :bht="singlePatient.bht"
          />
        </v-flex>
      </v-layout>
      <br />
      <br />
      <v-divider></v-divider>
      <p class="font-weight-medium">Test Details</p>
      <v-layout row>
        <v-flex xs12 sm6>
          <p>Tests History</p>
          <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
        </v-flex>
        <v-flex xs12 sm6>
          <p>Report Pending Test</p>
          <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
        </v-flex>
        <v-flex>
          <Test
            :pid="singlePatient._id"
            :patientName="singlePatient.patientName"
            :paddress="singlePatient.address"
            :bht="singlePatient.bht"
          />
        </v-flex>
      </v-layout>
      <br />
      <br />
      <v-divider></v-divider>
      <p class="font-weight-medium">Mesurement Charts</p>
      <v-layout row>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur magnam, similique sequi quas dolore nisi quam possimus. Soluta ut, beatae ad officia doloremque facere eum ducimus dolorem aliquam amet!
        <v-flex>
          <!-- <Charts /> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Test from "../components/TestRequest";
import Treatment from "../components/TreatmntRequest";
// import Charts from "../components/ChartsRequest";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Navbar,
    Test,
    Treatment,
    // Charts,
  },

  computed: {
    ...mapGetters(["singlePatient"]),
  },

  created() {
    this.fetchOnePatient(this.$route.params.pID);
  },

  methods: {
    ...mapActions(["fetchOnePatient"]),
  },
};
</script>

<style scoped>
</style>>
