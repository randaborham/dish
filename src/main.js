import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'; // Ensure this line is included
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi', // Specify 'mdi' as the icon font
      },
  })

createApp(App).use(vuetify).use(store).use(VueTelInput).use(router).mount('#app')
