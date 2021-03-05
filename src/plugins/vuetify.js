import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'

Vue.use(Vuetify);
Vue.use(mdiVue, {
    icons: mdijs
})

export default new Vuetify({
    theme: { dark: true },
});
