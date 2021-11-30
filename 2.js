let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "sticks"],
    toppings : ["chocolate", "peanuts"],
  };
  
  let is_shop_open = true;
  
  let order = (time, work) => {
    
    return new Promise( (resolve, reject)=>{
      if(is_shop_open){
        
        setTimeout(()=>{
          resolve( work() )
        },time);
        
      }
      
      else{
        reject(console.log("our shop is closed"))
      }
    });
  };
  
  order(2000, ()=> console.log(`${stocks.Fruits[0]} as selected`))
  
  
  .then(()=>{
    
    return order(0000, ()=>console.log("Production has started"));
  })
  
  
  .then(()=>{
    
    return order(2000, ()=>console.log("the fruit was chopped"));
  })
  
  
  .then(()=>{
    
    return order(1000,  ()=>console.log(`added ${stocks.liquid[0]} and ${stocks.liquid[1]}`));
  })
  
  
  .then(()=>{
    
    return order(1000, ()=>console.log("the machine is started"));
  })
  
  
  .then(()=>{
    
    return order(2000, ()=>console.log(`ice cream was placed on ${stocks.holder[0]}`));
  })
  
  
  .then(()=>{
    
    return order(3000, ()=>console.log(`${stocks.toppings[0]} was added as toppings`));
  })
  
  
  .then(()=>{
    
    return order(2000, ()=>console.log("ice cream was served"));
  })
  
  
  
  .catch(()=>{
    console.log("customer left");
  })
  
  
  .finally(()=>{
    console.log("thank you for visiting")
  });