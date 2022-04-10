<template>
  <div class="carusel">
    <div class="carusel__inner">
      <slot></slot>
    </div>


    <button class="next" @click="next">NEXT</button>
    <button class="prev" @click="prev">PREV</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {

    }
  },
  methods: {
    next() {
      this.$emit('next');
    },
    prev() {
      this.$emit('prev');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carusel {
  height: 440px;
  background-color: #fff;
  margin: 0 auto;
  // overflow: hidden;
  position: relative;
  z-index: 0;

  &__inner {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .next,
  .prev {}
}
</style>
