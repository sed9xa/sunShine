<template>
  <div>
    <nuxt-page></nuxt-page>
  </div>
</template>

<script>
import Lenis from "@studio-freight/lenis";
export default {
  mounted() {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>