export const useColorsStore = defineStore("colors", {
  state: () => ({
    flurmode: false,
    soft: {
      pink: "#F584AF",
      orange: "#F5C48E",
      lilac: "#936BF4",
      green: "#9DFAA4",
      blue: "#ABE0F5",
    },
    flur: {
      pink: "red",
      orange: "#F5C48E",
      lilac: "#936BF4",
      green: "#9DFAA4",
      blue: "#ABE0F5",
    },
  }),
  getters: {
    colorArray: (state)=>{
      let styles = [];

      // Find all colors for current theme
      const theme = state.flurmode ? "flur" : "soft";
      const colorsSource = state[theme];

      styles = Object.values(colorsSource);

      return styles
    },
    colorVariables: (state) => {
      const styles = [];

      // Find all colors for current theme
      const theme = state.flurmode ? "flur" : "soft";
      const colorsSource = state[theme];

      for (let key in colorsSource){
        styles.push(`--${key}: ${colorsSource[key]};`);
      }

      return styles.join("\n");
    },
  },
  actions: {
    toggleColorMode() {
      this.flurmode = !this.flurmode;
    },
  },
});
