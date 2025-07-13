// var buah = ["durian",75000,true]
// function rubahjadiobject(lariknya){
//     var objectnya = {}
//     objectnya.jenis = lariknya[0]
//     objectnya.harga = lariknya[1]
//     objectnya.enak = lariknya[2]
//     return objectnya;
// }

// console.log(rubahjadiobject(buah));

// var mobil = {
//     name : "CIVIC",
//     cc : 5000,

//     // method
//     startEngine : function(){
//         // console.log("mesin nyala");
//         console.log(`${this.name} mesin nyala`);
//     }
// }

// console.log(mobil.name);
// mobil.startEngine()

// var caca = {
//     nama : "caca",
//     berat : "45 Kg",
//     tinggi : 155,
//     hobi : ["nonton","makan","membaca","Ngopi"],

//     sebutkanHobby : function(){
//         console.log(`Hobby Caca :`);
//         // console.log(`1. ${this.hobi[0]}`);
//         // console.log(`2. ${this.hobi[1]}`);
//         for (let index = 0; index < this.hobi.length; index++) {
//             console.log(`${index+1}. ${this.hobi[index]}`);
//         }
//     }
// }
// caca.sebutkanHobby()

// var student = {
//     name : "admin",
//     gpa : 3.21,
//     isGraduated : true,
//     skill : ["javascript","php"],
//     address : {
//         city : "jakarta barat",
//         province : "DKI JAKARTA"
//     },

//     // methods
//     speak : function(){
//         console.log("My name is "+this.name+ " Salam Kenal"); 
//     },
//     mentionAddress : function (){
//         console.log("My address is in " + this.address.city+","+ this.address.province);
//     }
// }

// console.log(student.name);
// console.log(student["skill"]);
// console.log(student.address.city);
// student.speak()


// array of objects
// var items = [
//     {
//         id : 1,
//         name : "Iphone 15 pro max",
//         type : "gadget",
//         price : 15000000,
//         isAvailabke : true
//     },
//     {
//         id : 2,
//         name : "Samsung S25",
//         type : "gadget",
//         price : 12500000,
//         isAvailabke : false
//     },
//     {
//         id : 3,
//         name : "Asus ROG Phone",
//         type : "gaming phone",
//         price : 15000000,
//         isAvailabke : true
//     },
// ]

// console.log(items);

// 1. [x] Iphone 15 pro max
// 2. [ ] Samsung S25

// 
// const produk = {
//     id : "SKU12345",
//     nama : "kemeja  linen",
//     harga : 100000,
//     stok : 12,
//     ketegori : "Pakaian",

//     diskon : function(){
//         return this.harga * 0.01;
//     }
// }

// console.log(produk.nama);
// console.log(produk.diskon());

const tokoOnline = {
    namaToko : "Toko Klontong",
    produk : [
        {
            id : "P001",
            nama : "Kemeja Batik",
            harga : 150000,
            kategori : {
                utama : "pakaian",
                sub : "Batik"
            },
            ulasan: [
                {
                    pengguna : "Joko",
                    rating : 5
                },
                {
                    pengguna : "Yuni",
                    rating : 5
                },
            ]
        }

    ],
}

console.log(tokoOnline.produk[0].ulasan);

