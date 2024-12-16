(() => {
    let myProductPrice = 100;
    myProductPrice = 12;
    console.log('Product Price', myProductPrice);

    let customerAge: number = 28;
    // customerAge = customerAge + '1'; //debe sumar con el mismo tipo de varibale
    customerAge = customerAge +1;

    let productInStock: number;
    // console.log(productInStock); //Debe asignar un valor
    // if(productInStock > 10){
    //     console.log('is greater');
    // }

    let discount = parseInt('123');
    console.log('Discount', discount);
    if(discount <= 200){
        console.log('Apply');
    }else{
        console.log('Not Apply');
    }

    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b01001;
    console.log('bin', bin);
})();