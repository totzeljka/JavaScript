
/*==========================================================================================
    FUNCTION DECLARATION
=============================================================================================*/
//decklared mogu da se pozivaju i pre definisanja, 
//expressions ne mogu , dobije se uncaught refference error: is not deffined.

//function delcaration
function walk() {
    console.log('walk');
}

//anonimusfunction expression
let run = function () {
    console.log('run')
};

//named function expression
let jogging = function jog() {
    console.log('run')
};

walk();
run();
jogging();

let move = run;
move();
run();

/*==========================================================================================
    HOISTING
=============================================================================================*/
/*
Hoisting u JavaScript-u se odnosi na to kako se deklaracije varijabli i funkcija podižu (hoist) 
na vrh svog obuhvata (scope) tokom faze podizanja (hoisting) faze izvršavanja koda. 
Ovaj koncept može izazvati neke neočekivane rezultate ako se ne razume potpuno.

Na primer, deklaracija varijable ili funkcije će se podići na vrh svog obuhvata,
 što znači da možete pristupiti varijabli ili funkciji pre nego što su stvarno deo koda. 
 Međutim, vrednost varijable se ne podiže, već ostaje neinicijalizovana sve do stvarne linije koda gde je dodeljena.
Važno je napomenuti da hoisting ne radi isto za sve vrste deklaracija. Na primer, deklaracije var koriste hoisting,
 ali deklaracije let i const ne. Takođe, izrazi dodeljivanja (assignment) neće biti podignuti, samo deklaracije.
*/

bark();

function bark() {
    console.log('bark');
}

talk();

let talk = function talking() {
    console.log('talk')
};
/*==========================================================================================
    ARGUMENTS
=============================================================================================*/
function zbir(a, b) {
    return a + b;
}
console.log(zbir(1));   //  1 + undefined = NaN



function razlika() {
    let total = 0;
    for (let value of arguments)
        total -= value;
    return total;
}
console.log(razlika(50, 14, 3, 2, 1));

/*==========================================================================================
    REST OPERATOR
=============================================================================================*/
function sabirak(popust, ...cene) {
    const total = cene.reduce((a, b) => a + b);
    return total * (1 - popust);
}

console.log(sabirak(0.25, 1250, 3000, 40000, 500));

/*==========================================================================================
    DEFAULT OPERATORS
=============================================================================================*/

function interest(principal, rate = 3.5, years = 5) {

    return principal * rate / 100 * years;
}
console.log(interest)(10000);  //1750


//ako ne definisem sve parametre , svi definisani idu na kraju!
function interest(principal, rate = 3.5, years) {

    return principal * rate / 100 * years;
}
console.log(interest)(10000);  //NaN moraju sve vrednosti posle prve definisane da budu definisane

