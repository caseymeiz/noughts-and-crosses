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
        locationMap : {
            0 : { x : 0, y : 0},
            1 : { x : 1, y : 0},
            2 : { x : 2, y : 0},
            3 : { x : 0, y : 1},
            4 : { x : 1, y : 1},
            5 : { x : 2, y : 1},
            6 : { x : 0, y : 2},
            7 : { x : 1, y : 2},
            8 : { x : 2, y : 2},
        },
        reflextionMaps :{
            rotation : {
                0 : 2,
                1 : 5,
                2 : 8,
                3 : 1,
                4 : 4,
                5 : 7,
                6 : 1,
                7 : 3,
                8 : 6
            },
            vertical : {
                0 : 2,
                1 : 1,
                2 : 0,
                3 : 5,
                4 : 4,
                5 : 3,
                6 : 8,
                7 : 7,
                8 : 6
            }
        },
        tree : {
            viewBox : {
                xmin : 0,
                ymin : 0,
                width : 2520,
                height : 400
            },
            boardSize : 210,
            exploreSpace : 70,
            verticalSpacing : 200
        }
    }

    return constants;
});





