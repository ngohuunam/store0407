import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import slider from '@/components/slider.vue'

describe('slider.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(slider, {
      propsData: { msg },
    })
    expect(wrapper.text()).to.include(msg)
  })
})
