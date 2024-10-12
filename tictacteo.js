let turn="true";
 
const winnerpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
/*console.log(winnerpattern);*/

let box1=document.querySelector(".box1");
box1.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box1.innerText="X";
       document.querySelector(".box1").style.backgroundColor="skyblue";
       console.log("playerX played");
   }else{
       turn="true";
       box1.innerText="O";
       document.querySelector(".box1").style.backgroundColor="yellow";
       console.log("player0 played");
   }
   winner();
   box1.disabled=true;
  /** document.querySelector(".box1").style.backgroundColor="skyblue"; */
   /*box1.innerText="abc";*/
   /**console.log("box was clicked");*/
}); 

let box2=document.querySelector(".box2");
box2.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box2.innerText="X";
       document.querySelector(".box2").style.backgroundColor="skyblue";
       console.log("playerX played");
   }else{
       turn="true";
       box2.innerText="O";
       document.querySelector(".box2").style.backgroundColor="yellow";
       console.log("player0 played");
   }
   winner();
   box2.disabled=true;
  /** document.querySelector(".box2").style.backgroundColor="yellow"; */
   /*box2.innerText="def";*/
   /*console.log("box was clicked");*/
});

let box3=document.querySelector(".box3");
box3.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box3.innerText="X";
       document.querySelector(".box3").style.backgroundColor="skyblue"; 
       console.log("playerX played");
   }else{
       turn="true";
       box3.innerText="O";
       document.querySelector(".box3").style.backgroundColor="yellow";
       console.log("player0 played");
   }
   winner();
   box3.disabled=true;
   /**document.querySelector(".box3").style.backgroundColor="yellow"; */
   /*box3.innerText="ghi"; 
   console.log("box was clicked");*/
});

let box4=document.querySelector(".box4");
box4.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box4.innerText="X";
       document.querySelector(".box4").style.backgroundColor="skyblue";
       console.log("playerX played");
   }else{
       turn="true";
       box4.innerText="O";
       document.querySelector(".box4").style.backgroundColor="yellow";
       console.log("player0 played");
   }
   winner();
   box4.disabled=true;
   /**document.querySelector(".box4").style.backgroundColor="yellow"; */
   /*box4.innerText="jkl"; 
   console.log("box was clicked");*/
});

let box5=document.querySelector(".box5");
box5.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box5.innerText="X";
      /** document.querySelector(".box5").style.backgroundColor="yellow"; */
      document.querySelector(".box5").style.backgroundColor="skyblue";
      console.log("playerX played");
   }else{
       turn="true";
       box5.innerText="O";
       document.querySelector(".box5").style.backgroundColor="yellow";
       console.log("player0 played");
   }
   winner();
   box5.disabled=true;
   /**document.querySelector(".box5").style.backgroundColor="yellow"; */
   /**box5.innerText="mno"; 
   console.log("box was clicked");*/
});

let box6=document.querySelector(".box6");
box6.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box6.innerText="X";
       /**document.querySelector(".box6").style.backgroundColor="yellow"; */
       document.querySelector(".box6").style.backgroundColor="skyblue";
       console.log("playerX played");
   }else{
       turn="true";
       box6.innerText="O";
       document.querySelector(".box6").style.backgroundColor="yellow";
       console.log("player0 played");
   }
   winner();
   box6.disabled=true;
   /**document.querySelector(".box6").style.backgroundColor="yellow"; */
   /*box6.innerText="pqr";
   console.log("box was clicked");*/
});

let box7=document.querySelector(".box7");
box7.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box7.innerText="X";
      /** document.querySelector(".box7").style.backgroundColor="yellow"; */
      document.querySelector(".box7").style.backgroundColor="skyblue";
      console.log("playerX played");
   }else{
       turn="true";
       box7.innerText="O";
       document.querySelector(".box7").style.backgroundColor="yellow";
       console.log("player0 played");
   }
   winner();
   box7.disabled=true;
   /**document.querySelector(".box7").style.backgroundColor="yellow"; */
  /*box7.innerText="stu";
   console.log("box was clicked");*/
});

let box8=document.querySelector(".box8");
box8.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box8.innerText="X";
       /**document.querySelector(".box8").style.backgroundColor="yellow"; */
       document.querySelector(".box8").style.backgroundColor="skyblue";
       console.log("playerX played");
   }else{
       turn="true";
       box8.innerText="O";
       document.querySelector(".box8").style.backgroundColor="yellow";
       console.log("playerX played");
   }
   winner();
   box8.disabled=true;
   /**document.querySelector(".box8").style.backgroundColor="yellow"; */
  /* box8.innerText="vwx";
   console.log("box was clicked");*/
});

let box9=document.querySelector(".box9");
box9.addEventListener("click",()=>{
   if(turn==="true"){
       turn="false";
       box9.innerText="X";
       /**document.querySelector(".box9").style.backgroundColor="yellow"; */
       document.querySelector(".box9").style.backgroundColor="skyblue";
       console.log("playerX played");
   }else{
       turn="true";
       box9.innerText="O";
       document.querySelector(".box9").style.backgroundColor="yellow";
       console.log("player0 played");
   }
   winner();
   box9.disabled=true;
   /**document.querySelector(".box9").style.backgroundColor="yellow"; */
   /*box9.innerText="yz";
   console.log("box was clicked");*/
});

let boxes=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

const winner=()=>{
   for(let win of winnerpattern){
       let sq1=boxes[win[0]].innerText;
       let sq2=boxes[win[1]].innerText;
       let sq3=boxes[win[2]].innerText;

       if(sq1!=""&&sq2!=""&&sq3!=""){
           if(sq1===sq2&&sq2===sq3){
               console.log("winner",sq1);
               showwinner();
           }
       }
   }
};

let mgsbox=document.querySelector(".mgsbox");
let mgs=document.querySelector(".mgs");

const showwinner=(winner)=>{
   mgs.innerText="Congrataluations Winner";
   mgsbox.classList.remove("hide");
   disablegame();
};

const disablegame=()=>{
   for(let box of boxes){
       box.disabled=true;
   }
};

let restbtn=document.querySelector(".reset-btn");
restbtn.addEventListener("click",()=>{
   turn=true;
   enablegame();
});

const enablegame=()=>{
   for(let box of boxes){
       box.disabled=false;
       box.innerText="";
       mgsbox.classList.add("hide");
   }
};