/*==========================================================================================
    GETTERS AND SETTERS
=============================================================================================*/
const osoba = {

    firstName: 'Zeljka',
    lastName: 'Tot',
    get fullName() {
        return `${osoba.firstName} ${osoba.lastName}`;
    },
    set fullName(value) {
        const parts = value.split('');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


osoba.fullName = 'Zeljka VujatovTot';
console.log(osoba);

/*==========================================================================================
    TRY AND CATCH
=============================================================================================*/
const osoba1 = {
    firstName: 'Zeljka',
    lastName: 'Tot',

    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
        const parts = value.split('');
        if (parts.length !== 2)
            throw new Error('Please enter first and last name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    // osoba1.fullName = null;
    osoba1.fullName = '';
}
catch (e) {
    alert(e);
}
console.log(osoba1);

/*==========================================================================================
    LOCAL VS GLOBAL SCOPE
=============================================================================================*/
/*
Globalni opseg:
Varijable ili funkcije koje su deklarisane izvan bilo koje funkcije ili bloka koda imaju globalni opseg. 
Ove varijable mogu biti pristupačne bilo gde u kodu, uključujući i unutar funkcija.

Lokalni opseg:
Varijable deklarisane unutar funkcije ili bloka koda imaju lokalni opseg. Ove varijable su 
vidljive samo unutar funkcije ili bloka u kojem su deklarisane.
Kada se unutar funkcije kreira varijabla istog imena kao i globalna varijabla,
lokalna varijabla ima prednost unutar te funkcije.

Međutim, izvan te funkcije koristiće se globalna varijabla.
Važno je napomenuti da deklaracije var koriste funkcionalni opseg (function scope), 
dok deklaracije let i const koriste blokovni opseg (block scope), 
što znači da su ograničene blokom koda, kao što su petlje ili uslovi.
*/
const colour = 'red';
const message = 'hi';  //ispisace poruku 

function start() {
    const message = 'hi';   //uncaught refference errror, message not defined- out of scope
    if (true) {
        const anothermessage = 'bye';
        console.log(colour);  //red
        const colour = 'blue';
        console.log(colour); //blue
    }
    console.log(anothermessage);    //uncaught refference errror, message not defined- out of scope

    for (let i = 0; i > 5; i++) {
        console.log(i);
    }
    console.log(i);      //uncaught refference errror, message not defined- out of scope

    console.log(colour); //red

}

/*==========================================================================================
    LET VS VAR
=============================================================================================*/
/*
let i var su oba ključne reči za deklarisanje promenljivih u JavaScript-u,
ali postoji nekoliko ključnih razlika između njih, posebno u vezi opsega (scope) i ponašanja u odnosu na hoisting.

1. Opseg (Scope):
    var koristi funkcionalni opseg (function scope). 
        To znači da je opseg promenljive ograničen na funkciju u kojoj je deklarisana.
    let koristi blokovni opseg (block scope). Ovo znači da je opseg promenljive ograničen 
        na blok koda (npr. if, for, while).
2. Hoisting:
    var se podiže (hoisted) na vrh svog opsega tokom faze podizanja (hoisting), ali ostaje neinicijalizovan 
        do stvarne linije koda gde je deklarisan.
    let takođe ima fazu hoisting-a, ali neće biti inicijalizovan dok se ne dođe do linije koda gde je deklarisan.
        Pokušaj pristupa let pre deklaracije rezultiraće ReferenceError-om.

U novijim verzijama JavaScript-a, preporučuje se korišćenje let umesto var zbog jasnijeg opsega i 
izbegavanja nekih neželjenih ponašanja var-a.
 */
function exampleFunction() {
    if (true) {
        var x = 5;
    }
    console.log(x); // Output: 5
}

function exampleFunction() {
    if (true) {
        let y = 10;
    }
    console.log(y); // ReferenceError: y is not defined
}

console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10


console.log(b); // ReferenceError: b is not defined
let b = 20;
console.log(b); // Output: 20

/*==========================================================================================
    THIS 
=============================================================================================*/
/*
this ključna reč u JavaScript-u ima dinamičko značenje i često se koristi kako bi se referisalo na 
objekat koji TRENUTNO  izvršava kod ili funkciju. Ponašanje this zavisi o kontekstu u kojem se koristi.

Evo nekoliko situacija u kojima se this može koristiti:
    U globalnom opsegu:Kada se this koristi van svih funkcija, odnosi se na globalni objekat, koji u veb pregledaču obično 
    predstavlja window objekat.

    U funkciji, this može imati različite vrednosti u zavisnosti od načina poziva funkcije.
    Ako je funkcija deo objekta, this će se odnositi na taj objekat.

    Pomoću call, apply, ili bind metoda:Ove metode se koriste za postavljanje vrednosti 
    this tokom izvršavanja funkcije.

    Kada se funkcija koristi kao konstruktor (pomoću new ključne reči), 
    this se odnosi na novi objekat koji je upravo kreiran.
*/
const obj = {
    prop: "Ja sam properti objekta",
    logProp: function () {
        console.log(this.prop);
    }
};

obj.logProp(); // Output: "Ja sam properti objekta"

function globalFunction() {
    console.log(this);
}

globalFunction(); // U veb pregledaču, ovo će biti window objekat

const person = {
    name: "John",
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

const person2 = {
    name: "Jane"
};

person.greet.call(person2); // Output: "Hello, Jane"

function Person(name) {
    this.name = name;
}

const john = new Person("John");
console.log(john.name); // Output: "John"


/*==========================================================================================
    CHANGING THIS KEYWORD
=============================================================================================*/
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};
video.showTags();


// self pristup... nije preporucljivo koristiti
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    }
};
video2.showTags();


function playVideo() {
    console.log(this);
}
playVideo.call({ name: 'Zeljka' }, 1, 2);     //name :Zeljka
playVideo.apply({ name: 'Zeljka' }, [1, 2]);    //name :Zeljka
const fn = playVideo.bind({ name: 'Zeljka' });
fn();       //name :Zeljka
playVideo();  //window obj


//bind 
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};
video3.showTags();


//arrow functions-preporuka da se koristi
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};
video4.showTags();





/*==========================================================================================
    VEZBA1 SUM OF ARGUMENTS
=============================================================================================*/
console.log(sun(1, 2, 3, 4));
function sun(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}

/*==========================================================================================
    VEZBA2 POVRSINA KRUGA
=============================================================================================*/
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius;
    }
};
console.log(circle.area);

/*==========================================================================================
    VEZBA3 ERROR HANDLING
=============================================================================================*/
try {
    const numbers6 = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}
function countOccurrences(arrary, searchElement) {
    Array.isArray(arrary)
    throw new Error('Invalid array.')
    return arrary.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}


