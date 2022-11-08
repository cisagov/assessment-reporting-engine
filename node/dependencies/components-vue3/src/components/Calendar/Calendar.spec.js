import { describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from './Calendar.vue'

describe('Calendar', () => {
  it('should match its default snapshot', () => {
    const date = new Date(2021, 11, 19)
    vi.useFakeTimers()
    vi.setSystemTime(date)
    const wrapper = shallowMount(Component, {
      props: {
        modelValue: null
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
