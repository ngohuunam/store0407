export const block = state => blockName => {
  const block = state.blocks.find(block => block.name === blockName)
  return block
}
