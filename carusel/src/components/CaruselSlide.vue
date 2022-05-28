<template>
  <div class="carusel__slide"
    @mousedown.stop="MoveSliderStart" 
  >
    <div class="slide" 
      :style="[{
        background: `url(${img})`, 
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
      }]">
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
  props: ['mainIndex', 'mainClass', 'img'],
  data() {
    return {
    }
  },
  methods: {
    MoveSliderStart(e) {
      this.$emit('MoveSliderStart', e);
    },
  }
}
</script>

<style lang="scss">
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 55vh;
  --card-width: 25vw;
}

.carusel__slide {
  position: absolute;
  transition: .5s;
  width: var(--card-width);
  height: var(--card-height);
  &--img {
    border-radius: 6px;
  }

  &--next,
  &--prev {
    z-index: 5;
    transform: translateX(-50%) translateY(-50%) scale(0.7);
    opacity: .7;
    top: 50%;
  }

  &--next {
    left: 70%;
  }
  &--prev {
    left: 30%;
  }
  &--main {
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &--hidden {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(0.1);
  }

  .slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background: #191c29;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    font-family: cursive;
    cursor: pointer;
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
    top: 0;
    bottom: 0;
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