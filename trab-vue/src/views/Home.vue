<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <my-button :onClick="this.onClick" />
    <h5>Botão foi clickado {{click}} vezes</h5>
  </div>
</template>

<script>
import MyButton from "../components/MyButton/MyButton.vue";

export default {
  name: "home",
  components: {
    MyButton
  },
  data() {
    return {
      click: 0,
      message: "olá"
    };
  },
  methods: {
    onClick() {
      this.click++;
    }
  }
};
</script>


<style>
.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>


