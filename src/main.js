import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/index.js'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// import { firestorePlugin } from 'vuefire'

loadFonts()
// firestorePlugin()
// .use(firestorePlugin)
createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
