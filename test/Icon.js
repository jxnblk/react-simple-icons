
import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Icon from '../src/Icon'
import paths from '../src/paths'

test('renders', t => {
  const wrapper = shallow(<Icon />)
  const svg = wrapper.find('svg')
  t.true(svg.is('svg'))
})

test('has svg attributes', t => {
  const wrapper = shallow(<Icon />)
  const svg = wrapper.find('svg')
  t.is(svg.props().viewBox, '0 0 16 16')
  t.is(svg.props().xmlns, 'http://www.w3.org/2000/svg')
  t.is(svg.props().width, 16)
  t.is(svg.props().height, 16)
})

test('has a path element', t => {
  const wrapper = shallow(<Icon />)
  const path = wrapper.find('path')
  t.truthy(path)
})

test('path has a d attribute', t => {
  const wrapper = shallow(<Icon />)
  const path = wrapper.find('path')
  t.is(typeof path.props().d, 'string')
})

test('defaults to twitter icon', t => {
  const wrapper = shallow(<Icon />)
  const d = wrapper.find('path').props().d
  t.is(d, paths.twitter)
})

test('name prop sets icon', t => {
  const wrapper = shallow(<Icon name='facebook' />)
  const d = wrapper.find('path').props().d
  t.is(d, paths.facebook)
})

