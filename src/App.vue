

<template>
  <NavBar />
  <StarWars />
</template>
<script>
import StarWars from './components/StarWars.vue';
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: { NavBar, StarWars }
}
</script>


