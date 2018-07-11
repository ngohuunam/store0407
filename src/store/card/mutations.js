// import Vue from 'vue'
const loading = require('@/assets/loading.jpg')

export const fetchList = (state, rxSetListDoc) => {
  state.list = rxSetListDoc
}

export const createStyle = state => {
  state.op = op(false)
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
