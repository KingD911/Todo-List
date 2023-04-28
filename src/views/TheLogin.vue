<template>
   
    <v-sheet width="300" class="mx-auto">
     <v-form fast-fail @submit.prevent="register" style="margin-top: 5rem;">
       
         <v-text-field
             v-model="email"
             :rules="emailRules"
             label="E-mail"
             required
           ></v-text-field>
 
           <v-text-field v-model="password" label="Password" type="password"></v-text-field>

           <v-card v-if="errMsg">
            <span>{{ errMsg }}</span>
           </v-card>
 
       <v-btn type="submit" block class="mt-2">Submit</v-btn>
     </v-form>
   </v-sheet>
        
 </template>

 <script setup>
import {ref} from 'vue';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase/db.js'

import { useRouter } from 'vue-router';



//  const signInWithGoogle = () => {
   
// }

const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter()

/* eslint-disable */
const register = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
   .then((auth) => {
        if(auth){
            router.push('/todo')
        }
       
   })
   .catch((error) => {
       console.log(error.code);
       switch(error.code)
       {
        case "auth/invalid-email":
            errMsg.value = "invalid-email";
            break;
        case "auth/user-not-found":
            errMsg.value = "No Account With that Email Found";
            break;
        case "auth/wrong-password":
            errMsg.value = "Incorrect password!";
            password = "";
            break;
        default:
            errMsg.value = "Email or Password was incorrect";
            break;
       }
   })
}
 </script>
 
 