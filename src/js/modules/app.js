// eslint-disable-next-line import/extensions
import GameSaving from './gamesaving';
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  static load() {
    return read().then((responce) => json(responce)
      .then((data) => {
        const { id, created, userInfo } = JSON.parse(data);
        return new GameSaving(id, created, userInfo);
      }), ((error) => {
      throw error;
    }));
  }
}
