# Tropical Farm

## SUMMARY

Seorang pengusaha bernama Vincent mempunyai beberapa perkebunan buah dan sayuran. Tibalah hari di mana akan panen buah dan sayuran, buah yang dimiliki memiliki 3 jenis dan sayuran yang dimiliki juga 3 jenis. Masing-masing jenis memliki harga jual yang berbeda dan akan di pannen dalam keranjang dan akan di jual.

## Outline

1. Peserta dapat paham tentang OOP
2. Peserta dapat mengaplikasikan teori OOP

## Task 1

Peserta ditugas untuk membuat `class` utama :

a. `Fruit`

Memiliki attributes berikut ini:

| Key         | Description                       |
| ----------- | --------------------------------- |
| id          | Nomor khusus tiap buah, increment |
| name        | Nama dari buah                    |
| type        | Jenis buah                        |
| price       | Harga buah                        |
| amount      | total buah yang di petik          |
| harvestedAt | waktu ketika di panen             |

b. `Vegetable`

Memiliki attributes berikut ini:

| Key         | Description                        |
| ----------- | ---------------------------------- |
| id          | Nomor khusus tiap sayur, increment |
| name        | Nama dari sayur                    |
| type        | Jenis sayur                        |
| price       | Harga sayur                        |
| amount      | total sayur yang di petik          |
| harvestedAt | waktu ketika di panen              |

## Task 2

Peserta membuat `inheritance class`::

a. `Apple`, `Orange`, dan `Other` dari class utama `Fruit`

b. `Potato`, `Carrot`, dan `Other` dari class utama `Vegetable`

## Task 3

Peserta membuat kelas factory `Warehouse` dengan attribute dan mmethod berikut:

- attributes

  - carts : berisi buah dan sayuran hasil panen
  - totalPrice : berisi total dari seluruh harga buah dan sayuran yang di jual
    panen.

  Contoh isi dari _carts_:

  ```js
  /*
  [
      {
          id: 1,
          name: 'NZ Apple Sweet',
          type: 'Apple',
          price: 150000,
          amount: 10,
          harvestedAT: new Date()
      },
      {
          id: 2,
          name: 'Ponkan Mandarin',
          type: 'Orange',
          price: 100000,
          amount: 5,
          harvestedAt: new Date()
      }
  ]
  */
  ```

- methoods:

  - harvest : memetik buah dan sayuran dan memasukan ke dalam cart.

    - amount : random antara 1 - 100
    - harvestedAt : menggunakan new Date()

    ```js
    harvest(name,type,price){
        // code here
    }
    ```

  - ship : mengeluarkan buah dan sayuran dari cart dan mengirim ke penjualan

    ```js
    ship(id){
        // code here
    }

    // Feedback
    // "NZ Apple Sweet" has been shipped.

    // Feedback jika tidak ada
    // Id 1 is not in the cart.

    // Ketika sudah di jual harga buah atau sayur akan di total kan ke dalam key `totalPrice`
    ```

  - showCarts: menampilkan seluruh buah dan sayuran yang ada dalam carts

  ```js
  /*
  There are 5 carts, which are:
  1. NZ Apple Sweet - Rp. 150000
  2. Ponkan Mandarin - Rp. 100000
  
  // Jika tidak ada carts
  There isn't any cart.
  */
  ```