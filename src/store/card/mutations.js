// import Vue from 'vue'
const loading = require('@/assets/loading.jpg')

export const fetchList = (state, rxSetListDoc) => {
  state.list = rxSetListDoc
}

export const createStyle = state => {
  const vw = window.innerWidth
  const vh = window.innerHeight
  state.ratio = vh / vw
  // state.ip4 = vw < 321 && vh < 481
  // const rvh = vh/2
  // const ip5 = vw < 321 && vh > 480 && vh < 568
  // const ip6 = vw === 375 && vh === 667
  // const ip6p = vw === 414 && vh === 736
  // const ipx = vw === 375 && vh === 812
  // const ipad = vw === 768 && vh === 1024
  // const ipadp = vw === 1024 && vh === 1366
  // const xxs = width < 321
  const xs = vw < 768
  const md = vw > 767 && vw < 1024
  const lg = vw > 1220
  const maxWidth = 400
  // const ratioW = lg ? 0.47 : 0.47
  const ratioW = md ? 0.8 : 0.94
  const scale = 1.5
  const CARD_WIDTH = xs || md ? vw * ratioW : maxWidth
  const CARD_WIDTH_REAL = CARD_WIDTH / scale
  // const CARD_HEIGHT = CARD_WIDTH_REAL * ratioH
  const PAD = CARD_WIDTH * 0.015
  const IMG_WIDTH = CARD_WIDTH_REAL * ratioW - PAD
  const IMG_HEIGHT = (IMG_WIDTH * 4) / 3
  state.op = op(lg)
  state.imgStyle = `width: ${IMG_WIDTH}px; height: ${IMG_HEIGHT}px; margin: 0px ${PAD}px;`
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
  const index = state.cards.findIndex(card => card.name === imgObj.name)
  if (index > -1) {
    state.cards[index].base64 = imgObj.base64
  } else state.cards.push(imgObj)
}

export const pushInfoObj = (state, infoObj) => {
  const index = state.cards.findIndex(card => card.name === infoObj.name)
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

const op = lg => {
  const activeClass = `swiper-slide-active${lg ? '' : '-xs'}`
  const slideClass = `swiper-slide${lg ? '' : '-xs'}`
  let options = {
    slideClass: slideClass,
    slideActiveClass: activeClass,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    speed: 1000,
  }
  if (lg) {
    const opNotXs = {
      // grabCursor: true,
      // slidesOffsetBefore: 10,
      // slidesOffsetAfter: 10,
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
      loop: true,
      // loopFillGroupWithBlank: true,
      centeredSlides: false,
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
