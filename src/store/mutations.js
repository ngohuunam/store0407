export const init = (state, rxdb) => {
  state.xs = window.innerWidth < 576
  state.rxdb = rxdb
  if (state.rxdb) state.ready = true
}
