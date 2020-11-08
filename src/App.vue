<template>
  <div id="app">
    <h1>Vue app</h1>
    <Editor v-model="a" @input="sum()" />
    <Editor v-model="b" @input="sum()" />
    <Editor v-model="c" />
    <span v-if="msg.result">{{ msg.result }}</span>

    <h2>{{ a }} + {{ b }} = {{ c }}</h2>
    <button class="vl-button">
      <span class="vl-button__label">Gegevens opslaan</span>
    </button>
    <button class="vl-button vl-button--disabled" disabled>
      <span class="vl-button__label">Gegevens opslaan</span>
    </button>
    <button class="vl-button vl-button--error">
      <span class="vl-button__label">Gegevens opslaan</span>
    </button>
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";
import { calculate } from "../public/calculation";
import { retrieveCalculationFromIndex } from "./IndexConnector";

export default {
  name: "App",
  data() {
    return {
      a: 0,
      b: 0,
      c: 0,
      msg: [],
    };
  },
  watch: {
    c(value) {
      this.c = value;
      this.validateResult(value);
    },
  },
  methods: {
    sum() {
      this.c = retrieveCalculationFromIndex(this.a, this.b);
    },
    validateResult(value) {
      if (value < 3) {
        this.msg["result"] = "result must be greater than 3";
      } else {
        this.msg["result"] = "";
      }
    },
  },
  components: {
    Editor,
  },
};
</script>

<style lang="scss">
@import "~@govflanders/vl-ui-core/src/scss/core";
@import "~@govflanders/vl-ui-button/src/scss/button";
</style>
