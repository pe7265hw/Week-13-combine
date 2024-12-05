<script setup>
//import statement which imports objects
import { ref, watch } from 'vue'

//defines data that child will recieve from parent
defineProps({
  question: String,
  answer1: String,
  answer2: String
})

//defines the events that the child will send to the parent
const emit = defineEmits([
  'answer-selected'
])

const choice = ref(null)

// emits event to tell parent that user has made a choice
// function choiceMade(){
//   emit('answer-selected', choice.value)
// }

//if choice has changed, change value in choice
watch(choice, () =>{
  emit('answer-selected',choice.value)
})
</script>

<template>

<!--Shows the question and answers for the would you rather proposition-->
<div id="wyr">

    <h2>Make your choice!</h2>

  <p>{{ question }}</p>
  <div>
    <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1"> <!--binds radio button 1 to value in answer1 as recieved from parent-->
    <label for="answer-1">{{ answer1 }}</label> 
    
    <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2"> <!--binds radio button 2 to value in answer2 as recieved from parent-->
    <label for="answer-2">{{ answer2 }}</label>
  </div>
</div>
  
</template>

<!--css styling-->
<style scoped>
#wyr{
  background-color: lightblue;
}

p{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>
