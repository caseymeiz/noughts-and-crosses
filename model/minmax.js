define(function () {
    function MinMax (Board, startMrak, secondMark) {
        this.states = {};

        this.rootNode = {
            board : new Board(),
            score : null,
            turn : secondMark,
            nextTrun : startMrak,
            successors : null,
            depth : -1,
            move : -1
        }
        var id = this.rootNode.board.locations.join('-');

        this.map = {}
        this.map[id] = this.rootNode

        this.rootNode.successors = buildTree(this.rootNode, Board, secondMark, 0, this.map);


    };

    function buildTree (root, Board, maxMark, depth, map) {
        var winMarks = root.board.winLocations();
        if (winMarks) {
            if (root.board.locations[winMarks[0]] === maxMark) {
                root.score = 10;
            } else {
                root.score = -10;
            }
            return [];
        }
        var successors = getSuccesors(root, Board);

        for (var i = 0; i < successors.length; i++) {
            successors[i].successors = buildTree(successors[i], Board, maxMark, depth + 1, map)
            map[successors[i].board.locations.join('-')] = successors[i]
        }

        var scores = successors.map(s => s.score)

        if (scores.length > 0) {
            if (root.turn === maxMark) {
                root.score = Math.max.apply(Math, scores)
            } else {
                root.score = Math.min.apply(Math, scores)
            }
            root.bestMove = scores.indexOf(root.score)
        }

        return successors;
    }

    
    function getSuccesors (root, Board) {
        var succ = [];
        for (var i = 0; i < 9; i++) {
            if (root.board.locations[i] === null){
                var successor = root.board.locations.slice();
                successor[i] = root.turn;
                succ.push({
                    board : new Board(successor),
                    move : i,
                    score : 0,
                    turn : root.nextTrun,
                    nextTrun : root.turn,
                    depth : root.depth + 1
                });
            }
        }
        return succ;
    }


    MinMax.prototype = {
        constructor : MinMax,
    };


    return MinMax;
});