

var button= document.querySelector('.btn');
var btn= document.querySelector('.btn-2');
let time = document.querySelector('#time');




button.addEventListener ('click', function (e)  {
   
    let name = prompt('What is your name?');
    let greeting = 'Have a nice day!';
    let answer = 'How are you?';
    let greeting2= alert(`${answer} ${name}, It's a pleasue `)
    let question = prompt('How old are you?')
    
 
       if(question >= 60) {
          alert('Congratulations, you are as old as Nigeria');
       } else {
           alert('Sorry, you were not born as of the time that Nigeria gains independence from the British');
       }   
           
           time.innerHTML = greeting;
      
});       
  
     function reset(e) {
         time.innerHTML = ''

     }
   

   