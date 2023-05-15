<template>
    <v-container class="container">
        <v-row no-gutters>
            <v-col cols="12" sm="12">
                <h2>Planets</h2>
            </v-col>
        </v-row>
        <v-row v-if="planetsLoading">
            <v-col cols="3" offset-md="6">
                <Loader />
            </v-col>
        </v-row>
        <div v-else>
            <v-row v-if="isPlanetsLoaded">
                <v-col cols="12">
                    <h3 class="text-primary planet-text">Main Data</h3>
                    <PlanetData />
                </v-col>
                <v-col cols="12">
                    <h3 class="text-primary planet-text">Orbital Period</h3>
                    <PlanetChart />
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col cols="12">
                    <h3 class="text-primary planet-text">There is a problem in the galaxy!! Come back later</h3>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
import PlanetData from './planets/Data.vue'
import PlanetChart from './planets/Chart.vue'
import Loader from "./Loader.vue";
export default {
    name: 'StarWars',
    components: {
        PlanetData,
        PlanetChart,
        Loader
    },
    async created() {
        await this.getPlanets()
    },
    computed: {
        ...mapState(['planetsLoading', 'planetsError']),
        isPlanetsLoaded() {
            return !(this.planetsError && this.planetsLoading)
        }
    },
    methods: {
        ...mapActions(['getPlanets']),
    }
}
</script>
<style>
.container {
    margin-top: 80px;
}

.planet-text {
    margin-bottom: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 24px;
}
</style>