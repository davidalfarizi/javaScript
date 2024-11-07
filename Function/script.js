// 1. Menampilkan Smile pada console log
    function printSmile() {
        console.log(":)");
    }
        printSmile();

// 2. Praktikum mengembalikan nilai
    function multiply(a, b) {
        return a * b;
    }

    console.log(multiply(3, 2)); // 6
        console.log(multiply(8, 8)); // 64
            console.log(multiply(5, 6)); // 30

// 3. Praktikum sekala pada function

    let animal = "Felis catus";
    function observe() {
        let animal = "Panthera leo";
        console.log(animal); 
    }
        observe(); 

    // menampilkan apa yang bakal muncul pada console log
    let deadlyAnimal = "Aptenodytes forsteri";
    function handleAnimal() {
        let deadlyAnimal = "Diomedea spp";
        console.log(deadlyAnimal);
    }
        handleAnimal(); 
            console.log(deadlyAnimal);

// 4. Praktikum mengaplikasikan arrow funtion
    const sayHello = (name) => {
        return `Hello ${name}!`;
    };

// mencoba function sayHello untuk menyapa dan akan muncul pada log consol
    console.log(sayHello("Harry")); 
    console.log(sayHello("Holand")); 