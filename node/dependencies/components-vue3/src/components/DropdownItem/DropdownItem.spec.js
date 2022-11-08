import { describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from './DropdownItem.vue'

describe('DropdownItem', () => {
  it('should match its default snapshot', () => {
    const wrapper = shallowMount(Component, {
      global: {
        provide: {
          emitter: vi.fn()
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
