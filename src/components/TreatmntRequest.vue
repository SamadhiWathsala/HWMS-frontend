<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Request New Treatment</v-btn>
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
                  v-model="treatmentType"
                  :items="['Oral', 'Rectal', 'SubLingual', 'Injection', 'Intranasal','Topical','Transdermal','Gatte','Dressing']"
                  label="Test Type*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Details of Drug*" required v-model="drugDetails"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="treatTime"
                  :items="['TB', '8hr', '7hr', '12hr']"
                  label="Treatment time*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Fasting hour*" v-model="fastingHour" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field label="Special Description*" required v-model="description"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="requestTreatment">Send Request</v-btn>
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
    treatmentType: "",
    drugDetails: "",
    treatmentStatus: "",
    treatTime: "",
    fastingHour: "",
    description: "",
    dialog: false,
  }),

  methods: {
    ...mapActions(["addNewTreatment"]),

    requestTreatment() {
      let treatment = {
        patientID: this.pid,
        patientName: this.patientName,
        patientAddress: this.paddress,
        treatmentType: this.treatmentType,
        drugDetails: this.drugDetails,
        treatmentStatus: "In progress",
        treatTime: this.treatTime,
        fastingHour: this.fastingHour,
        description: this.description,
      };

      this.addNewTreatment(treatment);
      this.dialog = false;
    },
  },
};
</script>

<style>
</style>