define(['./gameservice', 
        '../constants'], 
        function (GameService, constants) {
    
    function GameCenter () {
        this.newGame();
    }

    GameCenter.prototype = {
        constructor : GameCenter,

        newGame : function () {
            this.game = new GameService({mark : constants.cross}, {mark : constants.nought});
        },

        gameState : function () {
            return this.game.gameState();
        }
    }
    return GameCenter;
});