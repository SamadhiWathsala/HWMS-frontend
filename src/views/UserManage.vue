<template>
  <div>
    <DefaultNavbar />
    <v-container>
      <v-data-table :headers="headers" :items="requestList" class="elevation-2">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>All Account Requests</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="650px">
              <v-card>
                <v-card-title>
                  <span class="headline">Details of Request</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="3" md="3">
                        <v-text-field v-model="editedItem.staffID" label="Staff ID"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="9" md="9">
                        <v-text-field v-model="editedItem.userName" label="Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="9" md="9">
                        <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="3" md="3">
                        <v-text-field v-model="editedItem.userRole" label="User Role"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="10" md="10">
                        <v-img
                          :src="editedItem.front"
                          aspect-ratio="0.5"
                          max-width="400"
                          max-height="200"
                        ></v-img>
                      </v-col>
                      <v-col cols="12" sm="10" md="10">
                        <v-img
                          :src="editedItem.back"
                          aspect-ratio="0.5"
                          max-width="400"
                          max-height="200"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="acceptRequest(editedItem._id)">Accept</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="viewMore(item)">mdi-dots-horizontal-circle</v-icon>
          <v-icon small class="mr-2" @click="deleteRequest(item._id)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
    <AddUser />
    <AllUsers />
  </div>
</template>

<script>
import DefaultNavbar from "../components/DefaultNavbar";
import { mapGetters, mapActions } from "vuex";
import AddUser from "../views/AddUesr";
import AllUsers from "../views/AllUsers";

// @ is an alias to /src

export default {
  components: {
    DefaultNavbar,
    AddUser,
    AllUsers,
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Staff ID",
        align: "start",
        value: "staffID",
      },
      { text: "Name", value: "userName" },
      { text: "Email", value: "email" },
      { text: "Actions", value: "actions" },
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      staffID: "",
      email: "",
    },
  }),

  created() {
    this.fetchAccRequests();
  },

  computed: mapGetters(["requestList"]),

  methods: {
    ...mapActions(["fetchAccRequests", "addNewUser", "deleteAccRequest"]),

    acceptRequest(id) {
      let user = {
        userName: this.editedItem.userName,
        staffID: this.editedItem.staffID,
        email: this.editedItem.email,
        password: this.editedItem.staffID,
        role: this.editedItem.userRole,
      };

      this.addNewUser(user);
      this.deleteAccRequest(id);
      this.dialog = false;
    },

    deleteRequest(id) {
      this.deleteAccRequest(id);
      console.log(id);
    },

    viewMore(item) {
      this.editedIndex = this.requestList.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
    },
  },
};
</script>
