define(['./gameservice', 
        '../constants'], 
        function (GameService, constants) {
    
    function GameCenter () {
        this.newGame();
    }

    GameCenter.prototype = {
        constructor : GameCenter,

        newGame : function () {
            this.game = new GameService({mark : constants.nought}, {mark : constants.cross});
        },

        gameState : function () {
            return this.game.gameState();
        }
    }
    return GameCenter;
});