<template>
  <div id="navb">
    <v-app-bar color="transparent" fixed width="100%" app>
      <v-toolbar-title>YOURGOODS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="text-white" color="#b68973" @click="switchToSignin" v-show="navbar_show_signin_button">
          Sign IN
      </v-btn>

      <v-btn class="text-white" color="#eabf9f" @click="switchToSignup" v-show="navbar_show_signup_button">
        Sign UP
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'white';
      } else {
        this.bg = 'transparent';
      }
    },
    show_login(){
        console.log(this.$store)
        this.$store.commit('show_login')
    },
    switchToSignup(){
      //this.$store.commit('switch_to_signup')
      this.$root.$refs.Login.switchToSignup()
    },
    switchToSignin(){
      this.$root.$refs.Login.switchToSignin()
      // this.$store.commit('switch_to_login')
    }
  },
  computed: {
    navbar_show_signin_button() {
      return this.$store.state.navbar_show_signin_button
    },
    navbar_show_signup_button() {
      return this.$store.state.navbar_show_signup_button
    }
  }
};
</script>
<style scoped>
.v-sheet.v-toolbar:not(.v-sheet--outlined){
    box-shadow: none !important;
}
</style>
