<script>
// IMPORTS
// EXPORTS
export default {
  computed: {
    menuState () {
      return this.$store.getters.sideMenuOpen;
    }
  },
  methods: {
    toggleMenu () {
      this.$store.commit('toggleMenu');
    }
  }
}
</script>


<template>
  <v-icon
      name="co-hamburger-menu"
      scale="2"
      id="open-menu-icon"
      @click="toggleMenu"
      :class="{ 'menu-hidden': !menuState }"
  />

  <div id="side-menu" :class="{ 'menu-hidden': !menuState }">
    <div style="display: flex; justify-content: space-between; padding: 1rem">
      <h3> Holy God </h3>
      <v-icon
          name="io-close-circle"
          scale="2"
          id="close-menu-icon"
          @click="toggleMenu"
          :class="{ 'menu-hidden': !menuState }"
      />
    </div>

    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>{{String(menuState)}}</span>
  </div>
</template>

<style scoped>
#side-menu {
  height: 80vh;
  width: 20vw;
  margin: 0;
  color: antiquewhite;
  background-color: var(--purple1);
  position: fixed;
  border-radius: 0 0 4px 0;
  transition: transform 0.3s;
  box-shadow: #7a5ca1 0 0 3px;
  text-align: center;
  @media (max-width: 600px) {
    width: 100vw;
  }
}

#open-menu-icon {
  transition: transform 0.3s;
  position: fixed;
  background-color: var(--purple1);
  border-radius: 0 2px 0 0 ;
  cursor: pointer;
  box-shadow: #7a5ca1 0 0 3px;
  color: antiquewhite;
}

#close-menu-icon {
  background-color: var(--purple1);
  cursor: pointer;
  box-shadow: #7a5ca1 0 0 3px;
  color: antiquewhite;
}

#side-menu > span {
  display: block;
  padding: 1rem;
  cursor: pointer;
  font-weight: bolder;
  font-size: larger;
  background-color: var(--purple2);
  margin: 1rem 1rem;
}


#side-menu.menu-hidden {
  transform: translateX(-40vw);
  @media (max-width: 600px) {
    transform: translateX(-100vw);
  }
}



</style>

