<template>
  <div class="container">

    <input type="text" @input="changeValue($event.target.value)"  :input="textInput"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    textInput: {
      type: [String, Number],
      required: false,
    }
  },
  methods: {
    changeValue(e) {
      console.log(e);
      this.$emit('update:textInput', e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
