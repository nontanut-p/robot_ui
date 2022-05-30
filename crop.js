
var order = ",Thai:90,Eng:50,Math:66,"
let order_lenght = order.length // ความยาวของ order 
let prev_i = 0
let prev_j = 0
let word = ""

console.log(order_lenght)

for (let i = 0; i <= order_lenght; i++) {
    if(order[i] == ","){
        word = ""
        for(let j = prev_i ; j < i-1 ; j++){
            word = word + order[j+1]
            if(order[j+1] == ":"){ 
                let point = order[j+2] + order[j+3]
                console.log(word, grade(point))
                
                
                
            }
        }
        
        prev_i = i;
    }
  }


  function grade(point){

    if(point <55){
        return '0'
    }else{
        return '4'
    }
    
  }