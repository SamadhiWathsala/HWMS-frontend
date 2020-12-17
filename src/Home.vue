<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>Welcom to MEDIWARD system</v-toolbar-title>
    </v-app-bar>

    <v-container class="my-5">
      <h2>Login As</h2>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4>
          <HOLogin />
        </v-flex>
        <v-flex xs12 sm6 md4 lg4>
          <AdminLogin />
        </v-flex>
      </v-layout>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non unde eligendi quod pariatur delectus perferendis aliquam qui perspiciatis! Reiciendis quibusdam vero soluta alias provident at saepe placeat molestias voluptate!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum dolorem tenetur quidem harum ducimus delectus repellendus cupiditate at sint sit officia fuga amet aliquid ipsum? Consectetur numquam consequuntur laboriosam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eveniet, repudiandae quia aliquam accusantium, enim quos explicabo sapiente nobis a ratione molestias? Delectus sapiente vitae odio illum. Magnam, vero labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, architecto eligendi ducimus cupiditate consequuntur perferendis ut dolorum ullam voluptas, nihil maiores est vitae sunt repellendus molestias totam recusandae, fuga laboriosam.
      </p>
      <h4>
        If you don't have an account
        <span class="red--text">Request Account</span>
      </h4>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg14>
          <AccRequest />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HOLogin from "./components/HoLogin";
import AdminLogin from "./components/AdminLogin";
import AccRequest from "./components/AccRequest";

export default {
  components: {
    HOLogin,
    AdminLogin,
    AccRequest,
  },
};
</script>

<style>
</style>