// Rules : Aturan dalam membuat variable di dalam JS
// 1. Tidak dapat mengandung spasi
    /* salah
        var first name = "Setiawan"
    */
    // benar
        var firstname = "Setiawan";

// 2. Hanya dapat diawali oleh huruf, underscore dan dollar sign ($)
    /* salah
        var 1day = "monday"
    */
    // benar 
        var firstday = "monday";
        var _age = "15";
        var $quality = "good";
    // Kita juga dapat membuat 3 atau lebih variable dalam satu garis, contoh :
        var secday, _umur, $kualitas;

// 3. Hanya dapat terdiri dari huruf, angka, underscore, dan dollar sign ($)
    var totalbill, my_b1rthday, $cloud9;

// 4. Penulisan nama variable bersifat case sensitive
    var nextday = "lower case";
    var Nextday = "Upper case";
    // Kedua variable diatas dianggap oleh mesin sebagai dua variable yang berbeda.

    console.log("Console Log isi variabel penulisan tanpa spasi :");
    console.log(firstname);
    console.log("Console Log isi variabel huruf, underscore dan $ :");
    console.log(firstday);
    console.log(_age);
    console.log($quality);
    console.log("Console Log isi variabel dengan case sensitive :");
    console.log(nextday);
    console.log(Nextday);

    // Style penulisan nama variabel
    // Camel Case
    // Selalu diawali huruf kecil
    // Huruf pertama pada kata kedua dan seterusnya menggunakan huruf kapital
    var mNumber
    var ourLastNight

    // Snake_Case
    // Selalu menggunakan huruf kecil
    // Setiap kata dihubungkan dengan underscore
    var my_number
    var our_last_night

    // DATA TYPE
    // String
    // Menggunakan kutip 1 atau kutip 2
    var greet = "Hallo";
    var morning = 'Good Morning'
    var angka = "1234";

    // Number
    // Terdiri dari integer dan float
    // Integer, bilangan bulat
    var intOne = 123;
    var intTwo = 456;
    var intThree = 789;
    // Float, bilangan decimal
    var twoThree = 0.23;
    var pi = 3.14;
    var perfect = 8.99;

    // Boolean
    // Memiliki nilai True dan False
    var graduate = true;
    var sick = false;
    // cara memunculkan type data pada console
    // cara 1
    console.log('\nMemunculkan tipe data pada Variabel "graduate"');
    var tipeData = typeof(graduate);
    console.log(tipeData);
    // cara 2
    console.log('Memunculkan tipe data pada variabel "Sick"');
    console.log(typeof(sick));


    // Object
    // Variabel yang dapat menyimpan data lebih dari 1 dengan membuat variabel baru di dalamnya.
    var manusia = {namaDepan : "Setiawan", namaBlkg : "Harish"};
    // cara memunculkan value pada object "Manusia" adalah sebagai berikut:
    console.log('\nBerikut adalah value dari object "manusia"');
    console.log(manusia);
    console.log('Berikut adalah value pada object "manusia.namaDepan"');
    console.log(manusia.namaDepan);

    // Array
    // Variabel yang dapat menyimpan lebih dari 1 data dengan membuat index pada data tersebut, penjelasan lebih lengkap bisa cek di notion
    var days = ["Monday", "Tuesday", "Wednesday"];
    // cara memunculkan value pada string "days" adalah sebagai berikut :
    console.log('\nBerikut adalah value dari array "days" :');
    console.log(days)
    let index = 0;
    console.log('Berikut adalah value darri array index ke-'+index+' :');
    console.log(days[index]);