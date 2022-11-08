import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from './Select.vue'

describe('Select', () => {
  it('should match its default snapshot', () => {
    const wrapper = shallowMount(Component, {
      props: {
        modelValue: 1,
        options: [
          { id: 1, value: 1, text: 'Option 1' },
          { id: 2, value: 2, text: 'Option 2' },
          { id: 3, value: 3, text: 'Option 3' }
        ]
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
