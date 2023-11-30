/*====================================================================================================================
    OBJECTS
====================================================================================================================*/
/*
Ojbekti su strukture koje grupišu podatke i funkcionalnosti. Sastoje se od ključeva i vrednosti.
Svaki objekat je instanca određenog tipa objekta, i može imati svojstva koja opisuju stanje objekta, 
kao i metode koje definišu ponašanje objekta.
Objekti u JavaScriptu mogu biti i ugrađeni (kao što su String, Array, Object) ili korisnički definisani. 
Kada kreirate objekte, možete pristupiti njihovim svojstvima i metodama pomoću tačke, na primer: objekat.svojstvo ili objekat.metoda().
 */
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw circle');
    }
};

circle.draw();//metoda

/*====================================================================================================================
    FACTORY FUNCTIONS
====================================================================================================================*/
//ako zelimo da napravimo dva circle objekta , pravljenjem na gornji nacin dupliciramo  kod a postoji i mogucnost da ponavlajmo ako postoji bug
//camelNotation

function createCircle(radius, location) {
    return {
        radius, //isto sto i:    radius: radius,    kada se koriste iste key i value
        draw() {
            console.log('draw circle');
        }
    };
}

const circle1 = createCircle(5);

circle1.draw();
const circle2 = createCircle(10);
circle2.draw();

/*====================================================================================================================
    CONSTRUCTOR FUNCTIONS
====================================================================================================================*/
/*
kreira se funkcija ciji je zadatak da se pravi objekat
this kreira prazan objekat
PascalNotation
new operator  kreira novi prazan javascript objekat, daje nam pristup this parametrima i 
 vraca objekat iz date funkcije kao da smo napisali return this-ovo se desava ispod haube

 nema razlike izmedju ovog i prethodnog factory , pitanje je preferencije, izabratio jedan i drzati ga se
*/
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circle3 = new Circle(80);

/*====================================================================================================================
    DYNAMIC NATURE OF OBJECTS
====================================================================================================================*/
//uvek se mogu dodavati nove osobine objektima ili da se oduzmu postojece

const krug = {
    radius: 1
};
console.log(krug);

krug.boja = 'zuta';
console.log(krug);

krug.crtaj = function () { }
console.log(krug);

delete krug.boja;
delete krug.crtaj;
console.log(krug);

/*====================================================================================================================
    CONSTRUCTOR PROPERTY
====================================================================================================================*/
//svaki objekat u JS ima osobinu construktor koja se koristi da napravi tj objekat

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(80);
/*
u konzoli kucamo: another.constructor i dobijamo  funkciju:f function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
kada ukucamo circle.constructor dobijamo f Object(){[native code]}-vidimo da je to funkcija-ovo je nacin na koji js engine radi
*/

/*====================================================================================================================
    FUNCTIONS ARE OBJECTS
====================================================================================================================*/
/*
kada za prethodnu funkciju u konzoli kucamo:
         Circle.name       dobicemo  'Circle' 
         Circle.lenght        -||-    1
         Circle.constructor   -||-   f Object(){[native code]}
*/
const Circle1 = new Circle('radius', `
this.radius = radius;
this.draw = function () {
    console.log('draw');
}
`);

const another2 = new Circle1(2);

//moze se pozivati funkcija
Circle.call({}, 1);
Circle.apply({}, 1);
/*====================================================================================================================
    VALUE VS RESFERENCE TYPES
====================================================================================================================*/
/*
Value types (primitives) : Number, String Boolean, Symbol, undefined , null
Reference types : Object, Function, Array (obzirom da su funkcije objekti i arrays su isto objekti imamo zapravo samo objekte :D)

Objekti i primitives se ponasaju razlicito i to je jako vazno razumeti!
 */

//x i y su dve nezavisne promenljive, kada pogledamo  koliko je x: u konzoli ukucam x  bice 10 za  y isto 10
let x = 10;
let y = x;
//kada promenimo x u 201 proverimo ponovo u konzoli x ce bit 201 y ce ostati 10
x = 201;
//kada to isto pokusamo sa objektima:
let xy = { value: 10 };
let yy = x;
//kada promenimo x u 201 proverimo ponovo u konzoli x ce bit 201 y ce se promeniti isto
x.value = 201;


