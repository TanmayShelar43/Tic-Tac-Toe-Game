let Userturn=0;
let str;
let score={
  X:0,
  Y:0,
};
function turn(Userturn,str)
{
  if(Userturn%2===0)
  {
    document.querySelector(`#${str}`).classList.add("black");
    document.querySelector(`#${str}`).innerText=('X');
  }
  else
  {
    document.querySelector(`#${str}`).classList.add("white");
    document.querySelector(`#${str}`).innerText=('O');
  }
}
function empty()
{
  document.querySelector('#box1').innerText=('');
  document.querySelector('#box1').disabled=false;
  document.querySelector('#box2').innerText=('');
  document.querySelector('#box2').disabled=false;
  document.querySelector('#box3').innerText=('');
  document.querySelector('#box3').disabled=false;
  document.querySelector('#box4').innerText=('');
  document.querySelector('#box4').disabled=false;
  document.querySelector('#box5').innerText=('');
  document.querySelector('#box5').disabled=false;
  document.querySelector('#box6').innerText=('');
  document.querySelector('#box6').disabled=false;
  document.querySelector('#box7').innerText=('');
  document.querySelector('#box7').disabled=false;
  document.querySelector('#box8').innerText=('');
  document.querySelector('#box8').disabled=false;
  document.querySelector('#box9').innerText=('');
  document.querySelector('#box9').disabled=false;
}

function result()
{
  let b1=document.querySelector('#box1').innerText;
  let b2=document.querySelector('#box2').innerText;
  let b3=document.querySelector('#box3').innerText;
  let b4=document.querySelector('#box4').innerText;
  let b5=document.querySelector('#box5').innerText;
  let b6=document.querySelector('#box6').innerText;
  let b7=document.querySelector('#box7').innerText;
  let b8=document.querySelector('#box8').innerText;
  let b9=document.querySelector('#box9').innerText;
  if(b1!=='' && b1===b2 && b2===b3)
  {
    if(b1==='X')
    score.X++;
    else
    score.Y++;
    document.querySelector('h2').innerText=(`X:${score.X} Y:${score.Y}`);
    empty();
    Userturn=0;
  }
  if(b4!=='' && b4===b5 && b5===b6)
  {
    if(b5==='X')
    score.X++;
    else
    score.Y++;
    document.querySelector('h2').innerText=(`X:${score.X} Y:${score.Y}`);
    empty();
    Userturn=0;
  }
  if(b7!=='' && b7===b8 && b8===b9)
  {
    if(b7==='X')
    score.X++;
    else
    score.Y++;
    document.querySelector('h2').innerText=(`X:${score.X} Y:${score.Y}`);
    empty();
    Userturn=0;
  }
  if(b1!=='' && b1===b4 && b4===b7)
  {
    if(b1==='X')
    score.X++;
    else
    score.Y++;
    document.querySelector('h2').innerText=(`X:${score.X} Y:${score.Y}`);
    empty();
    Userturn=0;
  }
  if(b2!=='' && b2===b5 && b5===b8)
  {
    if(b2==='X')
    score.X++;
    else
    score.Y++;
    document.querySelector('h2').innerText=(`X:${score.X} Y:${score.Y}`);
    empty();
    Userturn=0;
  }
  if(b3!=='' && b3===b6 && b6===b9)
  {
    if(b3==='X')
    score.X++;
    else
    score.Y++;
    document.querySelector('h2').innerText=(`X:${score.X} Y:${score.Y}`);
    empty();
    Userturn=0;
  }
  if(b1!=='' && b1===b5 && b5===b9)
  {
    if(b1==='X')
    score.X++;
    else
    score.Y++;
    document.querySelector('h2').innerText=(`X:${score.X} Y:${score.Y}`);
    empty();
    Userturn=0;
  }
  if(b3!=='' && b3===b5 && b5===b7)
  {
    if(b3==='X')
    score.X++;
    else
    score.Y++;
    document.querySelector('h2').innerText=(`X:${score.X} Y:${score.Y}`);
    empty();
    Userturn=0;
  }
  if(b1!=='' && b2!=='' && b3!=='' && b4!=='' && b5!=='' && b6!=='' && b7!=='' && b8!=='' && b9!=='')
  {
    empty();
    Userturn=0;
  }
  
}
