<template>
  <div class="welcome">
    <div class="welcome__background" v-for="item in 10" :key="item">
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M120 0C120 7.87931 118.448 15.6815 115.433 22.961C112.417 30.2405 107.998 36.8549 102.426 42.4264C96.8549 47.9979 90.2405 52.4175 82.961 55.4328C75.6815 58.4481 67.8793 60 60 60C52.1207 60 44.3185 58.4481 37.039 55.4328C29.7595 52.4175 23.1451 47.9979 17.5736 42.4264C12.0021 36.8549 7.58251 30.2405 4.56723 22.961C1.55194 15.6815 -6.88831e-07 7.87931 0 -5.24537e-06L24.341 -3.11741e-06C24.341 4.68281 25.2633 9.31976 27.0554 13.6461C28.8474 17.9725 31.474 21.9035 34.7853 25.2147C38.0965 28.526 42.0275 31.1526 46.3539 32.9446C50.6802 34.7367 55.3172 35.659 60 35.659C64.6828 35.659 69.3198 34.7367 73.6461 32.9446C77.9725 31.1526 81.9035 28.526 85.2147 25.2147C88.526 21.9035 91.1526 17.9725 92.9446 13.6461C94.7367 9.31977 95.659 4.68281 95.659 0L120 0Z"
          fill="#D9D9D9"
        />
      </svg>
      <svg
        width="90"
        height="90"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M59.2653 0V59.7695M59.2653 119.539C59.2653 126.134 59.2653 59.7695 59.2653 59.7695M59.2653 59.7695H120M59.2653 59.7695H0"
          stroke="#D9D9D9"
          stroke-width="20"
        />
      </svg>
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="35" r="35" fill="#D9D9D9" />
      </svg>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    console.log(this.colors);
  }
};
</script>

<style scoped>
.welcome {
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 25px;
  height: 100vh;
}
path {
  fill: var(--blue);
}
</style>
