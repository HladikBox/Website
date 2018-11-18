<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from "./components/header";
import myfooter from "./components/footer";

export default {
  name: "App",
  components: { myheader,myfooter }
};
</script>

<style>
@import "./style.css";
</style>
