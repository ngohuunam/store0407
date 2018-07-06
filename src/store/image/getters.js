// export const cardStyle = state => {
//   return `width: ${state.cWidth}px; height: ${state.cHeight}px`
// }

// export const op = state => {
//   const xs = state.xs
//   const space = xs ? Math.round(state.cWidth / 2.8) : 20
//   const activeClass = xs ? 'swiper-slide-active-xs' : 'swiper-slide-active'
//   const slideClass = xs ? 'swiper-slide-xs' : 'swiper-slide'
//   let options = {
//     slideClass: slideClass,
//     slideActiveClass: activeClass,
//     slidesPerView: 'auto',
//     spaceBetween: space,
//     centeredSlides: true,
//     speed: 1000,
//   }
//   if (!xs) {
//     const opNotXs = {
//       grabCursor: true,
//       mousewheel: true,
//       keyboard: {
//         enabled: true,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     }
//     options = { ...options, ...opNotXs }
//   }
//   return options
// }
