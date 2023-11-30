
console.log('How are you?Like my console?');

/*===========================================================================
    VARIABLES
============================================================================*/
/* var se vise ne koristi , sad se za deklarisanje promenljivih koristi let
    pravila:
        ne sme biti reserved keword (npr if, typeof,  ), 
        da ima smisla, treba da poisuje to sto oznacava, 
        ne sme poceti sa brojem, 
        ne sme da ima -  ili razmak
        camel notation: mojeIme, 
        case sensitive 
*/
let ime = 'Zeljka';
//  mozemo i dve zajedno inicijalizovati i / ili definisati, najbolja praksa je svaku pojedinacno
let srednjeIme, prezime = 'Tot';
console.log(ime);

/*============================================================================
    CONSTANTS
==============================================================================*/
//  vrendost promenljive moze da se menja, vrednost contante ne 
let interestRates = 0.3;
interestRates = 1;
console.log(interestRates);
const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);//    javice gresku za prethodni red u konzoli jer se konstante ne menjaju
//  najbolja praksa je ako znam da se nece menjati konstatu treba birati ako ce se vrednost menjati onda let!

/*========================================================================================
    PRIMITIVE TYPES /Value types
======================================================================================*/
/*
Jedna od kategorija (druga je reference types)
U ovkviru Primitive imamo:
    String
    Number
    Boolean
    undefined
    null
*/
let nadimak = 'Zelja'  //String literall
let starost = 36;           //Number literal
let isQA = true;        //Boolean literal
let humor = undefined; //undefined
let strpljenje = null;  //null kada zelimo da izbrisemo vrednost promenljive

/*==========================================================================================
    DINAMIC TYPING
=============================================================================================*/
/*
Jezici mogu biti staticnog i dinamicnog tipa.Staticni -kada se definise neka vrednost neke promenljive 
kod staticnog se vise ne moze manjati tokom runtime-a u zavisnosti koja mu je dodeljena, kod dinamicnog moze.

Otvorim html dokumet u brovzeru, idem na inspekt pa u konzolu: kucam:
    typeof ime ce prvo dati string
    kad napisem ime=1; 
    pa ponovo  typeof ime dace mi number 
    kad napisem ime=30.5; 
    pa ponovo  typeof ime dace mi opet number- za razliku od jave koja imaja int double float ovde imam samo number 
 
    za typeof isQA dace booleon za humor undefined a za strpljenje Object
*/
/*===============================================================================================
    OBJECTS
==================================================================================================*/
/*
kada radimo sa vise srodnih promenljivih npr ime prezime starost, humor 
strpljenje... mogu predstavljati odlike neke osobe umesto da deklarisemo vise promenjlivih, 
mozemo samo da deklarisemo  objekat osoba, ovim nas kod postaje cist

kada ovako stavimo u {} object literal u koji mozemo staviti vise key-value parova
*/
let osoba = {
    ime: 'Zeljka',
    prezime: 'Tot',
    majka: true
};
console.log(osoba);
//  ako zelimo da izmenimo neke od vrednosti npr ime da bude drugo mozemo to uraditi na dva nacina:
//  prvi je dot notation:-ovo se cesce koristi,cistije je i lakse
osoba.ime = 'Zelja';
console.log(osoba.ime);
//  drugi nacin je bracket notation
osoba['ime'] = 'Zeljana';

/*================================================================================================
    ARRAYS
==================================================================================================*/
/*
Koristimo ih u situacijama kada treba da imao liste objekata lista proizvoda u korpi 
ili lista boja koju je korisnik odabrao... stampanjem u kozoli vidimo da svaki element 
ima svoj indeks-pocinje od 0
kada potrazimo typeof naseg array-a u konzoli uvek ce biti objekat 
*/
let selectedColors = ['red', 'blue', 'white', 'green'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[4] = 'orange';     //  array se mogu siriti , mozemo mu dodavati elemente
console.log(selectedColors);    //  istampace prosiren array
selectedColors[5] = '2';     //  mozemo mu dodavati elemente i drugog tima, ne moraju svi biti isti
console.log(selectedColors);    //  istampace prosiren array
console.log(selectedColors.length);    //   istampace koliko elemenata ima 

/*====================================================================================================
    FUNCTIONS
====================================================================================================*/
/*
Funkcije su osnovni gradivni blokovi u javaskriptu, predstavljaju set izjava koje izvrsavaju odredjene 
radnje ili izracunavaju neku vrednost. Slicno kao metode u javi ali nije isto!!!
Funkcije su blokovi ponovno upotrebljivog koda koje možete definisati pomoću ključne reči function. 
Mogu biti samostalne ili deo objekta.Metode su funkcije koje su deo objekta. 
Kada je funkcija svojstvo objekta, naziva se metoda.
*/

//KADA VRSI ZADATU RADNJU:
// Funkcija pozdravi koja ima jedan parametar ime:
function pozdrav(ime) {
    console.log('Zdravo' + ime);
}
pozdrav('Zeljka');
pozdrav('Erne');
pozdrav('Lazar');
//funkcije mogu imati i vise parametara
function pozdrav(ime, prezime) {
    console.log('Zdravo' + ime + ' ' + prezime);
}
pozdrav('Zeljka', 'Tot');
pozdrav('Erne', 'Tot');
pozdrav('Lazar', 'Tot');

// Metoda (unutar objekta)
let osoba = {
    ime: 'Jovan',
    reciZdravo: function () {
        console.log(`Zdravo, ${this.ime}!`); // ovo je template literral, kraci nacin umesto da stalno koristimo navodnike
    }
};
pozdrav('Ana');        // Poziv funkcije
osoba.reciZdravo();     // Poziv metode

//KADA RACUNA
function kvadrat(broj) {
    broj * broj;
}
let broj = kvadrat(3);
console.log(broj);
//krace napisano:
console.log(kvadrat(5))

