/*===================================================================================================================
CONDITIONAL STATEMENTS:   if...else
                          Switsh...case
====================================================================================================================*/

let hour = 10;//mozemo menjati ako pise 10h bice prva, ako pise 15 druga,a za 23 bice treca izjava

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else
    console.log('Good evening');

let role = 'guest';
switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    case 'admin':
        console.log('Admin user');
        break;
    default:
        console.log('Unknown user');
}

if (role === 'guest' && hour > 12) console.log('Guest');
else if (role === 'moderator') console.log('Moderator')
else console.log('Unknown user')

/*====================================================================================================================
LOOPS:  for,  while,  do...while ,  for ...in ,  for... of
 ====================================================================================================================
    FOR LOOP
====================================================================================================================*/

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

/*==================================================================================================================
    WHILE
===================================================================================================================*/
let t = 0;
while (t <= 5) {
    if (t % 2 !== 0) console.log(t);
    t++;
}

/*==================================================================================================================
    DO WHILE
===================================================================================================================*/
let m = 9;
do {
    if (m % 2 !== 0) console.log(m);
    m++;
} while (m <= 5);//uvek se izvrsava barem jednom

/*==================================================================================================================
    INFINITE LOOPS
===================================================================================================================*/

let r = 0;
while (r < 5) {
    console.log(r)
    //r++     //ako zaboravim da inkrementiram ili mi inkrementacija ostane zakometarisana
}

while (true) {

}

do { } while (true);

for (let i = 0; i > 0;//i++){    //ako zaboravim da inkrementiram ili mi inkrementacija ostane zakometarisana
    console.log{ 'infinite loop' }

/*==================================================================================================================
    FOR IN LOOPS
===================================================================================================================*/

const person = {
    ime: 'Zeljka',
    startost: 36
};
for (let key in person)
    console.log(key, person[key]);

const boje = ['crvena', 'palava', 'narandzasta', 'zelena']
for (let index in boja)
    console.log(index, boje[index]);


/*==================================================================================================================
    FOR OF LOOPS
===================================================================================================================*/

for (let boja of boje)
    console.log(boja); //iterirace po listi i istampace sve boje

/*==================================================================================================================
    BREAK
===================================================================================================================*/
let w = 0;
while (w <= 10) {
    if (w === 5) break;
    console.log(w);
    w++
}
//kada se pokrene bez brake imacemo u logu 0-10 ispis vrednosti, a kada se doda brake komada istampace samo 0-5
/*==================================================================================================================
   CONTINUE
===================================================================================================================*/
let y = 0;
while (y <= 10) {
    if (y % 2 === 0) {
        y++;
        continue;
    }
    console.log(y);
    y++
}//nece se toliko korititi , sa kontinue komandom prelazimo na sledecu iteraciju


/*==================================================================================================================
   EXERCISES
===================================================================================================================*/

/*===================================================================================================================
vezba  maksimum od dva broja
====================================================================================================================*/
let number = max(5, 10);
console.log(number);
function max(a, b) {
    return (a > b) ? a : b;
}//za (5, 3) vratice 5, za (5, 10) vratice 10

/*====================================================================================================================
vezba is landscape uzimma dva parametra, sirinu i visinu i poredi ih, ako je sitina veca od visine vraca true
====================================================================================================================*/
console.log(isLandscape(500, 300))  //(500, 300) vrtaice true, (500, 1000)vratice false


function isLandscape(width, height) {
    return (width > height);
}

/*=================================================================================================================================
fizzbuzz vezba :
    deljivo sa 3 fiz 
    deljivo sa 5 buzz 
    deljivo sa 5 i 3 fizbuzz, 
    nije deljiv sa nijednim vraca input 
    a bilo sta sto nije broj vraca Nije broj
===================================================================================================================================*/
const output = fizzBuzz(15);  //3 fiz, 5 buzz, 15 FizBuzz, 7 7, '4' Not a number, false NaN
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;      //'Not a number';
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return input;
}

/*====================================================================================================================
vezba uzima brzinu kola, ako je limit 70 km , ako vozili vozi brzinom do limita  dobijemo ok, preko:  
za svakih 5km/h preko se dobija 1poen, ako fobije viseod 12 poena licenca se ukida
====================================================================================================================*/
checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerHPoint = 5;

    if (speed < speedLimit + kmPerHPoint) {
        console.log('OK')
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerHPoint)
    if (points >= 12)
        console.log('Licence suspended');
    else
        console.log('Points', points);
}

/*====================================================================================================================
vezba parni i neparni brojevi
====================================================================================================================*/

showNumbers(10);//ispisace sve brojeve od 0 do 10 i za svaki ce napisati da li je paran ili neparan
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++)
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
}

/*====================================================================================================================
vezba truthy i falsy
====================================================================================================================*/
const isActive = true;
const ime = 'Zeljka';//Truthy, ako bi bio prazan string imali bi falsy
if (ime) console.log('Hello');

const array = [1, 2, 3, 4, null, undefined, 0]
function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

/*====================================================================================================================
vezba show properties
====================================================================================================================*/
const movie = {
    title: 'A movie',
    releaseYear: 2023,
    rating: 4.5,
    director: 'B M'
};
showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

/*====================================================================================================================
vezba sum of multiples
====================================================================================================================*/
console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let z = 0; z <= limit; z++)
        if (z % 3 === 0 || z % 5 === 0)
            sum += z;
    return sum;
}


/*====================================================================================================================
vezba ocena ucenika
====================================================================================================================*/
const marks = [80, 80, 50, 60];
function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return "nedovoljan 1";
    if (average < 70) return "dovoljan 2";
    if (average < 80) return "dobar 3";
    if (average < 90) return "vrlo dobar 4 ";
    return 'odlican 5';
}
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.lenght;
}
/*====================================================================================================================
vezba zvezde, u svakom redu napisi toliko zvezdica
====================================================================================================================*/
showStars(2);
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern = +'*';
        console.log(pattern);
    }
}

/*====================================================================================================================
vezba primarni brojevi
====================================================================================================================*/
showPrimes(20);  //za npr 20 istampace 2 3 5 7 11 12 17 19
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;

}