<template>
    <v-app>
      <v-app-bar
        app
        color="teal"
        dark
      >
        <div class="d-flex align-center">
          <h1
            @click="home"
          >
            Group Task Checker
          </h1>
        </div>

        <v-spacer></v-spacer>

        <v-btn
          elevation="3"
          outlined
          @click="logout"
          v-if="$store.getters.loginState"
        >
          <span class="mr-2">Logout</span>
        </v-btn>
        
        <v-btn
          elevation="3"
          outlined
          @click="$router.push('/login')"
          v-else
        >
          <span class="mr-2">Login</span>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view/>
      </v-main>
      <v-footer>
        2021 @sora210.dev
      </v-footer>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { signOut, getAuth, Auth} from '@firebase/auth'

export default Vue.extend({
  name: 'App',

  methods: {
    logout: function() {
      const auth:Auth = getAuth()
      signOut(auth)
        .then(() => {
          this.$store.commit('deleteUser')
          this.$router.push('/')
        })
    },
    home: function() {
      if (this.$store.getters.loginState) {
        this.$router.push('/project/all/tasks')
      } else {
        this.$router.push('/')
      }
    }
  },
  mounted: function() {
    this.$store.dispatch("projectGet")
  }
});
</script>