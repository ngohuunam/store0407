export const init = (state, rxdb) => {
  state.rxdb = rxdb
  if (state.rxdb) state.ready = true
}