//ako definisemo broj i funkciju increase
let number = 10;
function incerase(number) {
    number++;
}
incerase(number);
console.log(number);//videcemo samo 10, nije se povecalo jer je broj let number=10; u potpunosti nezavisan od broja unutar funkcije increase


//ako bi zamenili da bude objekat

let number1 = { value: 10 };
function incerase(number1) {
    number1.value++;
}
incerase(number);
console.log(number);//u ovom slucaju videcemo 11 tj inkrementiran broj jer pozivamo objekat kroz referencu

/*====================================================================================================================
    ENUMERATING PROPERTIES OF AN OBJECT
====================================================================================================================*/

const circle5 = {
    radius: 1,
    draw: function () {
        console.log('draw circle5');
    }
};


for (let key in circle5)
    console.log(key, circle5[key]);     //u konzoli cemo dobiti da je radius 1 i funkciju draw f draw(){console.log('draw circle5');}

for (let key of circle5)
    console.log(key);   //dobice se greska da circle5 nije iterabilan sto je i logicno jer se for of loop koristi za iteriranje arraya ili mapa OBJEKAT NIJE ITERABILAN

for (let key of Object.keys(circle5))
    console.log(key);   //dobicemo radius i draw Object.keys(circle5) ovaj metod koji vraca string array i zato mozemo na ovaj nacin da koristimo for of

for (let entry of Object.entries(circle5))
    console.log(entry);  //jos jedan nacin da dobijemo pristup svim properti-ima i metodama u nekom objektu

if ('radius' in circle5) console.log('yes') //nacin da proverimo da li se neki metod ili properti nalaze u nekom objektu

/*====================================================================================================================
    CLONING AN OBJECTE
====================================================================================================================*/
const circle6 = {
    radius: 1,
    draw: function () {
        console.log('draw circle5');
    }
};
/*
u modernom js koritismo metod Object.assign ciji su argumenti target object ili postojeci objekat-ima razlike
moze se dodati jedan ili vise sorce objekata (circle6) i kopira ga u novom objektu {}-ovo ne mora biti prazan objekat , 
moze biti i neki vec postojeci i na kraju vraca kao rezultat  
*/
const another3 = Object.assign({}, circle6);
console.log(another3);//istampace sve iz circle6

const another4 = Object.assign({
    color: 'yellow'
}, circle6);
console.log(another4);  //  istampace sve iz circle6 i jos novu boju kao dodatni postojeci properti

//jos jedan veoma elegantan i jednostavan nacin da se klonira objekat:koristeci spread operator
const another5 = { ...circle6 };
console.log(another5);  //  stampace sve iz circle6

/*====================================================================================================================
    GARBAGE COLLECTOR
====================================================================================================================*/
/*
Dealokacija memorije (engl. memory deallocation) je proces oslobađanja zauzete memorije koja više nije potrebna za izvođenje programa. 
Kada se dinamički alocira memorija tijekom izvođenja programa, važno je osigurati da se ta memorija oslobodi nakon što više nije potrebna 
kako bi se izbjegli problemi s curenjem memorije.
U jezicima poput C-a ili C++, programer ručno vrši alokaciju i dealokaciju memorije pomoću funkcija poput malloc i free (u C-u) 
ili new i delete (u C++-u). Dealokacija memorije znači oslobađanje memorije koja je prethodno alocirana, čime se ta memorija vraća 
sustavu kako bi je mogao ponovno koristiti.
Garbage Collector u JavaScriptu prati referenciranje objekata. Kada objekt više nije referenciran od strane nijedne varijable ili 
struktura podataka,garbage collector prepoznaje da taj objekt više nije dostupan i automatski ga oslobađa.
*/

function example() {
    let obj = { name: 'John' };  // Objekt je alociran

    // Rad s objektom...

    // Objekt se više ne koristi
    obj = null;  // Referenca na objekt je postavljena na null

    // Garbage collector će prepoznati da objekt nije referenciran
    // i automatski će ga dealocirati.
}

// Poziv funkcije
example();

