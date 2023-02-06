let before =document.querySelector('.before')
let after =document.querySelector('.after')
let img1 =document.querySelector('.img1')
let p =document.querySelector('.p')
let p1=document.querySelector('.p1')



before.addEventListener('click', function(){
    img1.classList.add('show')
})

before.addEventListener('click', function(){
   p1.classList.add('show'),

   document.querySelector('.p1').innerHTML = 'by';
   
})


after.addEventListener('click', function(){
    img1.classList.remove('show')
})

after.addEventListener('click', function(){
    p1.classList.remove('show')
    document.querySelector('.p1').innerHTML = 'hii';
 })
 

 let checkbox = document.querySelector('.checkbox');
 let inp = document.querySelector('.myinp')
 checkbox.addEventListener('click', function(){
   if (inp.type == 'text') {
     inp.type = 'password';
    
   }else{
     inp.type = 'text';
   }
 })




 let min  = document.querySelectorAll('.min');
 let max  = document.querySelector('.max');
 for (const img of min) {
 
     img.addEventListener('click', function(){
         document.querySelector('.active')?.classList.remove('active');
         this.classList.add('active')
          let src  = this.src;
         max.src = src;
     })
 }
 
 let indexs = 0;
 let allelem = min.length;
 

     document.querySelector('.active')?.classList.remove('active');{
         allimg[indexs].classList.add('active')
          let src  = allimg[indexs].src;
        max.src = src;
        
 }
 