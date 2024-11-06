import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';

import TopNav from '../TopNav.vue';

describe('TopNav', () => {
  it('renders properly', () => {
    const wrapper = mount(TopNav, { props: {} });
    expect(wrapper.text()).toContain('About');
    expect(wrapper.text()).toContain('Structure');
    expect(wrapper.text()).toContain('Videos');
    expect(wrapper.text()).toContain('Games');
    expect(wrapper.text()).toContain('Recruitment');
  });
});
