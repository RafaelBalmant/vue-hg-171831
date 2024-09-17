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

  <div id="side-menu" :class="{ 'menu-hidden': !menuState }">
    <v-icon
        name="co-hamburger-menu"
        scale="2"
        id="menu-icon"
        @click="toggleMenu"
        :class="{ 'menu-hidden': !menuState }"
    />
    <h3> HG </h3>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>{{String(menuState)}}</span>
  </div>
</template>

<style scoped>
#side-menu {
  height: 100vh;
  width: 8vw;
  margin: 0;
  color: antiquewhite;
  background-color: var(--purple1);
  position: fixed;
  border-radius: 0 0 4px 0;
  transition: transform 0.3s;
  box-shadow: #7a5ca1 0 0 3px;
  text-align: center;
  @media (max-width: 600px) {
    width: 90vw;
  }
}

#menu-icon {
  position: relative;
  left: 5vw;
  background-color: var(--purple1);
  border-radius: 0 2px 0 0 ;
  cursor: pointer;
  box-shadow: #7a5ca1 0 0 3px;
  @media (max-width: 600px) {
    left: 50vw;
  }
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
  transform: translateX(-8vw);
  @media (max-width: 600px) {
    transform: translateX(-95vw);
  }
}

#menu-icon.menu-hidden {
  @media (max-width: 600px) {
    left: 55vw;
  }
}


</style>

