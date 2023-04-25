<template>
    <v-app>

    <div class="pt-3">
        <H1>Todo list</H1>
        <v-row class="dflex justify-center">
            <v-col cols="8">
                <v-text-field label=" New Todo" outlined v-model="newItem" @keyup.enter="addItem"></v-text-field>
            </v-col>
            <v-col>
                <v-btn large color="blue" @click="addItem">
                    Add
                </v-btn>
            </v-col>
        </v-row>
        <transition-group name="fade">
            <v-card class="mx-auto pa-3 ma-2 text-center" max-width="400" v-for="Todo in Todos" :key="Todo.id">
                <v-row>
                    <v-col cols="8"> 
                        <v-list-item-title class="headline mb-1">{{ Todo.name }}</v-list-item-title>
                    </v-col>
                    <v-col cols="4">
                        <v-btn icon color="red" @click="deleteTodo(Todo.id)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </transition-group>
    </div>

    </v-app>
    
</template>

<script>
import db from '../firebase/db'
import {collection, doc, setDoc, deleteDoc, query, getDocs} from "firebase/firestore"
// const colRef = collection(db, "Todos");


export default {
    data()
    {
        return {
            Todos: [], 
            newItem: "", 
            curId: ""
        }
    },
    created() {
    this.getTodo()
  },
    methods: {
        async addItem(){
            if(this.newItem)
            {
                // const docRef = await addDoc(colRef, {
                //     name: this.newItem, id: Date.now()
                // })
                // this.newItem = ""
                // console.log(docRef.id)
                const x  = Date.now().toString()

                await setDoc(doc(db, 'Todos', x), {
                    name: this.newItem, id: x
                    });
                    this.newItem = ""
                    
            }
            this.$forceUpdate();
            // this.getTodo()
        }, 
        async deleteTodo(id)
        {
            await deleteDoc(doc(db, "Todos", id))
            // db.collection("Todo").doc(id).delete()

        },
        async getTodo() {
      // query to get all docs in 'countries' collection
      const querySnap = await getDocs(query(collection(db, 'Todos')));

      // add each doc to 'countries' array
      querySnap.forEach((doc) => {
        this.Todos.push(doc.data())
      })

    }
    },
    setup() {
        
    },
}
</script>
