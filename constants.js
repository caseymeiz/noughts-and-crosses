define(function () {
    var constants = {
        nought : 'nought',
        cross : 'cross',
        lines : [
            // rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // diagonals 
            [0, 4, 8],
            [6, 4, 2]
        ],
        view : {
            board : 'board',
            game : 'game'
        },
        svg : {
            namespace : 'http://www.w3.org/2000/svg'
        },
        locationLookUp : [
            { x : 0, y : 0},
            { x : 1, y : 0},
            { x : 2, y : 0},
            { x : 0, y : 1},
            { x : 1, y : 1},
            { x : 2, y : 1},
            { x : 0, y : 2},
            { x : 1, y : 2},
            { x : 2, y : 2},

        ]
    }

    return constants;
});