var brand = "mala paractica" ;
let counter =100;
const token = "abc123";

counter =200;
console.log(counter);

// comentario 
/*
comentario multiline :)
*/

// interpolacion
let interpolacion = "el valor de counter es : $(counter)";
console.log(interpolacion);
console.log("el valor de counter es:",counter);
console.log("el valor de counter es:"+counter);


const personas = [
    [{
        "id": 1,
        "first_name": "Olimpia",
        "last_name": "Stelfax",
        "email": "ostelfax0@jalbum.net",
        "gender": "Female",
        "ip_address": "121.215.15.49"
      }, {
        "id": 2,
        "first_name": "Diandra",
        "last_name": "McCrudden",
        "email": "dmccrudden1@hp.com",
        "gender": "Female",
        "ip_address": "247.30.115.188"
      }, {
        "id": 3,
        "first_name": "Elora",
        "last_name": "Brownsell",
        "email": "ebrownsell2@senate.gov",
        "gender": "Female",
        "ip_address": "85.17.88.75"
      }, {
        "id": 4,
        "first_name": "Wynnie",
        "last_name": "Lingley",
        "email": "wlingley3@apple.com",
        "gender": "Female",
        "ip_address": "111.216.243.143"
      }, {
        "id": 5,
        "first_name": "Gwenny",
        "last_name": "Lanfranchi",
        "email": "glanfranchi4@china.com.cn",
        "gender": "Female",
        "ip_address": "39.14.98.238"
      }, {
        "id": 6,
        "first_name": "Jareb",
        "last_name": "Escale",
        "email": "jescale5@smh.com.au",
        "gender": "Male",
        "ip_address": "144.213.204.152"
      }, {
        "id": 7,
        "first_name": "Demetra",
        "last_name": "Mizzen",
        "email": "dmizzen6@bloglovin.com",
        "gender": "Female",
        "ip_address": "149.40.152.66"
      }, {
        "id": 8,
        "first_name": "Karol",
        "last_name": "Leadbeater",
        "email": "kleadbeater7@hhs.gov",
        "gender": "Female",
        "ip_address": "70.242.85.32"
      }, {
        "id": 9,
        "first_name": "Sheelagh",
        "last_name": "Swansborough",
        "email": "sswansborough8@cbc.ca",
        "gender": "Genderqueer",
        "ip_address": "156.54.206.190"
      }, {
        "id": 10,
        "first_name": "Kassia",
        "last_name": "Guymer",
        "email": "kguymer9@digg.com",
        "gender": "Female",
        "ip_address": "212.196.224.119"
      }]
];

console.table(personas);
