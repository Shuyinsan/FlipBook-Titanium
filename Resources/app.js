
// Your Window
var win = Ti.UI.createWindow({
	backgroundColor:'#666666'
});
win.open();


// Add Flipbook Library
Ti.include('flipbook/flipbook.js');


// Create Flipbook Object
flipbook.create({
	pages:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'], // Add your Image Pages
	top:0,
	left:0,
	width:768,
	height:1004,
	attachTo:win // ATTENTION, USE this to add object to you window instead of 'win.add(blabla);'
});









