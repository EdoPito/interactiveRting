const trigger=document.getElementsByClassName("sbmt")[0]; //bottone 
const thankCard= document.getElementsByClassName('thanks')[0]; //deve apparire
const initialCard= document.getElementsByClassName('card')[0]; //deve sparire
const bottoni = document.getElementsByClassName('btn');

function submit(){

    thankCard.style.display ='block';
    initialCard.style.display= 'none';
    

    
};

trigger.addEventListener('click', submit)




//aggancio ad ogni bottone il suo gestore di clicl

//forma lunga, tradizionale
for (let i=0; i<bottoni.length; i++)
  bottoni[i].addEventListener("click", function () {
   document.getElementById('rate').textContent = this.textContent;     
  });


