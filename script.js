'use strict';
/*
console.log(document.querySelector('.message').textContent);
/* 查询选择器 
document.querySelector('.message').textContent='Correct Number!'
document.querySelector('.number').textContent=13
console.log(document.querySelector('.guess').value);
*/
//DRY 原则：不要有重复的代码

let secretNumber=Math.trunc(Math.random()*20)+1
let score=20
let highscore=0
const displayMessage=function(message){
  document.querySelector('.message').textContent =message
}
document.querySelector('.check').addEventListener(
    'click',function(){
        const guess=Number(document.querySelector('.guess').value)
console.log(guess,typeof guess);
//没输入的时候
if(!guess){
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
}else if(guess!==secretNumber){
 if(score>1){
//document.querySelector('.message').textContent = guess>secretNumber?'📈 Too high!':'📉 Too low!';
displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
score--;
document.querySelector('.score').textContent = score;
    }else{
//document.querySelector('.message').textContent = '💥 You lost the game!';
displayMessage('💥 You lost the game!')
document.querySelector('.score').textContent=0
    }

    //赢得比赛
}else if(guess===secretNumber){
document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.message').textContent
// ='🎉 Correct number!'
displayMessage('🎉 Correct number!');
document.querySelector('body').style.backgroundColor='#60b347'
document.querySelector('.number').style.width='30rem'
if(score>highscore){
highscore=score
  document.querySelector('.highscore').textContent=score
}
}})
//输入太高
// }else if(guess>secretNumber){
//    if(score>1){
// document.querySelector('.message').textContent = '📈 Too high!';
// score--;
// document.querySelector('.score').textContent = score;
//     }else{
// document.querySelector('.message').textContent = '💥 You lost the game!';
// document.querySelector('.score').textContent=0
//     }
// //输入太低
// }else if(guess<secretNumber){
//  if (score > 1) {
//    document.querySelector('.message').textContent = '📉 Too low!';
//    score--;
// document.querySelector('.score').textContent = score;

//  } else {
//    document.querySelector('.message').textContent = '💥 You lost the game!';
// document.querySelector('.score').textContent = 0;
 
// }
 
// }  

// });
    /* 监视器的动作同时进行 */
    /* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀实现游戏休息功能，以便玩家可以进行新的猜测！方法如下：
1.选择具有“再次”类的元素并附加一个单击事件处理程序2.在处理程序函数中，
恢复分数和secretNumber变量的初始值3.恢复消息、数字、分数和猜测输
入字段的初始条件4.还恢复原始背景色（#222）和数字宽度（15rem）
祝你好运
*/
/*document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
    document.querySelector('.number').textContent='?'
})document.querySelector('.again').addEventListener('click',game())*/
document.querySelector('.again').addEventListener('click',function(){
  document.querySelector('.guess').value=""
document.querySelector('body').style.backgroundColor='#222'
document.querySelector('.number').style.width='15rem'
document.querySelector('.number').textContent='?'
//document.querySelector('.message').textContent='Start guessing...'
displayMessage('Start guessing...');
score=20;
document.querySelector('.score').textContent=score
secretNumber = Math.trunc(Math.random() * 20) + 1;
})

