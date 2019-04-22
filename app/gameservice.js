define(['../model/board'],function (Board) {
    function GameService (player1, player2, state) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
        this.board = new Board(state);
        this.winningMoves = null;
        this.moves = 0;
    };

    GameService.prototype = {
        constructor : GameService,

        gameState : function () {
            return this.board.locations;
        },

        makeMove : function (location, mark) {
            var succesful = !this.winningMoves && mark === this.currentPlayer.mark && this.board.place(location, mark);
            if (succesful) {
                this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
                this.winningMoves = this.board.winLocations();
                this.moves += 1;
            }
            return succesful;
        },

        isGameOver : function () {
            return this.moves === 9 || !!this.winningMoves
        }
    };

    return GameService;
});