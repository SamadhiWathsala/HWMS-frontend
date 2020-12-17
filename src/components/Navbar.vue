<template>
  <nav>
    <v-app-bar app class="indigo darken-1">
      <v-app-bar-nav-icon class="white--text" @click="drawer =! drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light white--text">medi</span>
        <span class="white--text">Ward</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-10">
          <v-avatar size="80">
            <img src="images/profile_HO.jpg" alt srcset />
          </v-avatar>
          <p class="white--text subheading mt-2">House Officer</p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item v-for="(link,indx) of links" :key="indx" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-account-circle", text: "Profile", route: "/profile" },
        { icon: "mdi-account-group", text: "Staff", route: "/staff" },
        { icon: "mdi-bell", text: "Notifications", route: "/notification" },
        { icon: "mdi-cog", text: "Settings" },
      ],
    };
  },
};
</script>

<style>
</style>