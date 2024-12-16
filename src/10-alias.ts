(() =>{
    type UserID =string | number; 
    let userId: UserID; 

    // Literal Types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    shirtSize = 'S';

    function Greeting(userId: UserID, size: Sizes){
        if(typeof userId === 'string'){
           console.log(`String: ${userId.toLowerCase()}`);
        }else{
           console.log(`Number: ${userId.toFixed(1)}`);
        }
    }
    Greeting(1111, 'S');
})();