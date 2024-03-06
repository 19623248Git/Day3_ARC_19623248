listKTP = [ //this is a demonstration of a list 
    { //person 1
        nik: 3172012345,
        nama: "aa",
        kota: "jakarta",
    },
    { //person 2
        nik: 31720678910,
        nama: "ba",
        kota: "bandung",
    },
    { //person 3
        nik: 19023812093,
        nama: "ca",
        kota: "Kota Baru"
    },
    { //person 4
        nik: 128903189023,
        nama: "da",
        kota: "Ganesha 🥶"
    }
]

//this function is used to output stuff
function reader(a){
    console.log(a);
}

//this is a demonstration of a callback function
function readlinefunction(input, callback){
    console.log("callback function called");
    input = "this is an output: " + input;
    callback(input);
}



//input interface from nodejs documentation
const readlineInterface = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

//input function
function readline (){
    readlineInterface.question(`I want you to randomly input anything: `, yourInput => {
        readlinefunction(yourInput, reader);
        readlineInterface.close();
      });
}  

//async function
async function getKTPlist(){
    console.log("--- wait for 10 seconds to get a surprise!! (async function) --- ")
    let mypromise = new Promise(function(resolve){
        setTimeout (function() {
            resolve("Thank you for waiting 10 seconds!! Here's a random list i made to showcase here")}, 10000);
    })
    console.log(await mypromise);
    listKTP.forEach(person => {
        console.log("NIK:", person.nik);
        console.log("Nama:", person.nama);
        console.log("Kota:", person.kota);
        console.log("--------------------");
    });
}

getKTPlist();

//callback function example via script
readlinefunction ("(via a function in the script, using the callback function)", reader);

//calling the input function
readline();
