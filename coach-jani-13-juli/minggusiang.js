// x = 1;
// console.log('x = ' + x);
// var x;


// hello = "Selamat siang"
// console.log(hello);
// var hello;

// let angka = 10
// angka = 100
// console.log(angka);

// const angka = 10
// angka = 100
// console.log(angka);

// hello()
// function hello(){
//     console.log("hallo");
// }


// const hello = () => {
//    console.log("hello");
// }
// hello()

// function tambah(a,b){
//     return a+b;
// }

// const tambaharrow= (a,b)=>{ 
//     var data = "hasil";
//     var nilai = a+b;
//     var hasilnya = `${data} ${nilai}`
//     return hasilnya;
// };

// console.log(tambah(2,3));
// console.log(tambaharrow(2,6));


// // ES5
// let angka = [1,2,3]
// for(let i = 0; i < angka.length; i++){
//    console.log(angka[i]);
// }

// // ES6
// angka.forEach(element=> {
//    console.log(element);
// })

// // es6 ada indexnya
// angka.forEach((element,indx) =>{
//     console.log(`index ke ${indx} adalah ${element}`);
    
// });

// // contoh object di dalam array
// const produk =[
//     {
//         nama : "Kemeja",
//         harga : 250000
//     },
//     {
//         nama : "Celana",
//         harga : 50000
//     },
//     {
//         nama : "Sepatu",
//         harga : 80000
//     },
// ]

// produk.forEach((element)=>{
//     console.log(`- ${element.nama} , harga : Rp.${element.harga}`);
// });


// filter
// const angka = [1,2,3,4,5,6]

// const angkagenap = angka.filter((element)=> element % 2 === 0);
// const angkafilter2 = angka.filter((element)=> element < 3);
// console.log(angkagenap);
// console.log(angkafilter2);



// const produk =[
//     {
//         nama : "Kemeja",
//         harga : 250000
//     },
//     {
//         nama : "Celana",
//         harga : 50000
//     },
//     {
//         nama : "Sepatu",
//         harga : 80000
//     },
// ]

// // cari produk yang harga nya dari 80 ribu ke atas
// const produkmahal = produk.filter((element)=>element.harga >= 80000);
// console.log(produkmahal);

// .map
// const angka = [1,2,3,4,5,6]
// const duakalilipat = angka.map((elementjuga)=>elementjuga * 2);
// console.log(duakalilipat);


// const produk =[
//     {
//         nama : "Kemeja",
//         harga : 250000
//     },
//     {
//         nama : "Celana",
//         harga : 50000
//     },
//     {
//         nama : "Sepatu",
//         harga : 80000
//     }
// ]

// // const arraybaru =["kemeja harga Rp. 250000",
// //     "celana harga Rp. 50000", 
// //     "sepatu  harga Rp. 80000"]
// // const produkstring = produk.map((item)=> `${item.nama} harga Rp. ${item.harga}`);
// // console.log(produkstring);

// console.log(produk);
// produk.push({
//     nama : "Tas",
//     harga : 200000
// })
// console.log(produk);
// produk.pop()
// console.log(produk);



// CRUD  (Create , read, Update, Delete)

var students =[
    {
        id : 1,
        name : "Joko",
        major : "IT",
        isGraduated : true
    },
    {
        id : 2,
        name : "Yuni",
        major : "Akuntasi",
        isGraduated : false
    }
]
// Read
function showStudents(){
    console.log(` Student List :`);
    for (let index = 0; index < students.length; index++) {
        if (students[index].isGraduated === true) {
            console.log(`${students[index].id}. [v] ${students[index].name}, ${students[index].major}`); 
        }else{
            console.log(`${students[index].id}. [ ] ${students[index].name}, ${students[index].major}`); 
        }
    }
}

function addStudent(name,major){
    let lastindex = students.length -1;
    let id = students[lastindex].id + 1;
    let isGraduated = false;

    students.push({
        id,name,major,isGraduated
    });
}

function updateStudent(id, namanya){
    let temp=[]
    for (let index = 0; index < students.length; index++) {
        if (students[index].id === id) {
            students[index].name = namanya
        }
        temp.push(students[index])
    }
    students = temp;
}

function deleteStudent(id){
    let temp = [];
    for (let index = 0; index < students.length; index++) {
        if (students[index].id !== id) {
            temp.push(students[index])
        }
        
    }
    students = temp;
}

showStudents()
addStudent("Santi","HRD")
showStudents()
updateStudent(2,"Yuni Sahara")
showStudents()
deleteStudent(3)
showStudents()
