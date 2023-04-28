<template>
    <nav>
        <v-toolbar flat app color="blue">
        <v-app-bar-nav-icon app color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase" color="grey">
            <span class="font-weight-light">VueFire</span> 
            <span>Todo</span>
        </v-toolbar-title>
        <v-switch v-model="temporary" label="Toggle" hide-details/>
        <v-btn flat color="white" class="text-none" v-if="isLoggedIn" @click="handleSignOut"> 
            <span style="margin-right: 10px;" >SignOut</span>
            <v-icon right color="white">mdi-exit-to-app</v-icon>
        </v-btn>   
    </v-toolbar>
    
    <v-navigation-drawer v-model="drawer" color="indigo" clipped :temporary="temporary">
        <v-list-item
          prepend-icon="mdi-user"
          title="Welcome User"
          nav
          v-if="isLoggedIn"
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list density="compact" nav v-for="link in links" :key="link.text">
          <v-list-item :prepend-icon="link.icon" :title="link.text" :value="link.route" router :to="link.route"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    </nav>
    
</template>




<script>


export default {
    data(){
        return {
            drawer: false,
            temporary: false,
            links: [
                {icon: 'mdi-dialpad', text: 'Dashboard', route: '/'},
                {icon: 'mdi-book-account', text: 'Register', route: '/register'},
                {icon: 'mdi-message-alert-outline', text: 'Feed', route: '/feed'},
                {icon: 'mdi-account-key-outline', text: 'SignIn', route: '/login'},
                

            ]
        }
    }
    ,
    setup() {
        
    },
}
</script>

<script setup>
import { onMounted, ref} from 'vue';

import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../firebase/db.js'

import { useRouter } from 'vue-router';

const isLoggedIn = ref(false)
const router = useRouter()

// let auth;

onMounted(() => {
  // auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user){
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/');
  })
}
</script>
<style>

</style>