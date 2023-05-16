<template>
    <v-card height="450">
        <apexchart :width="chartsWidth" height="300" type="bar" :options="options" :series="series" class="chart-container">
        </apexchart>
    </v-card>
</template>
<script>
import { mapState } from "vuex";
import { isProxy, toRaw } from 'vue';
export default {
    name: 'Chart',
    data() {
        return {
            options: {},
            series: [],
            newPlanets: [],
            chartsWidth: "100%"
        }
    },
    computed: {
        ...mapState(['planets']),
        setPlanets() {
            console.log(planets)
            const planets = isProxy(this.planets) ? toRaw(this.planets) : this.planets
            this.setOptions(planets)
            this.setSeries(planets)
        },
        options() {
            const categories = []
            this.planets.forEach((i) => {
                categories.push(i.name);
            });
            return {
                dataLabels: {
                    enabled: true,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        opacity: 0.5,
                    },
                },
                chart: {
                    id: "orbital-period",
                    stacked: true,
                },
                legend: {
                    show: false,
                },
                xaxis: {
                    categories: categories,
                    labels: {
                        style: {
                            fontSize: "11px",
                        },
                    },
                },
                fill: {
                    colors: ['#F00']
                }
            };
        },
        series() {
            const currentData = []

            this.planets.forEach((i) => {
                currentData.push({
                    x: i.name,
                    y: i.orbital_period ? i.orbital_period : 0
                });
            });
            return [{
                name: "Population",
                data: currentData,
            }]

        }
    }
}
</script>
<style>
.chart-container {
    overflow-x: auto;
    overflow-y: hidden;
}
</style>