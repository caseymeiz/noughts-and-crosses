define(['../constants'],function (constants) {
    function Render () {
    };

    Render.prototype = {
        constructor : Render,

        build : function (state, winMarks) {
            var board = this.makeBoard();
            this.populate(board, state, winMarks);
            return board;
        },

        populate : function(board, state, winMarks) {
            for (var i = 0; i < 9; i++) {
                var mark = null;
                if (state[i] === constants.nought) {
                    mark = this.makeNought();
                } else if (state[i] === constants.cross) {
                    mark = this.makeCross();
                }
                if (winMarks && winMarks.includes(i)) {
                    mark.classList.add('win');
                }
                if (mark) {
                    mark.setAttribute('width', '1');
                    mark.setAttribute('height', '1');
                    mark.classList.add('location-'+i);
                    mark.setAttribute('x', constants.locationMap[i].x);
                    mark.setAttribute('y', constants.locationMap[i].y);
                    board.appendChild(mark);
                }
            }
        },

        makeBoard : function() {
            var boardSVG = document.createElementNS(constants.svg.namespace, 'svg');
            boardSVG.setAttribute('viewBox', '0 0 3 3');

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

            boardSVG.appendChild(v1);
            boardSVG.appendChild(v2);
            boardSVG.appendChild(h1);
            boardSVG.appendChild(h2);
            return boardSVG;
        },

        makeNought : function () {
            var nought = document.createElementNS(constants.svg.namespace, 'svg');
            var c = document.createElementNS(constants.svg.namespace, 'circle');
            nought.setAttribute('viewBox', '0 0 10 10');
            nought.appendChild(c);
            nought.classList.add('mark');
            nought.classList.add('nought');
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
            cross.classList.add('mark');
            cross.classList.add('cross');
            cross.appendChild(p1);
            cross.appendChild(p2);
            p1.setAttribute('d', 'M 1 1 L 9 9 Z');
            p2.setAttribute('d', 'M 1 9 L 9 1 Z');
            return cross;
        },

        makeButton : function (extra) {
            var btn = document.createElementNS(constants.svg.namespace, 'rect');
            var text = document.createElementNS(constants.svg.namespace, 'text');
            var container = document.createElementNS(constants.svg.namespace, 'svg');

            container.setAttribute('viewBox', '0 0 12 12');
            container.appendChild(btn);
            container.appendChild(text);
            container.classList.add('explore');

            btn.setAttribute('x', '1.0');
            btn.setAttribute('y', '1.0');
            btn.setAttribute('width', '10');
            btn.setAttribute('height', '4');

            text.setAttribute('x', '6');
            text.setAttribute('y', '3');
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('alignment-baseline', 'center');


            text.textContent = 'Explore '+extra;

            return container;
        }

    };

    return Render;
});