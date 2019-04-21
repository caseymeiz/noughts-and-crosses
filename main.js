define(['./app/gamecenter',
	'./ui/ui',
	'./ui/render'], 
	function (GameCenter, UI, Render) {
	
	var gameCenter = new GameCenter();

	var render = new Render();

	new UI(gameCenter, render);

});