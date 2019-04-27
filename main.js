define(['./app/gamecenter',
	'./ui/ui',
	'./ui/render',
    './ui/minmax',
    './model/minmax',
    './model/board',
    './constants'], 
	function (GameCenter, UI, Render, MinMax, ModelMinMax, Board, constants) {
	

	new UI(new GameCenter(), new Render());


    new MinMax(new Render());
});