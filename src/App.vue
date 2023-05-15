

<template>
  <NavBar />
  <StarWars />
</template>
<script>
import StarWars from './components/StarWars.vue';
import NavBar from './components/navBar.vue';
export default {
  name: 'App',
  components: { NavBar, StarWars }
}
</script>


