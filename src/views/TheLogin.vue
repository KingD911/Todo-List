<template>
    <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent style="margin-top: 5rem;">
      
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field v-model="password" label="Password" type="password"></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
    data()
    {
        return {
            email: '',
            password: ''
        }
    },
    setup() {
        
    },
}
</script>