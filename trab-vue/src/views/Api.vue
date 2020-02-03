<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">
      <user-item v-bind:user="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserItem from "../components/UserItem/UserItem.vue";

export default {
  name: "api",
  components: {
    UserItem
  },
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => (this.users = response.data));
  }
};
</script>




a