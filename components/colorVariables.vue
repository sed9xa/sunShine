<template>
  <component :is="'style'">
    :root {
        {{colors}}
    }
  </component>
</template>

<script>
import { useColorsStore } from '@/store/colors.js'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(useColorsStore,
    {
      colors: "colorVariables"
    }),
  },
};
</script>

<style scoped></style>
