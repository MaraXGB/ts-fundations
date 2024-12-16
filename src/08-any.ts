//preferiblemente no utilizar
(() =>{
    let myDinamicVar: any;
    myDinamicVar = 100;
    myDinamicVar = null;
    myDinamicVar = [];
    myDinamicVar = {};

    myDinamicVar = 'Hola';
    const rta = (myDinamicVar as string).toLocaleLowerCase();
    console.log(rta);

    const rta2 = (<number>myDinamicVar).toFixed;
    console.log(rta2);
})();