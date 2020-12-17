<template>
  <nav>
    <v-app-bar app class="white">
      <v-app-bar-nav-icon class="black--text" @click="drawer =! drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light black--text">medi</span>
        <span class="black--text">Ward</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="white">
      <v-layout column align-center>
        <v-flex class="mt-10">
          <v-avatar size="80">
            <img src="images/profile_HO.jpg" alt srcset />
          </v-avatar>
          <p class="black--text subheading mt-2">Admin</p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item v-for="(link,indx) of links" :key="indx" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="black--text">{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="black--text">{{link.text}}</v-list-item-title>
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
        {
          icon: "mdi-view-dashboard",
          text: "dashboard",
          route: "/admin",
        },
        {
          icon: "mdi-view-dashboard",
          text: "user manage",
          route: "/userManage",
        },
        {
          icon: "mdi-account-circle",
          text: "emergency trolley",
          route: "/trolley",
        },
        { icon: "mdi-account-group", text: "nursing roster" },
      ],
    };
  },
};
</script>

<style>
</style>