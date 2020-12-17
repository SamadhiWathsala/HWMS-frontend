<template>
  <div>
    <Navbar />
    <v-container>
      <v-data-table :headers="headers" :items="admissionList" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>NEW ADMISSIONS</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="650px">
              <v-card>
                <v-card-title>
                  <span class="headline">Admission Form</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="3" md="3">
                        <v-text-field v-model="editedItem.bht" label="BHT"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="9" md="9">
                        <v-text-field v-model="editedItem.patientName" label="Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="10" md="10">
                        <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="2" md="2">
                        <v-text-field v-model="editedItem.patientAge" label="Age"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="8" md="8">
                        <v-text-field v-model="editedItem.guardianName" label="Guardian"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4" md="4">
                        <v-text-field v-model="editedItem.guardianPhone" label="Phone"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="editedItem.admissionComplain"
                          label="Admission Complain"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="editedItem.category"
                          :items="['MI', 'Leptospirosis', 'Dengue']"
                          label="Category*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="editedItem.state"
                          :items="['No pain', 'Mild', 'Moderate', 'Severe', 'Very Severe','Worst pain']"
                          label="Status*"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="editedItem.Sergical" label="Sergical History"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="editedItem.medical" label="Medical History"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="editedItem.alergic" label="Alergic Details"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="admitPatient(editedItem._id)">Admit</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <!-- <template> -->
          <v-icon small class="mr-2" @click="viewMore(item)">mdi-dots-horizontal-circle</v-icon>
          <v-icon small @click="rejectAdmission(item._id)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { mapGetters, mapActions } from "vuex";
// @ is an alias to /src

export default {
  components: {
    Navbar,
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "BHT",
        align: "start",
        sortable: false,
        value: "bht",
      },
      { text: "Name", value: "patientName" },
      { text: "Address", value: "address" },
      { text: "Actions", value: "actions" },
    ],
    editedIndex: -1,
    editedItem: {
      bht: "",
      patientName: "",
      address: "",
      patientAge: "",
      guardianName: "",
      guardianPhone: "",
      admissionComplain: "",
      category: "",
      state: "",
      Sergical: "",
      medical: "",
      alergic: "",
    },
    defaultItem: {
      bht: "",
      patientName: "",
      address: "",
      patientAge: "",
      guardianName: "",
      guardianPhone: "",
      admissionComplain: "",
      category: "",
      state: "",
      Sergical: "",
      medical: "",
      alergic: "",
    },
  }),

  computed: mapGetters(["admissionList"]),

  methods: {
    ...mapActions(["fetchAdmisions", "addNewPatient", "deleteAdmission"]),

    admitPatient(id) {
      var pStatus = this.editedItem.state;
      var patientState;
      if (pStatus === "No pain") {
        patientState = "F";
      } else if (pStatus === "Mild") {
        patientState = "E";
      } else if (pStatus === "Moderate") {
        patientState = "D";
      } else if (pStatus === "Severe") {
        patientState = "C";
      } else if (pStatus === "Very Severe") {
        patientState = "B";
      } else {
        patientState = "A";
      }
      let patient = {
        bht: this.editedItem.bht,
        patientName: this.editedItem.patientName,
        patientAge: this.editedItem.patientAge,
        address: this.editedItem.address,
        admissionComplain: this.editedItem.admissionComplain,
        patientCategory: this.editedItem.category,
        patientStatus: patientState,
        sergicalHistory: this.editedItem.Sergical,
        medicalHistory: this.editedItem.medical,
        allergicDetails: this.editedItem.alergic,
        guardian: this.editedItem.guardianName,
        guardianPhone: this.editedItem.guardianPhone,
      };

      this.addNewPatient(patient);
      this.deleteAdmission(id);
      this.dialog = false;
    },

    viewMore(item) {
      this.editedIndex = this.admissionList.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
    },

    save() {
      this.close();
    },
    rejectAdmission(id) {
      this.deleteAdmission(id);
    },
  },

  created() {
    this.fetchAdmisions();
  },
};
</script>
