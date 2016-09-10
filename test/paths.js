
import test from 'ava'
import paths from '../src/paths'

test('exports an object', t => {
  t.is(typeof paths, 'object')
})

test('includes a twitter path', t => {
  t.is(typeof paths.twitter, 'string')
  t.regex(paths.twitter, /^M/)
})

test('includes a facebook path', t => {
  t.is(typeof paths.facebook, 'string')
  t.regex(paths.facebook, /^M/)
})

test('includes an instagram path', t => {
  t.is(typeof paths.instagram, 'string')
  t.regex(paths.instagram, /^M/)
})

test('includes a github path', t => {
  t.is(typeof paths.github, 'string')
  t.regex(paths.github, /^M/)
})

test('includes a vine path', t => {
  t.is(typeof paths.vine, 'string')
  t.regex(paths.vine, /^M/)
})

test('includes a snapchat path', t => {
  t.is(typeof paths.snapchat, 'string')
  t.regex(paths.snapchat, /^M/)
})

test('includes a linkedin path', t => {
  t.is(typeof paths.linkedin, 'string')
  t.regex(paths.linkedin, /^M/)
})

test('includes a dribbble path', t => {
  t.is(typeof paths.dribbble, 'string')
  t.regex(paths.dribbble, /^M/)
})

test('includes a flickr path', t => {
  t.is(typeof paths.flickr, 'string')
  t.regex(paths.flickr, /^M/)
})

test('includes a tumblr path', t => {
  t.is(typeof paths.tumblr, 'string')
  t.regex(paths.tumblr, /^M/)
})

test('includes a behance path', t => {
  t.is(typeof paths.behance, 'string')
  t.regex(paths.behance, /^M/)
})

test('includes a soundcloud path', t => {
  t.is(typeof paths.soundcloud, 'string')
  t.regex(paths.soundcloud, /^M/)
})

