<template>
  <div class="carusel__slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['mainIndex', 'index', 'direction'],
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.carusel__slide {
  position: absolute;
  transition: .5s;

  &--next {
    z-index: 5;
    top: 0;
    left: 70%;
    transform: translateX(-50%) scale(0.7);
  }

  &--prev {
    z-index: 5;
    top: 0;
    left: 30%;
    transform: translateX(-50%) scale(0.7);
  }

  &--main {
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translateX(-50%)
  }

  &--hidden {
    top: 0;
    left: 50%;
    transform: translateX(-50%) scale(0.1);
  }
}

// .left-enter-active {
//   animation: leftInAnimation .4s ease-in-out;
// }

// .left-leave-active {
//   animation: leftOutAnimation .4s ease-in-out;
// }

// @keyframes leftInAnimation {
//   from {
//     transform: translateX(100%)
//   }

//   to {
//     transform: translateX(0)
//   }
// }

// @keyframes leftOutAnimation {
//   from {
//     transform: translateX(0)
//   }

//   to {
//     transform: translateX(-100%)
//   }
// }

// .right-enter-active {
//   animation: rightInAnimation .4s ease-in-out;
// }

// .right-leave-active {
//   animation: rightOutAnimation .4s ease-in-out;
// }

// @keyframes rightInAnimation {
//   from {
//     transform: translateX(-100%)
//   }

//   to {
//     transform: translateX(0)
//   }
// }

// @keyframes rightOutAnimation {
//   from {
//     transform: translateX(0)
//   }

//   to {
//     transform: translateX(+100%)
//   }
// }
</style>