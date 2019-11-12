// let lampu = "biru";

// if (lampu == "hijau") {
//     console.log("jalan");
// } else if (lampu == "kuning") {
//     console.log("hati-hati");
// } else if (lampu == "merah") {
//     console.log("berenti");
// } else {
//     console.log("lampu rusak");
// }

// let kucing = 100000111;
// if (kucing <= 1000000) {
//     console.log("adop saja");
// } else {
//     console.log("jangan dibeli");
// }

// let dompet = 10000;

// if (dompet >= 100000 && dompet <= 500000 ) {
//     console.log("makan pizza");
// } else if (dompet == 30000) {
//     console.log("makan di mcd");
// } else if (dompet == 10000) {
//     console.log("makan mie ayam");
// } else {
//     console.log("indomie rebus");
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// let i = 1;
// let kondisi = true;

// while (kondisi) {
//     console.log(i);

//     if (i > 5) {
//         kondisi = false;
//     }
//     i++;
// }

// let i = 2;
// let kondisi = true;
// while (kondisi) {
//     console.log(i);

//     if (i > 5) {
//         kondisi = false;
//     }
//     i++;
// }

// let cuaca = "dingin";

// if (cuaca == "panas") {
//     console.log("minum jeruk peras");
// } else if (cuaca == "dingin") {
//     console.log("pakai selimut");
// } else {
//     console.log("itu bukan cuaca");
// }




let emptyArray = [1, 'Impact', 2, 3, 'Byte', 4, 'Kind', 5, 'Komodo', 6, 'Batch#11', 7, 8];

function RemoveOddnumber(arr) {
    for (let i = 0;
        (arr).length; i++) {
        if (!(arr[i] == 0)) {
            arr.splice(i, 1)
        }
        return arr;
    }

}