/*====================================================================================================================
    MATH
====================================================================================================================*/
/*
JavaScript ima ugrađeni objekt Math koji pruža različite matematičke funkcije. 
Evo nekoliko često korištenih funkcija dostupnih putem objekta Math:
*/
let roundedNumber = Math.round(4.7); // Output: 5
let floorNumber = Math.floor(4.7); // Output: 4
let ceilNumber = Math.ceil(4.2); // Output: 5
let randomValue = Math.random(); // Output: Pseudo-slučajni broj između 0 i 1
let maxNumber = Math.max(10, 5, 8); // Output: 10
let minNumber = Math.min(10, 5, 8); // Output: 5
let result = Math.pow(2, 3); // Output: 8
let squareRoot = Math.sqrt(9); // Output: 3


/*====================================================================================================================
    STRING
====================================================================================================================*/
/*
U JavaScriptu, stringovi se često koriste za rad s tekstu, a postoje različite metode i svojstva koje pruža String objekt. 
Evo nekoliko osnovnih primjera korištenja String objekta:
*/
//  stvaranje string-a koristeći jednostruke ili dvostruke navodnike.
let greeting = 'Hello, World!';
let message = "This is a string.";

//  kao string primitive
const poruka = 'Zdravo svima!';
//  kada koristimo string primitiv i stavimo tacku: poruka. javaskript engine automatski ovo upakuje kao objekat pa imamo dostupne razne metode
poruka.charCodeAt();
poruka.length();
poruka.startsWith('Zdravo');    //  varca true
poruka.startsWith('zdravo');  //  varca false - case sensitive!!!

//  direktno kao string objekat
const josJednaPoruka = new String('Zdravo i tebi!')

//  Svojstvo length omogućuje vam dobivanje duzine stringa.
let str = "JavaScript";
console.log(str.length); // Output: 10

//  Možete pristupiti pojedinom znaku u stringu koristeći indeks.
let str1 = "JavaScript";
console.log(str[0]); // Output: "J"

//  Korištenjem operatora + možete spojiti dva stringa
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"

//  Metoda concat() takođe se koristi za spajanje stringova.
let str3 = "Hello, ";
let str2 = "World!";
let combinedString = str3.concat(str2);
console.log(combinedString); // Output: "Hello, World!"

//  Metoda substring() vraća podstring između dvije pozicije
let str4 = "JavaScript";
let substring = str4.substring(4, 8);
console.log(substring); // Output: "Script"

//  Metoda indexOf() vraća indeks prvog pojavljivanja određenog podstringa
let sentence = "This is a sample sentence.";
let indexOfSample = sentence.indexOf("sample");
console.log(indexOfSample); // Output: 10

//  Metoda replace() zamjenjuje prvo pojavljivanje određenog podstringa drugim stringom. prvo ostaje neizmenen!
let sentence2 = "This is a sample sentence.";
let replacedSentence = sentence2.replace("sample", "modified");
console.log(replacedSentence); // Output: "This is a modified sentence."
console.log(sentence2);    // Output : "This is a sample sentence.";



/*====================================================================================================================
    TEMPLATE LITERALS
====================================================================================================================*/
/*
 su način definisanja stringova u JavaScriptu koji omogućava uključivanje izraza unutar samog stringa.
  Ovo poboljšava čitljivost i fleksibilnost kada želite uključiti dinamičke vrednosti ili proracune unutar stringa. 
  Template literals koriste tildu -engl back tick (`) umesto jednostrukih ili dvostrukih navodnika.
  Upotreba template literala često čini kod čišćim i čitljivijim, posebno kada radite s dinamičkim podacima ili 
  kada želite olakšati kreiranje kompleksnih stringova.
*/
//Multiline Stringovi:
const message1 = 'This is my\n first message';  //\n novi red, ne vidi se lepo output
const message2 =
    `This is my 
    'first message`;

//Uključivanje Varijabli:
let name3 = "John";
let greeting3 = `Hello, ${name3}!`;
console.log(greeting3); // Output: "Hello, John!"

//Izračunavanje Izraza:
let a = 5;
let b = 10;
let sumMessage = `Sum of ${a} and ${b} is ${a + b}.`;
console.log(sumMessage); // Output: "Sum of 5 and 10 is 15."

