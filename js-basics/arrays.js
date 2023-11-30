/*==========================================================================================
    ADDING ELEMENTS
=============================================================================================*/

const numbers = [3, 4];
console.log(numbers);  //   Output:(2) [3,4]

// dodaje na kraju array-a
numbers.push(5, 6);
console.log(numbers);  //   Output (4)[3,4,5,6]

//dodaje na pocetak array-a
numbers.unshift(1, 2);
console.log(numbers);  //   Output (6)[1,2,3,4,5,6]

//splice edituje postojeci array brisanjem i/ili dodavanjem novih elemenata: ubacujemo parametre:
// (naKojeMestoKreceIzmenArraya, kolikoSeElemenataBrise, staSeDodaje-moze vise)
numbers.splice(2, 0, 'a', 'b')
console.log(numbers); //   Output: (8)[1,2,'a','b',3,4,5,6]



/*==========================================================================================
    FINDING ELEMENTS
=============================================================================================*/

//Primitive types

//pod predpostavkom da koristimo poslednji numbers Outputa: (8)[1,2,'a','b',3,4,5,6]

console.log(numbers.indexOf('a'));   // Output 2
console.log(numbers.indexOf(1));   // Output 0
console.log(numbers.indexOf('1'));   // Output -1 -mora se obratiti paznja na  tip elementa
console.log(numbers.indexOf('g'));   // Output -1   -ako ne postoji

numbers.push(5);
console.log(numbers);  //   Output [1,2,'a','b',3,4,5,6,5]

console.log(numbers.lastIndexOf(5));   // Output 8

//da li neki element postoju u array-u
console.log(numbers.indexOf(1) !== -1);  // ako vraca true ima ga u listi  , ako vraca false nema ga
console.log(numbers.includes(1)); //isto kao prethodno samo lepse, treba da vrati true ako ga ima 

//pronalazi od odredjenog mesta

console.log(numbers.indexOf(5, 7));   // Output 8,  nece ukljuciti onaj na 6.


//reference types

const coursesQA = [
    { id: 1, name: 'QA manual tester' },
    { id: 2, name: 'QA automated tester' }
];
coursesQA.includes({ id: 1, name: 'QA manual tester' }); //   will return false

coursesQA.find(function (course) {
    course.name === 'QA automated tester';
});
console.log(course); // Output:   {id:2, name:'QA automated tester'}



courses.find(function (course) {
    course.name === 'zxr';//ako trazimo nesto cegha nema
});
console.log(course);    // Output:  undefined


/*==========================================================================================
    ARROW FUNCTIONS
=============================================================================================*/
//ako koristimo ranije definisane kurseve

const course = courses.find(course => course.name === 'QA manual tester');
console.log(course);       //   Output:      { id: 1, name: 'QA manual tester' }

/*==========================================================================================
    REMOVING ELEMENTS FROM ARRAY
=============================================================================================*/
const brojevi = [1, 2, 3, 4];

//na kraju 
const last = brojevi.pop();
console.log(brojevi);  //   Output (3)[1,2,3]
console.log(last); //   Output 4


//sa pocetka
const first = brojevi.shift();
console.log(first); //  Output 4
console.log(brojevi);  //Output (2)[2,3]

//sa sredine ako bi radili sa originalnim brojevima [1, 2, 3, 4], zakomentarisati prethodne redove
brojevi.splice(2, 1);
console.log(brojevi);   // Output bi bio (3)[1,2,4]


/*==========================================================================================
    EMPTYING AN ARRAY
=============================================================================================*/
let nummbers = [1, 2, 3, 3, 4, 5, 8];

//jedan nacin je da ga proglasimo praznim
numbers = [];     //  ako bi bio sam, nakon sto ga proglasimo praznim posle nekog vremena garbage collector bi pokupio ovaj niz, ne moze const -const ne moze da se menja, ,mora let
let anotherNumbers = numbers     //ako bi ga referencirao drugi array onda ne bi


//drugi nacin je da mu dodelimo lenght
numbers.length = 0;

//treci nacin
numbers.splice(0, numbers.length);

//cetvrti nacin
while (numbers.length > 0)
    numbers.pop();//nije dobro ako array ima jako puno elemenata


console.log(numbers);   //u svim slucajevima bi bile prazni array, prvi i drugi su neki kao best practise po Moshu barem


/*==========================================================================================
    COMBINING AND SLICING ARRAYS
=============================================================================================*/

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];


