let sideBar = document.querySelector('.sidebar');

function sidebar(){
sideBar.classList.toggle('open');
console.log('open')  
}

function second(){
sideBar.classList.remove('hide');
console.log('hide re')
}


let hamburger = document.querySelector('.sidebar-toggle');
hamburger.onclick = sidebar;
hamburger.addEventListener('click',second)

let closebtn = document.querySelector('.logo-btn');
closebtn.addEventListener('click',()=>{sideBar.classList.add('hide')});

let field = document.querySelector('.field');
let ball = document.querySelector('.ball')

//JavaScript for the Ball


field.onclick = function(event){
let fieldCoords = this.getBoundingClientRect();

let ballCoords = {
   left:event.clientX-fieldCoords.left-field.clientLeft-ball.clientWidth/2,
   top:event.clientY-fieldCoords.top-field.clientTop-ball.clientHeight/2,   
};
if(ballCoords.top<0) ballCoords.top=0;
if(ballCoords.left<0) ballCoords.left= 0;
if(ballCoords.left+ball.clientWidth>field.clientWidth) {ballCoords.left=field.clientWidth-ball.clientWidth};
if(ballCoords.top+ball.clientHeight>field.clientHeight) {ballCoords.top=field.clientHeight-ball.clientHeight};

ball.style.top = ballCoords.top+'px';
ball.style.left = ballCoords.left+'px';

}
































