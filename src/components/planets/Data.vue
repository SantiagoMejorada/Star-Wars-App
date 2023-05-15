<template>
    <v-card height="450" class="overflow-auto data-card">
        <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" items-per-page="60" :items="planets" @click:row="handleDialog" hide-default-footer
            hide-default-header :search="search">
            <template v-slot:bottom>
                <div class="text-center">
                    <span>Planets</span>
                </div>
            </template>
        </v-data-table>
    </v-card>
    <v-dialog v-if="dialog" activator="parent" width="auto">
        <v-card class="dialog-card">
            <People :planetResidents="currentResidents"/>
            <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { mapState } from "vuex";
import People from '../residents/People.vue';
export default {
    name: 'Data',
    components: {
        VDataTable,
        People
    },
    data() {
        return {
            search: '',
            dialog: false,
            currentResidents: [],
            headers: [
                {
                    align: 'start',
                    key: 'name',
                    sortable: true,
                    title: 'Planet',
                },
                { key: 'population', title: 'Population' },
                { key: 'diameter', title: 'Diameter' },
                { key: 'climate', title: 'Climate' },
            ]
        }
    },
    methods: {
        handleDialog(row, planet) {
            this.currentResidents = planet.item.raw.residents
            this.dialog = true
        }
    },
    computed: {
        ...mapState(['planets'])
    }
}
</script>

<style>
.data-card::-webkit-scrollbar {
    width: 10px;
    border-radius: 100px;
    background-color: #f1f1f1;
}

.data-card::-webkit-scrollbar-thumb {
    width: 10px;
    border-radius: 100px;
    background-color: #c1c1c1;
}
.dialog-card{
    min-width: 300px;
}
</style>