// konkatenacija tj spajanje array
const combined = firstArray.concat(secondArray);
console.log(combined); // Output (6)[1,2,3,4,5,6]

// secenje arraja, da se izdvoji neki deo arraya , dodeljuju se parametri gde da krene "parce"tj slice i gde da zavrsi
// u ovom slucaju pocinje od drugog indeksa sto je broj 3 a zavrsava se pre indeksa 4
const slicedArray = combined.slice(2, 4);
console.log(slicedArray);   // Output (2)[3,4]

//ili krenuvsi od pocetnog
const slice2 = combined.slice(2); // Output (4)[3,4,5,6]



//kada koristimo objekte unutar array-a
const forthtArray = [{ id: 1 }];
const fifthArray = [4, 5, 6];

const combined2 = forthtArray.concat(fifthArray);  // prilikom konkatenacije arraya objekat se ne kopira 
//direktno vec se kopira samo njegava referenca to znaci ako odemo na forthtArray i promenimo njegov vrednost na id =10
forthtArray[0].id = 10;

const slicedArray2 = combined2.slice();//przan slice vraca kopiju arraya

console.log(combined2);   //i ovde ce se promeniti na 10
console.log(slicedArray2); //i ovde ce se promeniti na 10

/*==========================================================================================
    THE SPREAD OPERATOR
=============================================================================================*/
const combined3 = [...firstArray, ...secondArray];   //  ista logika samo lepse ispisano: const combined2 = forthtArray.concat(fifthArray);
const copy = [...combined3]

/*==========================================================================================
    ITERATING  AN ARRAY
=============================================================================================*/

const numbers = [9, 8, 7, 6];
for (let number of numbers)
    console.log(number);

numbers.forEach(function (number) {
    console.log(number);
});

//isto kao prethodno samo lepse napisano:
numbers.forEach(number => console.log(number));
numbers.forEach((number, index) => console.log(number));

/*==========================================================================================
    JOINING ARRAYS
=============================================================================================*/

const joined = numbers.join(',');

console.log(joined); //output 9,8,7,6

const message = 'This is my first message';
const parts = message.split('');
console.log(parts); //output (5)["This","is","my","first","message"]

const combined4 = parts.join('-');
console.log(combined4) //output  This-is-my-first-message


/*==========================================================================================
    SORTING ARRAYS
=============================================================================================*/

const brojke = [2, 3, 1];
brojke.sort();
console.log(brojke);//[1,2,3]

brojke.reverse();
console.log(brojke);//[3,2,1]


//sa objektima
const kursevi = [
    { id: 1, name: 'manual tester' },
    { id: 2, name: 'automated tester' }
];

const nameA = a.name.toUpperCase();
const nameB = b.name.toUpperCase();

