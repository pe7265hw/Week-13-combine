<script setup>
//import child file
import WouldYouRather from './components/WouldYouRather.vue'

import wyrService from './services/wyrService'

//imports ref object from vue
import {ref, onMounted} from 'vue'

onMounted( ()=> {
    wyrService.getRandomWYR().then((wyrData)=>{
        //expected data:
        //'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        //'answer1': 'Cat-sized elephant',
        //'answer2': 'Elephant-sized cat'

        wyrQuestion.value=wyrData.question
        wyrAnswer1.value=wyrData.answer1
        wyrAnswer2.value=wyrData.answer2

    })
})

//define empty variables
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

//user input
const userSelection = ref('')

//process user input for display
function updateUserSelection(userChoice){
    userSelection.value = `I see, you selected ${userChoice}.`
}

</script>

<template>
<div id="app-components">

<h1>Oh Hai Thar, Would You Rather?</h1>
<!--binds information in parent to what is expect to be recieved in child-->
    <WouldYouRather 
    v-bind:question="wyrQuestion"
    v-bind:answer1="wyrAnswer1"
    v-bind:answer2="wyrAnswer2"
    v-on:answer-selected="updateUserSelection"></WouldYouRather>

    <p>{{ userSelection }}</p>
</div>
</template>


<!--css styling-->
<style scoped>
p{
    font-family: Arial, Helvetica, sans-serif;
}
#app-components{
    /*font-size: 3em;*/
    background-color: aqua;
    padding: 40px;
}
</style>
