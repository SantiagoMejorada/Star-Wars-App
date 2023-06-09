import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify)
app.use(store)
app.use(VueApexCharts)
app.component('apexchart', VueApexCharts)

app.mount('#app')