kursevi.sort();//nece se nista desiti u smisluda ce da sortira
//ono sto moramo uraditio je da koristimo funkciju sort
kursevi.sort(function (a, b) {
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
/*
automated tester ce biti prvi, samo obratiti paznju na velika i mala slova, 
svakom karakteru je dodeljen broj tako da aa nije isto sto i AA (ascii table -American Standard Code or Information Interchange),
zato je dobro da se ukljuci upercase ili lowercase  u svakom slucaju isti svuda
*/

/*==========================================================================================
    TESTING ELEMENTS OF AN ARRAY
=============================================================================================*/
const numberrs = [1, -1, 2, 3];

const allPositive = numberrs.every(function (value) {
    return value >= 0;
});

console.log(allPositive); // vraca true za npr const numberrs = [1, 2, 3]; a false za npr const numberrs = [1,-1, 2, 3]; svi moraju biti true ako je bar jedan false bice false


const somePositive = numberrs.some(function (value) {
    return value >= 0;
});
console.log(somePositive);//ako je bar jedan  true vraca true




/*==========================================================================================
    FILTERING AN ARRAY
=============================================================================================*/
const noombers = [1, -1, 2, 3];
const filtered = noombers.filter(n => n >= 0);
console.log(filtered)  //dace samo pozitivne brojeve, primena da prikaze restorane kori rade u odredjeno doba, rating veci od npr 4.5 i slicno

/*==========================================================================================
   MAPPING AN ARRAY
=============================================================================================*/
//Map metodu koristimo da mapiramo svaki element u array-u u nesto drugo , npr html ili u objekte
//html
const items = filtered.map(n => '<li>' + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

//object
const objekti = filtered.map(n => {
    return { value: n };
});
console.log(objekti);
//map i filter su chainable , ne moraju se posebno definisati konstante vec se direktno naredbe mogu nastaviti, kod je citiji:
//to sto sam napisala gore je sto kao i :

noombers
    .filter(n => n >= 0)
    .map(n => ({ value: n }));

//moze se ponavljati vise puta:
const items4 = noombers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items4);

/*==========================================================================================
    REDUCING AN ARRAY
=============================================================================================*/
//koristimo vec napisan noombers array

let sum = 0;
for (let n of noombers)
    sum += n;
console.log(sum);

//isto to moze da se uradi i preko redducing metoda
/*
a=0   c=1  => a=1
a=1   c=-1  => a=0
a=0   c=2  => a=2
a=2   c=3  => a=5
*/
const sumToo = noombers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

//mozemo i da ne inicijalizujemo accumulator pa ce poceti od prve vrednosti --samo gubimo prvi red...

/*==========================================================================================
    VEZBA1 ARRAY FROM RANGE
=============================================================================================*/
const numbersRange = arrayFromRange(-10, -4);
console.log(numbersRange);
function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
    /* 
    u slucaju  -10,-4  Output: (7)[-10,-9,-8,-7,-6,-5,-4], 
    ako damo (1,4) output ce biti (4)[1,2,3,4]
    ako damo (4,-1)  output ce biti prazan array
    */
}

/*==========================================================================================
    VEZBA2 INCLUDES
=============================================================================================*/
const numbers4 = [1, 2, 3, 4];

console.log(includes(numbers4, -1));
function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

/*==========================================================================================
    VEZBA3 EXCEPT
=============================================================================================*/
//koristimo istu numbers4 aray
const output2 = except(numbers, [1, 2]); //stampace (2) [3,4]
console.log(output2)

function except(array, excluded) {
    //inicijalizujemo prazan array
    const output2 = [];
    //iteriramo po originalnom arrayu i proveravamo da li je element  excluded array-u koji moze da sadrzi jedan ili vise elemenata
    for (let elenemt of array)
        // ako nije broj koji treba da izbacimo stavljamo ga u novi (output2) array
        if (!excluded.includes(element))
            output2.push(elenemt);
    return output2;
}

/*==========================================================================================
    VEZBA4 MOVING AN ELEMENT, premesti broj 1 na drugo mesto 
=============================================================================================*/
//move element trazi od parametara: array,  indeks elementa koji se premesta i indeks mesta na koji se premesta, obratiti paznju na broj elemenata 
const numbers5 = [1, 2, 3, 4];
const output5 = move(numbers5, o, 1);
console.log(output5);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.log('Invalid Offset!');
        return;
    }
    const output5 = [...array];
    const element = output5.splice(index, 1)[0];
    output5.splice(index + offset, 0, element);
    return output5;
}

/*==========================================================================================
    VEZBA5 COUNT OCURRENCES, koliko se puta dati broj ponavlja u nizu
=============================================================================================*/
const numbers6 = [1, 2, 3, 4];
const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(arrary, searchElement) {
    return arrary.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0)
}

/*==========================================================================================
    VEZBA6 GET MAX, da da najvecu vrednost iz niza
=============================================================================================*/
const numbers7 = [1, 2, 3, 4];
/*
jedan nacin da se uradi:

const  max = getMax([]);
console.log(max);
function getMax(array){
    if (array.length===0) 
        return undefined;
    let max = array[0];
    for (let i=1; i<array.length; i++)
        max = array[i];
    return max;
*/
//drugi nacin:
const max = getMax([]);
console.log(max);
function getMax(array) {
    if (array.length === 0)
        return undefined;
    array.reduce((accumulator, current) => {
        return (current > accumulator) ? current : accumulator;
    });
}


/*==========================================================================================
    VEZBA7 mOVIES: da izlista redom padajuci sve filmove iz 2018 sa rejtingom vecim od 4, ispisi njihove nazive
=============================================================================================*/
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2017, rating: 4.7 },
    { title: 'c', year: 2018, rating: 4.8 },
    { title: 'd', year: 2018, rating: 3.1 },
    { title: 'e', year: 2018, rating: 2.8 },
    { title: 'f', year: 2019, rating: 4.9 },
    { title: 'l', year: 2020, rating: 2.5 },
    { title: 'z', year: 2021, rating: 3.9 }
]

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);