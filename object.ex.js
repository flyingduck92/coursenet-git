/* 
  Change the following array into object 
  using a function with 
  
  let fruit = ["durian",75000,true]
  */

let fruit = ["durian", 75000, true]

function arrToObj(arr) {
  // let object = {}
  // object.jenis = arr[0]
  // object.harga = arr[1]
  // object.enak = arr[2]
  // return object

  let [idx1, idx2, idx3] = [...arr]
  return { jenis, harga, enak } = { idx1, idx2, idx3 }
}

let fruitObj = arrToObj(fruit)

// console.log(fruit)
// console.log(fruitObj)

/*
  Make a method from the following object to
  shows the profile

  Nama: caca
  Berat: 45kg
  Tinggi: 155cm
  Hobi: Nonton,Makan

*/

// let caca = {
//   name: "Caca",
//   weight: "45kg",
//   height: "155kg",
//   hobbies: ["Nonton", "Makan", "Membaca", "Ngopi"],
//   sebutkanHobby: function () {
//     console.log('Hobi Caca:')
//     for (let i = 1; i < this.hobbies.length; i++) {
//       console.log(`${i} ${this.hobbies[i]}`)
//     }
//   }
// }

// caca.sebutkanHobby()

// let student = {
//   name: "admin",
//   gpa: 3.21,
//   isGraduated: true,
//   skills: ["JavaScript", "PHP"],
//   address: {
//     city: "Jakarta Barat",
//     province: "DKI Jakarta"
//   },
//   //method
//   speak: function () {
//     // console.log(`My name is ${this.name}. Salam kenal`)
//     console.log('My name is ' + this.name + '. Salam kenal')
//   },
//   showAddress: function () {
//     console.log("My address in " + this.address.city + ", " + this.address.province)
//   }
// }

// console.log(student.name)
// console.log(student.skills)
// console.log(student.address.city)
// console.log(student.address.city)
// student.speak()
// student.showAddress()


/* 
  Features               Object            vs    Array
  Structure     - Key-value pairs          | Index Based
  Usability     - Labelled data (product)  | List
  How to Access - object.key/object['key'] | array[index]  

*/

/* 
  Array of Object
*/
let items = [
  { id: 1, name: "Iphone 15 Pro Max", type: "Gadget", price: 15000000, iaAvailable: true },
  { id: 2, name: "Samsung S25", type: "Gadget", price: 12500000, iaAvailable: false },
  { id: 3, name: "Asus ROG Phone", type: "Gaming Phone", price: 15000000, iaAvailable: true },
]

/* 
  Sample Output:
  1. [x] Iphone 15 Pro Max
  2. [ ] Samsung S25
  3. [x] Asus ROG Phone
*/
function showAvailablePhone(items) {
  for (let item of items) {
    let available = item.iaAvailable ? '✅' : '❌'
    let display = `${item.id}. ${available} ${item.name}`
    console.log(display)
  }
}

// showAvailablePhone(items)

const onlineStore = {
  storeName: "Toko Kelontong",
  produk: [
    {
      id: "POO1",
      name: "Kemeja Batik",
      price: 150000,
      category: {
        main: "Pakaian",
        sub: "Batik"
      },
      reviews: [
        {
          user: "user_1",
          rating: 5
        },
        {
          user: "user_2",
          rating: 5
        }
      ]
    }
  ]
}

console.log(onlineStore.produk[0].reviews)