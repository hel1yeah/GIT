<template>
  <div id="app" @touchstart="touchStart">
    <app-carusel @next="next" @prev="prev">
      <carusel-slide v-for="(slide, index) in slides" :key="`${slide}+${index}`" :index="index" :mainIndex="mainIndex"
        :mainClass="slideClass(index)" :class="slideClass(index)">

        <img :src="slide" :alt="slide" class="carusel__slide--img">
      </carusel-slide>
    </app-carusel>
  </div>
</template>

<script>
import AppCarusel from './components/AppCarusel.vue'
import CaruselSlide from './components/CaruselSlide.vue'

export default {
  name: 'App',
  components: {
    AppCarusel,
    CaruselSlide
  },
  data() {
    return {
      slides: [
        'https://picsum.photos/id/237/200/440',
        'https://picsum.photos/id/238/200/440',
        'https://picsum.photos/id/239/200/440',
        'https://picsum.photos/id/240/200/440',
        'https://picsum.photos/id/241/200/440',
        'https://picsum.photos/id/244/200/440',
      ],
      mainIndex: 0,
    }
  },
  computed: {
    slidesLength() {
      return this.slides.length
    },
    nextIndex() {
      return (this.slidesLength === (this.mainIndex + 1)) ? 0 : this.mainIndex + 1
    },
    prevIndex() {
      return (this.mainIndex === 0) ? this.slidesLength - 1 : this.mainIndex - 1
    }
  },
  methods: {
    next() {
      this.direction = 'left'
      if (this.mainIndex >= this.slidesLength - 1) {
        this.mainIndex = 0
      } else {
        this.mainIndex++
      }
    },
    prev() {
      this.direction = 'right'
      if (this.mainIndex <= 0) {
        this.mainIndex = this.slidesLength - 1
      } else {
        this.mainIndex--
      }
    },
    isMainSlide(index) {
      return this.mainIndex === index
    },
    isNextSlide(index) {
      return this.nextIndex === index
    },
    isPrevSlide(index) {
      return this.prevIndex === index
    },
    slideClass(index) {
      if (this.isMainSlide(index)) {
        return 'carusel__slide--main'
      } else if (this.isNextSlide(index)) {
        return 'carusel__slide--next'
      } else if (this.isPrevSlide(index)) {
        return 'carusel__slide--prev'
      }
      return 'carusel__slide--hidden'
    },
    touchStart(e) {
      console.log(e);
      if (e.changedTouches.length !== 1) {
        return
      }
      const posXStart = e.changedTouches[0].clientX;
      addEventListener('touchend', (touchEvent) => this.touchEnd(touchEvent, posXStart), { once: true })
    },
    touchEnd(e, posXStart) {
      if (e.changedTouches.length !== 1) {
        return
      }
      const posXEnd = e.changedTouches[0].clientX
      if (posXStart < posXEnd) {
        this.prev()
      } else if (posXStart > posXEnd) {
        this.next()
      }
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
}

body {
  background-color: rgb(122, 122, 122);
}
</style>
