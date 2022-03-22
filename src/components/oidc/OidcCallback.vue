

<template>
  <div v-if="oidcIsAuthenticated">Authenticating...</div>

  <div v-else>Logging in...</div>
</template>

 

<script>
// This component is used as a callback for the oidc flow

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["oidcIsAuthenticated"]),
  },

  created() {
    this.oidcSignInCallback()

      .then((redirectPath) => {
        this.$router.push(redirectPath);
      })

      .catch((/* err */) => {
        this.$router.push("/signin-oidc-error"); // Handle errors any way you want
      });
  },

  methods: {
    ...mapActions(["oidcSignInCallback"]),
  },
};
</script>