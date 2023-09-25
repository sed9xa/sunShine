<template>
  <div>
    <color-variables></color-variables>
    <welcome-page></welcome-page>
    <about-us></about-us>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    console.log(document.querySelectorAll('.scroll'), 'scroll');
  },
};
</script>

<style>
</style>
