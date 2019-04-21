define(['../constants'],
    function (constants) {

    function UI (gamecenter, render) {
        this.init(gamecenter);

        var resetButton = document.getElementById('reset');
        resetButton.addEventListener('click', this.resetHandler(gamecenter));
    };

    UI.prototype = {
        constructor : UI,

        init : function (gamecenter) {
            var boardContainer = document.getElementById(constants.view.board);
            this.boardSVG = document.createElementNS(constants.svg.namespace, 'svg');
            this.boardSVG.setAttribute('viewBox', '0 0 3 3');

            boardContainer.appendChild(this.boardSVG);

            var v1 = document.createElementNS(constants.svg.namespace, 'path');
            v1.setAttribute('d', 'M 0 1 L 3 1 Z');
            v1.setAttribute('class', 'board-line');
            var v2 = document.createElementNS(constants.svg.namespace, 'path');
            v2.setAttribute('d', 'M 0 2 L 3 2 Z');
            v2.setAttribute('class', 'board-line');
            var h1 = document.createElementNS(constants.svg.namespace, 'path');
            h1.setAttribute('d', 'M 1 0 L 1 3 Z');
            h1.setAttribute('class', 'board-line');
            var h2 = document.createElementNS(constants.svg.namespace, 'path');
            h2.setAttribute('d', 'M 2 0 L 2 3 Z');
            h2.setAttribute('class', 'board-line');


            var panels = [];
            for (var i = 0; i < 9; i++) {
                panels[i] = document.createElementNS(constants.svg.namespace, 'rect');
                panels[i].setAttribute('class', 'panel-'+i);
                panels[i].setAttribute('width', '1');
                panels[i].setAttribute('height', '1');
                panels[i].setAttribute('x', constants.locationLookUp[i].x);
                panels[i].setAttribute('y', constants.locationLookUp[i].y);
                panels[i].addEventListener('click', this.moveHandler(gamecenter, i));

                this.boardSVG.appendChild(panels[i]);
            }

            this.boardSVG.appendChild(v1);
            this.boardSVG.appendChild(v2);
            this.boardSVG.appendChild(h1);
            this.boardSVG.appendChild(h2);
        },

        moveHandler : function (gamecenter, location) {
            return function (event) {
                var writeNought = gamecenter.game.makeMove(location, constants.nought);
                var writeCross = gamecenter.game.makeMove(location, constants.cross);
                var mark = null;
                if(writeCross || writeNought){
                    if (writeCross) {
                        mark = this.makeCross();
                        mark.classList.add(constants.cross);
                    } else {
                        mark = this.makeNought();
                        mark.classList.add(constants.nought);
                    }

                    mark.setAttribute('x', constants.locationLookUp[location].x);
                    mark.setAttribute('y', constants.locationLookUp[location].y);
                    mark.setAttribute('width', '1');
                    mark.setAttribute('height', '1');
                    mark.classList.add('mark');
                    mark.classList.add('location-'+location)
                    this.boardSVG.appendChild(mark);
                }

                if (gamecenter.game.isGameOver()) {
                    var winLocations = gamecenter.game.winningMoves
                    if(winLocations){
                        for (var i = 0; i < 3; i++) {
                            var winMarks = document.getElementsByClassName('location-'+winLocations[i])
                            winMarks[0].classList.add('win');

                        }
                    }
                }
            }.bind(this);
        },

        resetHandler : function (gamecenter) {
            return function (event) {
                gamecenter.newGame();
                var marks = document.getElementsByClassName('mark');
                while(marks[0]){
                    marks[0].parentNode.removeChild(marks[0]);
                }
            };
        },

        makeNought : function () {
            var nought = document.createElementNS(constants.svg.namespace, 'svg');
            var c = document.createElementNS(constants.svg.namespace, 'circle');
            nought.setAttribute('viewBox', '0 0 10 10');
            nought.setAttribute('id', constants.nought);
            nought.appendChild(c);
            c.setAttribute('cx', '5');
            c.setAttribute('cy', '5');
            c.setAttribute('r', '4');
            c.setAttribute('fill', 'none');
            return nought;
        },

        makeCross : function () {
            var cross = document.createElementNS(constants.svg.namespace, 'svg');
            var p1 = document.createElementNS(constants.svg.namespace, 'path');
            var p2 = document.createElementNS(constants.svg.namespace, 'path');
            cross.setAttribute('viewBox', '0 0 10 10');
            cross.setAttribute('id', constants.cross);
            cross.appendChild(p1);
            cross.appendChild(p2);
            p1.setAttribute('d', 'M 1 1 L 9 9 Z');
            p2.setAttribute('d', 'M 1 9 L 9 1 Z');
            return cross;
        }
    };

    return UI;
});
