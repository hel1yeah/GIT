<template>
  <div class="container">
    <input @input="changeInput($event.target.value)" value="sdf" type="text" />
    <h2>input tets</h2>
  </div>
</template>

<script>
export default {
  name: "SyncTest",
  props: ["inputValue"],
  methods: {
    changeInput(e) {
      console.log(e);
      this.$emit("update:inputValue", e);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
