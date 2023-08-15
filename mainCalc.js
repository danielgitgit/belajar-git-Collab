import { performSubtraction } from './substraction.js';
import { performMultiplication } from './multiplication.js';
import { performSqrt } from './sqrt.js';
import { performExit } from './exit.js';
import { square } from './square.js';
import { akar_tiga } from './akar_tiga.js';
import { addition } from './addition.js';
//import { performMultiplication } from './multiplication.js';

function displayMenu() {
    return parseInt(
        prompt(`Apa yang ingin Anda lakukan?\n
        1. ADDITION - Leon
        2. SUBSTRACTION - raisa
        3. DIVISION - dimas Yusuf
        4. MULTIPLICATION - Andika
        5. SQUARE - Jusuf Fahri
        6. SQRT - Achmad
        7. CBRT - Daniel
        8. EXIT - Keluar
    `));
}

let menu;

do {
    menu = displayMenu();

    switch (menu) {
        case 1:
            addition()
            break;
        case 2:
            performSubtraction()
            break;
        case 3:
            performDivision()
            break;
        case 4:
            performMultiplication()
            break;
        case 5:
            square()
            break;
        case 6:
            performSqrt()
            break;
        case 7:
            akar_tiga()
            break;
        case 8:
            performExit()
            break;
        default:
            alert("Pilihan tidak valid. Coba lagi.");
            break;
    }
} while (menu !== 8);
