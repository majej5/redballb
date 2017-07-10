    // requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
    

function Ball(leftval, topval){
    this._left = leftval;
    this._top = topval;
	this.__defineGetter__("left", function(){
//			log("get left");
            return this._left;
        });
	this.__defineSetter__("left", function(val){
//			log("set left");
            this._left = val;
			animation.push(new RecordedMove(this._left, this._top));
        });
	this.__defineGetter__("top", function(){
//			log("get top");
            return this._top;
        });
	this.__defineSetter__("top", function(val){
//			log("set top");
            this._top = val;
			animation.push(new RecordedMove(this._left, this._top));
        });
}

var x = 50;
var y = 100;
var animation = new Array();
var redball = new Ball(x, y);
animate();

function RecordedMove(newx,newy) {
    this.x = newx;
    this.y = newy;
    //log("recorded move x" + this.x + ' total moves ' + animation.length);
}

function animate() {    
    requestAnimFrame( animate );
    draw();
}

function draw() {
	move = animation.shift();
	if(move){
		x = move.x;
		y = move.y;
	}

    if (document.getElementById("redball")){
     	document.getElementById("redball").style.position = 'absolute';
        document.getElementById("redball").style.left = x +'px';
        document.getElementById("redball").style.top = y +'px';
    }
    else{
        console.log('cannot find element with id of "redball"');
    }

}

window.onload=function(){
	 document.onkeydown= function(e){e = e || window.event;
if (e.keyCode == 37){redball.left = redball.left - 5;}
if (e.keyCode == 38){redball.top = redball.top - 5;}
if (e.keyCode == 39){redball.left = redball.left + 5;}
if (e.keyCode == 40){redball.top = redball.top + 5;}}};    
function up(){
{redball.top = redball.top - 5;}
}
function down(){
{redball.top = redball.top + 5;}
}
function left(){
{redball.left = redball.left - 5;}
}
function right(){
{redball.left = redball.left + 5;}
}
function northEast(){
redball.left = redball.left + 5 ; 
redball.top = redball.top - 5;
}
function northWest(){
redball.left = redball.left - 5 ; 
redball.top = redball.top - 5;
}
function southWest(){
redball.left = redball.left - 5 ; 
redball.top = redball.top + 5;
}
function southEast(){
redball.left = redball.left + 5 ; 
redball.top = redball.top + 5;
}
function sqr(){
for (var i= 0;i <10;i++){
redball.left = redball.left + 25 ;
}
for (var i = 0; i<10;i++){ 
redball.top = redball.top + 25;
}
for (var i = 0;i <10;i++){
redball.left = redball.left - 25 ;
}
for (var i = 0;i <10;i++){ 
redball.top = redball.top - 25;
}
}


function triangle(){
for (var i= 0;i <10;i++){
southWest();
}
for (var i = 0;i <20;i++){
right();
}
for (var i = 0; i<10;i++){ 
northWest();
}
}
function oct(){
for (var i= 0;i <10;i++){
right();
}
for (var i = 0;i <10;i++){
southEast();
}
for (var i = 0; i<10;i++){ 
down();
}
for (var i= 0;i <10;i++){
southWest();
}
for (var i = 0;i <10;i++){
left();
}
for (var i = 0; i<10;i++){ 
northWest();
}
for (var i = 0;i <10;i++){
up();
}
for (var i = 0; i<10;i++){ 
northEast();
 }
}
function circ(){
	var xOr= redball.left;
	var yOr= redball.top + 50;
for ( i = -90; i <= 270; i+=1){
	redball.top = yOr + 50 * Math.sin (i * Math.PI /180);
	redball.left = xOr + 50 * Math.cos (i * Math.PI /180);
}
}

function bounce(){
	for(i=0;i<5;i++){
		up()
		}
	for(i=0;i<5;i++){
		down();
		}
	}
	
var rightBorder = myCanvas.width - redball.width;

function playerBounds() {
    if (redball.x < 0) {
        redball.x = 0;
    }

    if (redball.x > rightBorder) {
        redball.x = rightBorder;
    }
}