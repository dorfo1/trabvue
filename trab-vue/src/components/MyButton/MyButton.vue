<template>
  <button class="myButton" @click="onClick">Meu Componente de botão</button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    onClick: { type: Function }
  }
};
</script>

<style src="./styles.css"></style>