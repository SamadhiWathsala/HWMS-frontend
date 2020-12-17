<template>
  <div>
    <DefaultNavbar />
    <v-container>
      <v-list>
        <h3>Emergency Trolley Items</h3>

        <v-list-item v-for="(item,indx) in itemList" :key="indx">
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/4.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="item.itemName"></v-list-item-title>
            <v-list-item-subtitle v-text="item.quantity"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-delete</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">ADD NEW ITEM</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="8" md="8">
                  <v-text-field v-model="itemName" label="Item Name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                  <v-text-field v-model="quantity" label="Item quantity" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-subheader>Expire Date</v-subheader>
                  <v-row justify="space-around">
                    <v-date-picker v-model="picker2" color="green lighten-1" header-color="primary"></v-date-picker>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="addNewItem()">Add Item</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import DefaultNavbar from "../components/DefaultNavbar";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    DefaultNavbar,
  },
  computed: mapGetters(["itemList"]),
  data: () => ({
    itemName: "",
    quantity: "",
    itemStatus: "",
    dialog: false,
    picker2: new Date().toISOString().substr(0, 10),
  }),

  created() {
    this.fetcItems();
  },
  methods: {
    ...mapActions(["addItem", "fetcItems"]),

    addNewItem() {
      let trolleyItem = {
        itemName: this.itemName,
        quantity: this.quantity,
        itemStatus: "Exits",
        expDate: this.picker2,
      };

      this.addItem(trolleyItem);
      console.log(trolleyItem);
    },
  },
};
</script>

<style>
</style>