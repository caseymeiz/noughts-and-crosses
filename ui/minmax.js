define(['../constants'],
    function (constants) {

    function MinMax (render) {
        this.render = render;
        this.treeContainer = document.getElementById('tree');
        this.treeSVG = document.createElementNS(constants.svg.namespace, 'svg');
        this.treeContainer.appendChild(this.treeSVG);
        this.rootState = [null, null, null, null, null, null, null, null, null];
        this.buildTree([]);
    };

    MinMax.prototype = {
        constructor : MinMax,

        buildTree : function (path) {
            this.treeContainer.removeChild(this.treeSVG);
            this.treeSVG = document.createElementNS(constants.svg.namespace, 'svg');
            this.treeSVG.setAttribute('viewBox', '0 0 2520 4000');

            var boardSize = 200;
            var halfBoard = boardSize/2;
            var explorHeight = boardSize*(70/150);
            var levelHeight = 420;
            var vertexHeight = explorHeight + boardSize;

            var rootSVG = this.render.build(this.rootState);
            rootSVG.setAttribute('width', boardSize);
            rootSVG.setAttribute('height', boardSize);
            rootSVG.setAttribute('x', ''+((2520/2)-halfBoard));
            rootSVG.setAttribute('y', '20');
            var button = this.render.makeButton();
            button.setAttribute('width', boardSize);
            button.setAttribute('height', boardSize);
            button.setAttribute('x', ''+2520/2 - halfBoard);
            button.setAttribute('y', ''+(20+boardSize));
            button.addEventListener('click', this.exploreHandler(2520/2, [], 0, this.rootState, constants.nought, constants.cross));
            this.treeSVG.appendChild(button);

            for (var i = 0; i < path.length; i++) {
                var vertex = path[i];

                var succ = this.succesors(vertex.current, vertex.turn);
                for (var j = 0; j < succ.length; j++){
                    var succSVG = this.render.build(succ[j].board);
                    succSVG.getElementsByClassName('location-'+succ[j].move)[0].classList.add('new');
                    succSVG.setAttribute('width', boardSize);
                    succSVG.setAttribute('height', boardSize);
                    var l = ((2520/succ.length)*j)+((2520/succ.length)/2) - halfBoard;
                    succSVG.setAttribute('x', l);
                    succSVG.setAttribute('y', (20+(levelHeight*(i+1))));
                    var line = document.createElementNS(constants.svg.namespace, 'path');
                    line.setAttribute('d', 'M '+vertex.parentX+' '+(20+vertexHeight+(levelHeight*i))+' L '+(l+halfBoard)+' '+(20+levelHeight+(levelHeight*(i)))+' Z');
                    line.classList.add('edge');
                    line.classList.add('depth-'+i);
                    var button = this.render.makeButton();
                    button.setAttribute('width', boardSize);
                    button.setAttribute('height', boardSize);
                    button.setAttribute('x', l);
                    button.setAttribute('y', ''+(20+boardSize+(levelHeight*(i+1))));
                    button.addEventListener('click', this.exploreHandler(l+halfBoard, path, i, succ[j].board, vertex.turn, vertex.nextTurn));
                    this.treeSVG.appendChild(line);
                    this.treeSVG.appendChild(succSVG);
                    this.treeSVG.appendChild(button);
                }
            }

            this.treeSVG.appendChild(rootSVG);
            this.treeContainer.appendChild(this.treeSVG);
        },

        succesors : function (state, currentMark) {
            var succ = [];
            for (var i = 0; i < 9; i++) {
                if (state[i] === null){
                    var successor = state.slice();
                    successor[i] = currentMark;
                    succ.push({
                        board : successor,
                        move : i
                    });
                }
            }
            return succ;
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