define(['./app/gamecenter',
	'./ui/ui',
	'./ui/render',
    './ui/minmax'], 
	function (GameCenter, UI, Render, MinMax) {
	

	new UI(new GameCenter(), new Render());

    new MinMax(new Render());
});