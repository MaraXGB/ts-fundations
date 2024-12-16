(() =>{
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const login = (data: {email: string, password: number}) =>{
        console.log(data.email, data.password);
    }
    // login('mara@gimail.com','54312');
    login({
        email:'mara@gmail.com',
        password: 54312 
    });

    const products: any[] = [];
    const addProduct = (data: {title: string, createdAt: Date, stock: number, size?: Sizes}) =>{
        products.push(data);
    }
    addProduct({
        title: 'Pro1',
        createdAt: new Date(),
        stock: 12,
        size: 'M'
    });
    console.log(products);
})();