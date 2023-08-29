// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import GameSavingLoader from '../modules/app';

test('test function gamesaving', (done) => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  GameSavingLoader.load().then((data) => {
    expect(data).toEqual(expected);
  });
  done();
});

test('test error', () => {
  expect.assertions(1);
  return GameSavingLoader.load().catch((e) => expect(e).toMatch('error'));
});
