define(['../constants'], function (constants) {

    function Board () {
        //  0 1 2
        //  3 4 5
        //  6 7 8
        this.locations = [null, null, null, 
                          null, null, null,
                          null, null, null]
    };

    Board.prototype = {
        constructor : Board,

        get : function (location) {
            return this.locations[locations];
        },

        place : function (location, mark){
            if (this.locations[location] !== null) {
                return false;
            }
            this.locations[location] = mark;
            return true;
        },

        winLocations : function () {
            var wins = constants.lines.filter(function (line) {
                return sameMark(this.locations[line[0]], this.locations[line[1]], this.locations[line[2]]);
            }.bind(this));
            return wins[0];
        }

    };

    function sameMark (x, y, z) {
        if (x === null){
            return false;
        }
        return x === y && x === z;
    }

    return Board;
});