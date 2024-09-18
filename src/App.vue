<template>
  <div id="app">
    <header>
      <Menu/>
    </header>
    <router-view />
  </div>
</template>

<script>
import Menu from "./components/template/Menu.vue";

export default {
  //Name of component
  name: 'App',
  // Components that be use on parent component
  components: { Menu }
}
</script>
