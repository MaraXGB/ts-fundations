(() =>{
    let isEnable = true;
    // isEnable = 'as';
    // isEnable = 123;
    isEnable = false;

    let isNew: boolean = false;
    console.log('Is new', isNew);
    isNew = true;
    console.log('Is new', isNew);

    const random = Math.random();
    console.log('random', random);
    isNew = random >= 0.5 ? true : false;
    console.log('Is new', isNew);
})();