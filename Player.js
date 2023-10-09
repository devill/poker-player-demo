const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return 'Demo player';
  }

  static betRequest(gameState, bet) {
    let game = new GameState(gameState);

    try {
      switch (game.me().name()) {
        case "Bluffy the Vampire":
          bet(Math.random() < 0.25 ? 10000 : 0);
          break;
        case "Winnie the Pot":
          bet(game.me().score() > 7 ? game.toRaise() : 0);
          break;
        case "Darth Raiser":
          bet(game.me().score() > 8 || Math.random() < 0.05 ? game.toRaise() : 0);
          break;
        default:
          bet(10000);
          break;
      }
    }catch (e) {
      console.log(e);
      console.log('Fold back case');
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

