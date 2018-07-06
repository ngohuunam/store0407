// import Vue from 'vue'
const loading = require('@/assets/loading.jpg')

export const destroy = state => {
  console.log('destroy image')
  state.img$.unsubcribe()
  state.imgs = []
  state.rxImgs = null
  state.list = []
  state.ready = false
}

export const pushImgObj = (state, imgObj) => {
  const index = state.imgs.findIndex(_imgObj => _imgObj.name === imgObj.name)
  if (index > -1) {
    state.imgs[index].data = imgObj.data
  } else state.imgs.push(imgObj)
}

export const spliceImgObj = (state, name) => {
  const index = state.imgs.findIndex(_imgObj => _imgObj.name === name)
  if (index > -1) state.imgs.splice(index, 1)
}

export const subscribe = (state, img$) => {
  state.img$ = img$
}

export const init = (state, rxCol) => {
  state.rxImgs = rxCol
  const width = window.innerWidth
  state.xs = width < 576
  state.maxWidth = 400
  state.ratioW = 0.5
  state.ratioH = 4 / 3
  state.cWidth = state.xs ? width * state.ratioW : state.maxWidth
  state.cHeight = state.cWidth * state.ratioH
  state.op = op(state)
  state.cardStyle = `width: ${state.cWidth}px; height: ${state.cHeight}px`
  if (state.list.value && state.list.value.length) {
    const list = state.list.value
    list.forEach(name => {
      state.imgs.push({ name: name, data: loading })
    })
  }
  state.ready = true
}

export const fecthImageList = (state, rxSetListDoc) => {
  state.list = rxSetListDoc
}

const op = state => {
  const xs = state.xs
  const space = xs ? Math.round(state.cWidth / 2.8) : 20
  const activeClass = xs ? 'swiper-slide-active-xs' : 'swiper-slide-active'
  const slideClass = xs ? 'swiper-slide-xs' : 'swiper-slide'
  let options = {
    // loop: true,
    // loopAdditionalSlides: 20,
    // loopedSlides: 20,
    // freeMode: true,
    // initialSlide: 1,
    slideClass: slideClass,
    slideActiveClass: activeClass,
    slidesPerView: 'auto',
    spaceBetween: space,
    centeredSlides: true,
    speed: 1000,
  }
  if (!xs) {
    const opNotXs = {
      // grabCursor: true,
      mousewheel: true,
      // hashNavigation: true,
      // hashNavigation: {
      //   watchState: true,
      // },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
    options = { ...options, ...opNotXs }
  }
  return options
}
