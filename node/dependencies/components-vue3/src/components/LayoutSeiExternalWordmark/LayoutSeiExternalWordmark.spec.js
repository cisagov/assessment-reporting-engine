import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Component from './LayoutSeiExternalWordmark.vue'

describe('LayoutSeiExternalWordmark', () => {
  it('should match its default snapshot', () => {
    const wrapper = shallowMount(Component, {})
    expect(wrapper.element).toMatchSnapshot()
  })
})
