<template>
  <div>
    <h3>{{user.name}}</h3>
    <h3>{{user.email}}</h3>
    <h3>{{user.username}}</h3>
    <h3>{{user.phone}}</h3>
    <hr />
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: { type: Object }
  }
};
</script>