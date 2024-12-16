(() => {
    // let myNumber: number;
    // let myString: string;
    let myNull = null;
    let myUndefined = undefined;
    let myNumber: number | null = null;
    myNumber = 12;

    let myString: string | undefined = undefined;
    myString = 'hola';

    function Hi(name: string | null){
        let hello = 'Hola!';
        if(name){
            hello += name;
        }else {
            hello+= 'nobody';
        }
        console.log(hello);
    }
    function HiV2(name: string | null){
        let hello = 'Hola!';
        hello += name?.toLowerCase() || 'nobody';
        console.log(hello);
    }
    Hi('Edmara');
    HiV2('Edmara');
})();