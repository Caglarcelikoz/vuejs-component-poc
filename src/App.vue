<template>
  <div id="app">
    <Editor v-model="a" @input="sum()" />
    <Editor v-model="b" @input="sum()" />
    <Editor v-model="c" />
    <span v-if="msg.result">{{msg.result}}</span>

    <h2>{{a}} + {{b}} = {{c}}</h2>
    

  </div>
</template>

<script>

import Editor from './components/Editor.vue'
import {calculate} from '../public/calculation'

export default {
  name: 'App',
  data(){
    return {
      a:0,
      b:0,
      c:0,
      msg:[]
    }
  },
  watch:{
    c(value){
      this.c=value;
      this.validateResult(value);
    }
  },
  methods:{
    sum(){
      this.c=(Number(this.a) + Number(this.b));
      this.passData();
      /*const results = calculate();

      this.a=results['num1'];
      this.b=results['num2'];
      console.log(results);*/
    },
    passData(){
      const numbers =[];
      numbers.push(this.a);
      numbers.push(this.b);
      console.log(numbers);
      return numbers;
    },
    validateResult(value){
      if(value < 3){
        this.msg['result'] = "result must be greater than 3";
      }else{
        this.msg['result'] = ""
      }
    }
  },
  components: {
    Editor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
