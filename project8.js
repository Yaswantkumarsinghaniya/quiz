const questions=[
{
que:'which of the following language is the markup language',
 a:'html',
 b:'css',
 c:'javascript',
 d:'php',
 ans:'a'
 },
{
que:'which of the following language is the sarkup language',
 a:'html',
 b:'css',
 c:'javascript',
 d:'php',
 ans:'c'
 },
 {
que:'which of the following language is the tarkup language',
 a:'html',
 b:'css',
 c:'javascript',
 d:'php',
 ans:'d'
 }
]
 let index=0;
 const last=questions.length
 let right=0,wrong=0;
 const quesBox=document.getElementById('quesBox')
 const showoptions=document.querySelectorAll('.options')
 const showquestion=()=>{
   if(index===last){
    return endQuiz()
     }
  
   reset()
  const show=questions[index]
  quesBox.innerHTML=`${index+1})${show.que}`;
  showoptions[0].nextElementSibling.innerHTML=show.a;
  showoptions[1].nextElementSibling.innerHTML=show.b;
  showoptions[2].nextElementSibling.innerHTML=show.c;
  showoptions[3].nextElementSibling.innerHTML=show.d;
}
 const nextquestions=()=>{
  const show=questions[index]
  const answer=getcheck()
   if(answer===show.ans){
     right++;   
     }
    else{
  wrong++;
    }
    index++
    showquestion()
   return
 }  

 
  const getcheck=()=>{
    let answer;
     showoptions.forEach(
       (input)=>{
           if(input.checked)
           answer=input.value;
       }


   ) 
   return answer  
}
 const reset=()=>{
   showoptions.forEach(
    (input)=>{
     input.checked=false;
    }

    

    )
}

const endQuiz=()=>{
  document.getElementById('overlay').innerHTML=`
  <h2>This is the end of the quiz</h2>
  <h1>${right}/${last} is correct</h1>
 `
}
  



 


  
 showquestion()









