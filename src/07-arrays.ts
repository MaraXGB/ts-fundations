(() =>{
    let prices = [1,2,3,4,5,6,4, 'hola', true];
    prices.push('chao');
    prices.push(false);
    prices.pop();
    console.log('Prices: ', prices);

    let products = ['product1', true];
    products.push(false);

    let mixed: (string | number | boolean | Object)[] = ['hola', false];
    mixed.push(123);
    mixed.push([]);
    mixed.push({});

    let numbers = [1,2,3,4,5,6,4];
    numbers.map(item => item * 2);
    console.log('Numbers: ', numbers);
})();