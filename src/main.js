import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import { firestorePlugin } from 'vuefire'

loadFonts()
// firestorePlugin()
// .use(firestorePlugin)
createApp(App)
  .use(vuetify)
  .mount('#app')
