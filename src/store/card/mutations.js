// import Vue from 'vue'
const loading = require('@/assets/loading.jpg')

export const fetchList = (state, rxSetListDoc) => {
  state.list = rxSetListDoc
}

export const createStyle = state => {
  const width = window.innerWidth
  const xs = width < 769
  const lg = width > 768 && width < 1025
  const maxWidth = 400
  const ratioW = lg ? 0.29 : 0.43
  const cWidth = xs || lg ? width * ratioW : maxWidth
  const pad = cWidth * 0.05
  state.op = op(xs, cWidth)
  state.imgStyle = `width: ${cWidth}px`
  state.cardStyle = `width: ${cWidth}px; padding:${pad}px; margin-bottom:${pad}px`
}

export const init = (state, rxdb) => {
  if (rxdb) {
    state.rxItem = rxdb.item
    state.rxImage = rxdb.image
  }
  if (state.list.value && state.list.value.length) {
    const list = state.list.value
    list.map(name => {
      state.cards.push({ name: name, base64: loading, picked: false, info: {} })
    })
    state.ready = true
  }
}

export const pushImgObj = (state, imgObj) => {
  const index = state.cards.findIndex(_cardObj => _cardObj.name === imgObj.name)
  if (index > -1) {
    state.cards[index].base64 = imgObj.base64
  } else state.cards.push(imgObj)
}

export const pushInfoObj = (state, infoObj) => {
  const index = state.cards.findIndex(_cardObj => _cardObj.name === infoObj.name)
  if (index > -1) {
    state.cards[index].info = infoObj.info
  } else state.cards.push(infoObj)
}

export const spliceCard = (state, name) => {
  const index = state.cards.findIndex(_cardObj => _cardObj.name === name)
  if (index > -1) state.cards.splice(index, 1)
}

export const subsImg = (state, img$) => {
  state.img$ = img$
}

export const subsItem = (state, item$) => {
  state.item$ = item$
}

const op = xs => {
  const activeClass = xs ? 'swiper-slide-active-xs' : 'swiper-slide-active'
  const slideClass = xs ? 'swiper-slide-xs' : 'swiper-slide'
  let options = {
    slideClass: slideClass,
    slideActiveClass: activeClass,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    speed: 1000,
  }
  if (!xs) {
    const opNotXs = {
      // grabCursor: true,
      mousewheel: true,
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
