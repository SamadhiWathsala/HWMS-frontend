<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Request Test</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Medical test request form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <!-- <v-text-field label="BHT*" required v-model="bht"></v-text-field> -->
                <label>BHT Number</label>
                <h3>{{bht}}</h3>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <!-- <v-text-field label="Patient Name" v-model="patientName"></v-text-field> -->
                <label>Patient Name</label>
                <h3>{{patientName}}</h3>
              </v-col>
              <v-col cols="12" sm="12">
                <!-- <v-text-field label="Patient Address*" required v-model="paddress"></v-text-field> -->
                <label>Patient Address</label>
                <h3>{{paddress}}</h3>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="testCategory"
                  :items="['Blood', 'Urine', 'Stool', 'X-Ray', 'Scan','Biopsy']"
                  label="Test Type*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Test Name*" required v-model="testName"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="sampleState"
                  :items="['Normal', 'Urgent', 'Very Urgent']"
                  label="Sample collection*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Fasting hour*" v-model="fastingHour" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field label="Test Description*" required v-model="description"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="requestTest">Send Request</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["pid", "patientName", "paddress", "bht"],
  data: () => ({
    testCategory: "",
    testName: "",
    description: "",
    sampleState: "",
    fastingHour: "",
    dialog: false,
  }),

  methods: {
    ...mapActions(["addNewTest"]),

    requestTest() {
      let test = {
        testCategory: this.testCategory,
        testName: this.testName,
        testDescription: this.description,
        testStatus: "pending",
        patientID: this.pid,
        patientName: this.patientName,
        patientAddress: this.paddress,
        collectionState: this.sampleState,
        fastingHours: this.fastingHour,
      };

      this.addNewTest(test);
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>