import { default } from '../StarWars.vue';
<template>
    <v-container class="bg-red-darken-1">
        <h2 class="title">Residents</h2>
        <v-row v-if="peopleLoading">
            <v-col cols="3" offset-md="3">
                <Loader />
            </v-col>
        </v-row>
        <div v-else class="resident-container">
            <v-row no-gutters v-if="peopleReady">
                <v-col v-for="(resident, index) in people" :key="index" cols="12" sm="6">
                   <h4 class="resident-name">Name: {{ resident.data.name }}</h4>
                   <h6>Birth: {{ resident.data.birth_year }}</h6>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col cols='12'>
                    <h4>No life was found on this planet </h4>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loader from "../Loader.vue";
export default {
    name: 'People',
    props: ['planetResidents'],
    components: {
        Loader
    },
    async created() {
        await this.getPeople(this.planetResidents)
    },
    computed: {
        ...mapState(['peopleLoading', 'peopleError', 'people']),
        peopleReady() {
            return !this.peopleError && this.people.length
        }
    },
    methods: {
        ...mapActions(['getPeople']),
    }
}
</script>
<style>
.title {
    font-family: 'Star Wars', sans-serif;
}
.resident-name {
    color:#212121;
}
.resident-container {
    min-width: 500px
}
</style>