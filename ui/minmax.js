define(['../constants',
        '../model/board',
        '../model/minmax'],
    function (constants, Board, ModelMinMax) {

    function MinMax (render, space) {
        this.render = render;
        this.treeContainer = document.getElementById('tree');
        this.treeSVG = document.createElementNS(constants.svg.namespace, 'svg');
        this.treeContainer.appendChild(this.treeSVG);
        this.rootState = [null, null, null, null, null, null, null, null, null];
        this.space = space;
        this.buildTree([]);

    };

    MinMax.prototype = {
        constructor : MinMax,

        buildTree : function (path) {
            this.treeContainer.removeChild(this.treeSVG);
            this.treeSVG = document.createElementNS(constants.svg.namespace, 'svg');
            this.treeSVG.setAttribute('viewBox', '0 0 2520 6000');

            var boardSize = constants.tree.boardSize;
            var halfBoard = boardSize/2;
            var explorHeight = boardSize/3;
            var levelHeight = constants.tree.verticalSpacing;
            var vertexHeight = explorHeight + boardSize;
            var offset = 100;

            var rootSVG = this.render.build(this.rootState);
            rootSVG.setAttribute('width', boardSize);
            rootSVG.setAttribute('height', boardSize);
            rootSVG.setAttribute('x', ((2520/2)-halfBoard));
            rootSVG.setAttribute('y', offset);

            var id = this.rootState.slice()
            id = id.join('-')
            var t = this.space.map[id]
            var button = this.render.makeButton(constants.cross);
            button.setAttribute('width', boardSize);
            button.setAttribute('height', boardSize);
            button.setAttribute('x', 2520/2 - halfBoard);
            button.setAttribute('y', offset+boardSize);
            button.addEventListener('click', this.exploreHandler(2520/2, [], 0, this.rootState, constants.nought, constants.cross));

            var score = this.render.makeScore(this.space.map[id].score);
            score.setAttribute('width', boardSize);
            score.setAttribute('height', boardSize);
            score.setAttribute('x', 2520/2 - halfBoard);
            score.setAttribute('y', offset-(boardSize*2/3));

            rootSVG.addEventListener('click', this.exploreHandler(2520/2, [], 0, this.rootState, constants.nought, constants.cross));

            this.treeSVG.appendChild(score);
            this.treeSVG.appendChild(rootSVG);
            this.treeSVG.appendChild(button);


            for (var i = 0; i < path.length; i++) {
                var vertex = path[i];


                var key = vertex.current.slice();
                key = key.join('-');

                var succ = this.space.map[key].successors;
                for (var j = 0; j < succ.length; j++){
                    var b = new Board(succ[j].board.locations);
                    var winMoves = b.winLocations();
                    var succSVG = this.render.build(succ[j].board.locations, winMoves);
                    succSVG.getElementsByClassName('location-'+succ[j].move)[0].classList.add('new');
                    succSVG.setAttribute('width', boardSize);
                    succSVG.setAttribute('height', boardSize);
                    var l = ((2520/succ.length)*j)+((2520/succ.length)/2) - halfBoard;
                    succSVG.setAttribute('x', l);
                    succSVG.setAttribute('y', (offset+(levelHeight*(i+1))));

                    var line = document.createElementNS(constants.svg.namespace, 'path');
                    line.setAttribute('d', 'M '+vertex.parentX+' '+(offset+vertexHeight+(levelHeight*i))+' L '+(l+halfBoard)+' '+(offset+levelHeight-explorHeight+(levelHeight*(i)))+' Z');
                    line.classList.add('edge');
                    line.classList.add('depth-'+i);

                    var id = succ[j].board.locations.slice()
                    id = id.join('-')
                    var button = this.render.makeButton(this.space.map[id].turn);
                    button.setAttribute('width', boardSize);
                    button.setAttribute('height', boardSize);
                    button.setAttribute('x', l);
                    button.setAttribute('y', ''+(offset+boardSize+(levelHeight*(i+1))));
                    button.addEventListener('click', this.exploreHandler(l+halfBoard, path, i, succ[j].board.locations, vertex.turn, vertex.nextTurn));

                    var score = this.render.makeScore(this.space.map[id].score);
                    score.setAttribute('width', boardSize);
                    score.setAttribute('height', boardSize);
                    score.setAttribute('x', l);
                    score.setAttribute('y', ''+(offset-(2*explorHeight)+(levelHeight*(i+1))));

                    this.treeSVG.appendChild(score)
                    this.treeSVG.appendChild(line);
                    this.treeSVG.appendChild(succSVG);

                    if (!winMoves) {
                        succSVG.addEventListener('click', this.exploreHandler(l+halfBoard, path, i, succ[j].board.locations, vertex.turn, vertex.nextTurn));
                        this.treeSVG.appendChild(button);
                    }
                }
            }

            this.treeContainer.appendChild(this.treeSVG);
        },

        exploreHandler : function (x, path, level, next, turn, nextTurn) {
            return function (event) {
                path = path.slice(0, level+1);
                path.push({
                    current : next,
                    turn : nextTurn,
                    nextTurn : turn,
                    parentX : x
                })
                this.buildTree(path);
            }.bind(this);
        }

    }

    return MinMax;
});