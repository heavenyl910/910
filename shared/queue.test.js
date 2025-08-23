const test = require('node:test');
const assert = require('node:assert');
const { addTrack, nextTrack, queues } = require('./queue');

test('addTrack initializes queue and now', () => {
  queues.clear();
  const state = addTrack(1, { title: 'Song' });
  assert.equal(state.now.title, 'Song');
  assert.equal(state.next.length, 0);
});

test('nextTrack shifts queue', () => {
  queues.clear();
  addTrack(1, { title: 'First' });
  addTrack(1, { title: 'Second' });
  const n = nextTrack(1);
  assert.equal(n.title, 'Second');
});
