export function performSqrt() {
    let number = parseInt(prompt('Masukkan angka/bilangan yang akan dihitung akar pangkat duanya!'));
    let result = Math.sqrt(number);
    alert(`Hasil dari sqrt(${number}) adalah ${result}`);
}