

const click =
  new  KeyboardEvent('keydown',{
        key:'a',
        ctrlKey:true
    })



setInterval(()=>{
   for(i = 0; i<0; i++){
    document.dispatchEvent(click)
   }
       
},150)