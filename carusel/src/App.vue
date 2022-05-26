<template>
  <div id="app" 
    @touchstart="touchStart" 
    >
    <app-carusel 
      @next="next" 
      @prev="prev"
      >
      <carusel-slide
        @MoveSliderStart="MoveSliderStart" 
        @MoveSlider="MoveSlider" 
        v-for="(slide, index) in slides" 
        :key="`${slide}+${index}`" 
        :mainClass="slideClass(index)" 
        :class="slideClass(index)" 
        :img="slide.img">
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
        { img: require('./assets/images/mashina.jpg') },
        { img: require('./assets/images/mashina_sportkar.jpg') },
        { img: require('./assets/images/mashina_staryj.jpg') },
        { img: require('./assets/images/nadpis.jpg') },
        { img: require('./assets/images/nochnoj.jpg') },
        { img: require('./assets/images/squad.jpg') },
      ],
      mainIndex: 0,
      screenX: null,
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
    MoveSliderStart(e){
      this.screenX = e?.screenX
    },
    MoveSlider(e){
      if (this.screenX === e?.screenX) return 
      if (this.screenX > e?.screenX) {
        this.next()
      } else {
        this.prev()
      }
      this.screenX = null
    },
    touchStart(e) {
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
}

*,
html {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background-color: #212534;
}

body {
  background-color: rgb(122, 122, 122);
}
</style>
