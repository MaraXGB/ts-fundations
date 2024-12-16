(() =>{
    let productTitle = 'My amazing product';
    // productTitle =123;
    productTitle = 'My product title changed';
    console.log('Product Title', productTitle);
    let productPrice = 123;
    const productDescription = "I'm bla blaurdhffr";
    console.log('Product Description', productDescription);

    const summary = `
        title: ${productTitle}
        Description: ${productDescription}
        price: ${productPrice}

    `;
    console.log(summary);
})();