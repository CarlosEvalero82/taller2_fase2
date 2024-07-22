

// 1. Programa que permite el ingreso de un número y muestra su tabla de multiplicar
function mostrarTablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese un número: "));
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// 2. Programa que permite el ingreso de números y se acumulan hasta que el usuario ingrese un 0
function acumularNumeros() {
    let suma = 0;
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un número (0 para terminar): "));
        suma += numero;
    } while (numero !== 0);
    console.log(`La suma total es: ${suma}`);
}

// 3. Juego de adivinar el número
function adivinarNumero() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let numero;
    do {
        numero = parseInt(prompt("Adivine el número (1-100): "));
        intentos++;
        if (numero < numeroSecreto) {
            console.log("El número es mayor.");
        } else if (numero > numeroSecreto) {
            console.log("El número es menor.");
        } else {
            console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
        }
    } while (numero !== numeroSecreto);
}

// 4. Programa que permite decir si un número es primo
function esNumeroPrimo() {
    let numero = parseInt(prompt("Ingrese un número: "));
    let esPrimo = numero > 1;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}

// 5. Programa que permite mostrar todos los divisores de un número
function mostrarDivisores() {
    let numero = parseInt(prompt("Ingrese un número: "));
    console.log(`Los divisores de ${numero} son:`);
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}

// 6. Programa que recorre un array de 10 elementos y muestra un mensaje por consola
function recorrerArray() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    array.forEach(element => {
        console.log(`Elemento: ${element}`);
    });
}

// 7. Programa que muestra el doble de cada uno de los elementos de un array de 10 números
function mostrarDoble() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    array.forEach(element => {
        console.log(`El doble de ${element} es ${element * 2}`);
    });
}

// 8. Programa que muestra un mensaje de presentación por cada elemento del array (grupo familiar)
function presentarGrupoFamiliar() {
    let familia = [
        { nombre: "Juan", edad: 40, parentesco: "Padre", ocupacion: "Ingeniero" },
        { nombre: "Maria", edad: 38, parentesco: "Madre", ocupacion: "Doctora" },
        { nombre: "Pedro", edad: 18, parentesco: "Hijo", ocupacion: "Estudiante" },
        { nombre: "Ana", edad: 16, parentesco: "Hija", ocupacion: "Estudiante" },
        { nombre: "Carlos", edad: 10, parentesco: "Hijo", ocupacion: "Estudiante" }
    ];
    familia.forEach(persona => {
        console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.parentesco} y trabajo como ${persona.ocupacion}.`);
    });
}

// 9. Programa que recorre un array de 10 números y muestra solo los números impares
function mostrarImpares() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    array.forEach(element => {
        if (element % 2 !== 0) {
            console.log(element);
        }
    });
}

// 10. Programa que permite la entrada de números y calcula la suma de los números pares y los impares por separado
function sumarParesImpares() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un número (0 para terminar): "));
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    } while (numero !== 0);
    console.log(`Suma de números pares: ${sumaPares}`);
    console.log(`Suma de números impares: ${sumaImpares}`);
}

// 11. Programa que imprime el número más grande de un array de 10 números
function numeroMasGrande() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let max = array[0];
    array.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    console.log(`El número más grande es: ${max}`);
}

// 12. Programa que imprime el número más chico de un array de 10 números
function numeroMasChico() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let min = array[0];
    array.forEach(element => {
        if (element < min) {
            min = element;
        }
    });
    console.log(`El número más chico es: ${min}`);
}

// 13. Programa que permite jugar a piedra papel o tijeras
function piedraPapelTijeras() {
    let jugador1 = prompt("Ingrese el nombre del Jugador 1: ");
    let jugador2 = prompt("Ingrese el nombre del Jugador 2: ");
    let opciones = ["piedra", "papel", "tijeras"];
    let mano1, mano2;
    do {
        mano1 = prompt(`${jugador1}, ingrese su jugada (piedra, papel, tijeras): `).toLowerCase();
        mano2 = prompt(`${jugador2}, ingrese su jugada (piedra, papel, tijeras): `).toLowerCase();
        if (mano1 === mano2) {
            console.log("Empate, jueguen de nuevo.");
        } else if (
            (mano1 === "piedra" && mano2 === "tijeras") ||
            (mano1 === "papel" && mano2 === "piedra") ||
            (mano1 === "tijeras" && mano2 === "papel")
        ) {
            console.log(`¡${jugador1} gana!`);
            break;
        } else {
            console.log(`¡${jugador2} gana!`);
            break;
        }
    } while (mano1 === mano2);
}

// 14. Programa que imprime un triángulo de 5 asteriscos de lado
function trianguloAsteriscos() {
    let asteriscos = "";
    for (let i = 1; i <= 5; i++) {
        asteriscos += "*";
        console.log(asteriscos);
    }
}




// 15. Programa que imprime un triángulo invertido de 5 asteriscos de lado
function trianguloAsteriscosInvertido() {
    let asteriscos = "*****";
    for (let i = 5; i >= 1; i--) {
        console.log(asteriscos.slice(0, i));
    }
}

// 16. Programa que imprime un array de 10 números desordenados en orden ascendente (sin usar sort)
function ordenarArray() {
    let array = [9, 2, 7, 4, 6, 3, 8, 1, 5, 10];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log(array);
}

