<template>
  <div class="carusel__slide">
    <div class="slide">
        <template v-if="mainClass === 'carusel__slide--main'">
          <div class="slide__border"></div>
          <div class="slide__shadow"></div>
        </template>
      <slot></slot>
    </div>
    </div>
    
</template>

<script>
export default {
  props: ['mainIndex', 'mainClass'],
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 440px;
  --card-width: 200px;
}

.carusel__slide {
  position: absolute;
  transition: .5s;

  &--img {
    border-radius: 6px;
  }

  &--next {
    z-index: 5;
    top: 40px;
    left: 70%;
    transform: translateX(-50%) scale(0.7);
  }

  &--prev {
    z-index: 5;
    top: 40px;
    left: 30%;
    transform: translateX(-50%) scale(0.7);
  }

  &--main {
    z-index: 10;
    top: 40px;
    left: 50%;
    transform: translateX(-50%)
  }

  &--hidden {
    top: 0;
    left: 50%;
    transform: translateX(-50%) scale(0.1);
  }

  .slide {
    background: #191c29;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    cursor: pointer;
    font-family: cursive;
  }

  .slide__border {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(var(--rotate), #0cc6fa, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
  }

  .slide__shadow {
    position: absolute;
    content: "";
    top: calc(var(--card-height) / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--card-height) / 6));
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }

    100% {
      --rotate: 360deg;
    }
  }
}
</style>