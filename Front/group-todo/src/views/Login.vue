<template>
  <v-row id="box">
    <v-col cols="12" md="6" id="foam">
      <div id="foamBlock">
        <h3>
          Login
        </h3>
        <v-btn
          color="black"
          outlined
          @click="githubLogin"
        >
          GitHubでログイン
        </v-btn>
      </div>
    </v-col>
    <v-col cols="12" md="6">
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { signInWithPopup, GithubAuthProvider, getAuth, Auth } from '@firebase/auth'

export default Vue.extend({
  name: 'Login',
  methods: {
    githubLogin: async function() {
      const auth:Auth = getAuth()
      const provider = new GithubAuthProvider()
      await signInWithPopup(auth, provider)
      .then((result) => {
          this.$store.commit('setUser', result.user)
      })
    }
  }
})
</script>

<style scoped>
#box {
  height: 100%;
  background-image:url('../../public/img/top.jpg');
  background-size: cover;
  margin: 0;
}

#foam {
  backdrop-filter: blur(10px);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#foamBlock {
  text-align: center;
  width: 50%;
  margin: auto auto;
  padding: 40px 0;
  border: solid #000000 1px;
  border-radius: 20px;
}
#foamBlock h3 {
  padding-bottom: 100px;
}

@media screen and (max-width: 500px) {
  #foamBlock {
    width: 70%;
    margin: auto auto;
    padding: 40px 0;
  }
}
</style>
