function fruits() {
    if (true) { //bloque
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Watermelon'; // bloc scope
        const fruit3 = 'Bannana' // bloc scope

        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);

}

fruits();