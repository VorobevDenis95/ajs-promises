// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import GameSavingLoader from '../modules/app';

test('test function famesaving', () => {
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

  GameSavingLoader.load().then((saving) => expect(saving)).toEqual(expected);
});
