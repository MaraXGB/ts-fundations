(() =>{
    let myUserId: string | number; 
    myUserId = 123;
    myUserId ='Asde32';

    function Greeting(myText: string | number){
        if(typeof myText === 'string'){
           console.log(`String: ${myText.toLowerCase()}`);
        }else{
           console.log(`Number: ${myText.toFixed(1)}`);
        }
    }
    Greeting('asnjf233');
    Greeting(12.4564);
})();