<template>
  <div class="carusel">
    <slot></slot>
    <button class="carusel__next" @click="next"><</button>
    <button class="carusel__prev" @click="prev">></button>
  </div>
</template>

<script>
export default {
  name: 'AppCarusel',
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
  max-width: 700px;
  max-height: 525px;
  height: 700px;
  background-color: #212534;
  margin: 0 auto;
  position: relative;
  z-index: 0;
  button{
    transition: box-shadow 0.3s linear;
  }
  &__inner {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  &__next,
  &__prev {
    position: absolute;
    border: none;
    background-color: transparent;
    background: transparent;
    
  }
  &__next{
    left: 0;
    top: 0;
    bottom: 0;
    width: 10%;
    box-shadow: 60px -1px 41px -52px rgba(78, 0, 194, 0.5) inset;
    &:hover{
      box-shadow: 80px -1px 41px -52px rgba(78, 0, 194, 1) inset;
    }
  }
  &__prev{
    right: 0;
    top: 0;
    bottom: 0;
    width: 10%;
    box-shadow: -60px -1px 41px -52px rgba(12, 198, 250, 0.5) inset;
    &:hover{
      box-shadow: -71px -1px 41px -52px rgba(12, 198, 250, 1) inset;
    }
  }
}
</style>
