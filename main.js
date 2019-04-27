define(['./app/gamecenter',
	'./ui/ui',
	'./ui/render',
    './ui/minmax',
    './model/minmax',
    './model/board',
    './constants'], 
	function (GameCenter, UI, Render, MinMax, ModelMinMax, Board, constants) {
	
    var space = new ModelMinMax(Board, constants.nought, constants.cross);

	new UI(new GameCenter(), new Render(), space);

    new MinMax(new Render(), space);
});