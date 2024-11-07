function bagi(a, b) {
    if (arguments.length !== 2) {
        console.error("Input harus 2 sam");
        return null;
    }
    if (typeof a !== "number" || typeof b !== "number") {
        console.error("diharapkan memasukkan angka");
        return null;
    }
    if (b === 0) {
        console.error("tidak bisa dibagi dengan nol");
        return null;
    }
    return a / b;
}

    console.log(bagi("a"));        
        console.log(bagi(10, "a"));   
            console.log(bagi(10, 2));       
                console.log(bagi(10, 0));      
                    console.log(bagi(10, 5));       