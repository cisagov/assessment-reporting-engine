import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from './Badge.vue'

describe('Badge', () => {
  it('should match its default snapshot', () => {
    const wrapper = shallowMount(Component, {
      slots: {
        default: 'Badge'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should match its variant primary, type light-border snapshot', () => {
    const wrapper = shallowMount(Component, {
      slots: {
        default: 'Badge'
      },
      props: {
        variant: 'primary',
        type: 'light-border'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})