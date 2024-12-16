
(() => {
    //Tipo inferido (debes mantener el tipo)
    let myProductName = 'Product 1';
    let myPuductPrice = 123;

    //Solo saldran funcciones segun el tipo de variable
    myProductName.toLowerCase();
    myPuductPrice.toFixed();

    //no se podra cambiar el valor
    const myProductStock = 100;
    })();