//Uključivanje Funkcija:
let htmlContent = `
   <div>
      <h1>${title}</h1>
      <p>${content}</p>
   </div>
`;


/*====================================================================================================================
    DATE
====================================================================================================================*/
/*
U JavaScriptu, Date objekt koristi se za rad s datumima i vremenima. Evo nekoliko osnovnih primera korištenja Date objekta:
*/

//Trenutni Datum i Vreme:
const currentDate = new Date();
console.log(currentDate);

//Specifični Datum i Vreme:
const specificDate = new Date(2023, 0, 15, 12, 30, 0);
console.log(specificDate);

//Dohvaćanje Različitih Komponenti Vremena:

const now = new Date();
console.log(now.getFullYear()); // Godina
console.log(now.getMonth());    // Mesec (0-11)
console.log(now.getDate());     // Dan
console.log(now.getHours());    // Sat
console.log(now.getMinutes());  // Minute
console.log(now.getSeconds());  // Sekunde

//Postavljanje Različitih Komponenti Vremena:
let futureDate = new Date();
futureDate.setFullYear(2023);
futureDate.setMonth(6);  // jul (0-11)
console.log(futureDate);

//Formatiranje Datum Objekta:Formatiranje u String:
let formattedDate = now.toDateString();
console.log(formattedDate);

//Rad s Unix Vremenom:
let unixTime = now.getTime();
console.log(unixTime);


/*====================================================================================================================
vezba : address object
====================================================================================================================*/

let address = {
    street: 'Banijska',
    city: 'Novi Sad',
    zipCode: '21000'
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);  // Output:  street Banijska city Novi Sad zipCode 21000

/*====================================================================================================================
vezba Factory and Constructor functions
====================================================================================================================*/
//Factory
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

//Constructor
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    tjis.zipCode = zipCode;
}

/*====================================================================================================================
vezba Object equality proveriti da li su tri zadate adrese jednake i iste(upucuje li na isti objekat)
====================================================================================================================*/

let address1 = new Address2('a', 4, 'b', 'c');
let address2 = new Address2('a', 4, 'b', 'c');
let address3 = address1

function Address2(street, number, city, zipCode) {
    this.street = street;
    this.number = number;
    this.city = city;
    tjis.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.number === address2.number &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}
console.log(areEqual(address1, address2));  //  Output : true
console.log(areEqual(address1, address3));  //  Output : true

function areSame(address1, address2) {
    return address1 === address2;
}
console.log(areSame(address1, address2));  //   Output : false
console.log(areSame(address1, address3));  //   Output : true


/*====================================================================================================================
vezba  Blog post Object sa propertima title,body, autor, views, comments(autor, body), isLive  --true or false
====================================================================================================================*/
let post = {
    title: 'Blog Post',
    body: 'Pozdrav svima, ja sam Zeljka Tot i ovo je moj prvi Blog post.',
    author: 'Zeljka Tot',
    views: 10,
    comments: [
        { author: 'Lazar Tot', body: 'Cao! Pozdrav od Lazara!' },
        { author: 'Filip Tot', body: 'Cao! Pozdrav od Filipa!' },
        { author: 'Erne Tota', body: 'Cao! Pozdrav od Ernea!' },
        { author: 'Monika Varga', body: 'Cao! Pozdrav od Monike!' },
        { author: 'Nikoleta Varga', body: 'Cao! Pozdrav od Nikolete!' }
    ],
    isLive: true
};

console.log(post);

/*====================================================================================================================
vezba Construktor functions
====================================================================================================================*/

let post2 = new Post('Erne Tot', 'Pozdrav svima, ja sam Erne Tot i ovo je moj prvi Blog post.', 'Erne Tot');

console.log(post2);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

/*====================================================================================================================
vezba Price range Object
====================================================================================================================*/
let priceranges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxperperson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxperperson: 100 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 101, maxperperson: 1000 },
    { label: '$$$$', tooltip: 'Luxory', minPerPerson: 1001, maxperperson: 10000 }
];

let restaurants = [
    { averagePerperson: 5 }
];
