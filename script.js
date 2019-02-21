var heads ={
    down1 : document.getElementById("down1"),
    down2 : document.getElementById("down2"),
    lDown1 : document.getElementById("lDown1"),
    lDown2 : document.getElementById("lDown2"),
    lUp1 : document.getElementById("lUp1"),
    lUp2 : document.getElementById("lUp2"),
    left1 : document.getElementById("left1"),
    left2 : document.getElementById("left2"),
    rDown1 : document.getElementById("rDown1"),
    rDown2 : document.getElementById("rDown2"),
    rUp1 : document.getElementById("rUp1"),
    rUp2 : document.getElementById("rUp2"),
    up1 : document.getElementById("up1"),
    up2 : document.getElementById("up2"),
    right1 : document.getElementById("right1"),
    right2 : document.getElementById("right2"),
    centerHead : document.getElementById("centerHead"),
}
window.onscroll = function () {
    var position, img, layer;
    position = $(window).scrollTop(); 
    triggerTable = document.getElementById("triggerTable");
    layer0 = document.getElementById("layer0");
    layer1 = document.getElementById("layer1");
    layer2 = document.getElementById("layer2");
    layer25 = document.getElementById("layer25");
    layer3 = document.getElementById("layer3");
    layer4 = document.getElementById("layer4");
    layer5 = document.getElementById("layer5");
    position1 = position*(0.34);
    position2 = position*(0.3);
    position25 = position*(0.26);
    position3 = position*(0.238);
    position4 = position*(0.16);
    position5 = position*(0.2);
    triggerTable.style.top = position3 + 'px';
    layer0.style.top = position1 + 'px';
    layer1.style.top = position1 + 'px';
    layer2.style.top = position2 + 'px';
    layer25.style.top = position25 + 'px';
    layer3.style.top = position3 + 'px';
    layer4.style.top = position4 + 'px';
    layer5.style.top = position5 + 'px';
}
function centerHead(){
    for (var item in heads) {
        if(!(heads[item].id==="centerHead")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function up1(){
    for (var item in heads) {
        if(!(heads[item].id==="up1")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function up2(){
    for (var item in heads) {
        if(!(heads[item].id==="up2")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function down1(){
    for (var item in heads) {
        if(!(heads[item].id==="down1")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function down2(){
    for (var item in heads) {
        if(!(heads[item].id==="down2")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function lDown1(){
    for (var item in heads) {
        if(!(heads[item].id==="lDown1")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function lDown2(){
    for (var item in heads) {
        if(!(heads[item].id==="lDown2")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function lUp1(){
    for (var item in heads) {
        if(!(heads[item].id==="lUp1")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function lUp2(){
    for (var item in heads) {
        if(!(heads[item].id==="lUp2")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function left1(){
    for (var item in heads) {
        if(!(heads[item].id==="left1")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function left2(){
    for (var item in heads) {
        if(!(heads[item].id==="left2")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function rDown1(){
    for (var item in heads) {
        if(!(heads[item].id==="rDown1")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function rDown2(){
    for (var item in heads) {
        if(!(heads[item].id==="rDown2")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function rUp1(){
    for (var item in heads) {
        if(!(heads[item].id==="rUp1")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function rUp2(){
    for (var item in heads) {
        if(!(heads[item].id==="rUp2")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function right1(){
    for (var item in heads) {
        if(!(heads[item].id==="right1")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}
function right2(){
    for (var item in heads) {
        if(!(heads[item].id==="right2")){
            
            heads[item].style.display="none";
        }
        else
        {
            heads[item].style.display="block";
        }
    }
}

// var mouse = {x:0, y:0}; //mouse.x, mouse.y
// document.addEventListener("mousemove", checkPosition); 
// function checkPosition(e){
// 	mouse.x = e.pageX;
// 	mouse.y = e.pageY;
//     console.log("x= "+ mouse.x);
//     console.log("y= "+mouse.y);
// }