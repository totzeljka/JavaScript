/*
Operatore u JavaScript-u koristimo za izvršavanje različitih operacija, poput matematičkih, 
poređenja i logičkih. 
Osnovne vrste operatora u JavaScript-u:
    aritmeticki:    + (sabiranje),- (oduzimanje),* (množenje),/ (deljenje),% (ostatak pri deljenju), ++ incrementacija , -- dekrementacija
    poredjenja:     == (jednako),=== (strogo jednako),!= (nije jednako),!== (strogo nije jednako),> (veće od),< (manje od),>= (veće ili jednako),<= (manje ili jednako)
    logicki:         && (i),|| (ili), ! (negacija)
    dodeljivanje vrednosti:    = (dodela vrednosti) +=, -=, *=, /= (skraćeni oblici dodele sa operacijama)
    bitwise: ???
*/
/*=================================================================================================================
    ARITMETICKI OPERATORI tj arithmetic operators
=================================================================================================================== */
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
//inkrementacija
console.log(++x); //vrednost ce biti prvo povecana za jedan i onda napisana u konzoli tj pisace odmah 11
console.log(x++); //prvo ce biti napisana vrednost x a potom inkrementirana za jedan,     10
//sledeci put kada se bude pozvala:                                     
console.log(x);  //bice inkrementirana za jedan u odnosu na prvu vrednost                 11
//na isti nacin ide i dekrementacija 
console.log(--x);  //imace vrednost u konzoli: 9
console.log(x--);  //imace vrednost u konzoli: 10
console.log(x);   //imace vrednost u konzoli: 9

/*=================================================================================================================
    DODELJIVANJE VREDNOSTI tj  assignment operators
=================================================================================================================== */

let z = 10;
z = z + 5;   //isto sto i : 
z += 5;

z = z * 3;  //isto kao i:
z *= 3;

//za ostale operacije isto vazi

/*=================================================================================================================
    POREDJENJE tj comparison opertors
=================================================================================================================== */
//relacioni
let p = 1;
console.log(p > 0);   //  u konzoli ce pisati true
console.log(p >= 1);  //  u konzoli ce pisati true
console.log(p < 1);   //  u konzoli ce pisati false
console.log(p <= 1);  //  u konzoli ce pisati true
//jednakost
console.log(p == 1);     //   u konzoli ce pisati true - lose equality (dozvoljava da ne bude isti tip operatora sa obe strane)
console.log('1' == 1);   //   u konzoli ce pisati true - lose equality (dozvoljava da ne bude isti tip operatora sa obe strane)
console.log(true == 1)   //   u konzoli ce pisati true
console.log(p === 1);    //   u konzoli ce pisati true - strict equality (isti tip ista vrednos sa obe strane operatora)
console.log('1' === 1);  //   u konzoli ce pisati false - strict equality (isti tip ista vrednos sa obe strane operatora)
console.log(p !== 1);    //   u konzoli ce pisati false- ! suprotno tj nije jednako
//najbolja praksa korititi strict equality

/*=================================================================================================================
    Uslovni  tj conditionary ili ternary opertors
=================================================================================================================== */

//  ako korisnik ima 100 poena bice zlatni korisnik u suprotnom su silver  
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
//  u konzoli ce ispisati ako ima 110 poena da je zlatni , ako korisnik ima definisano npr 90 umesto 110 pisace srebrni
/*=================================================================================================================
    LOGICKI tj logical opertors
=================================================================================================================== */
// booleans
let highIncome = true;
let goodCreditScore = true

//AND :&& ako su oba true bice true: kada treba da se ispunjavaju oba zadata uslova
let elegibleForLoan1 = highIncome && goodCreditScore; //pisace true
console.log(elegibleForLoan);

//OR: || bar jedno treba da se ispuni 
let elegibleForLoan2 = highIncome || goodCreditScore;
console.log(elegibleForLoan);

//NOT !
let applicationRefused1 = !elegibleForLoan1
let applicationRefused2 = !elegibleForLoan2
console.log('Application refused: ' + applicationRefused1 + applicationRefused2);

//non booleans
/*
Logički ne-boolean operatori u JavaScript-u se koriste za manipulaciju vrednostima koje 
nisu eksplicitno boolean tipa, ali se mogu tumačiti kao istinite ili netačne (Truthy ili Falsy). 

Falsy:  undefined, null, 0, false, prazan string: '', NaN
Sve ostalo je Truthy.

Ovi operatori se obično koriste u kontekstu kontrolnih struktura ili izraza koji zahtevaju boolean vrednosti.
Dvostruki negacijski operator (!!):
    Ovaj operator se koristi za konvertovanje vrednosti u eksplicitan boolean oblik.
    Prva negacija pretvara vrednost u njen logički suprotni ekvivalent, 
    a druga je koristi za vraćanje originalnog boolean tipa.
Logički "ili" operator (||):
    Vraća prvu istinitu vrednost iz niza operanada.
    Ako su svi operandi lažni, vraća poslednji operand.
Logički "i" operator (&&):
    Vraća prvu lažnu vrednost iz niza operanada.
    Ako su svi operandi istiniti, vraća poslednji operand.
*/
//korisnik mora izbrati boju u suprotnom bice izabrana defoltna
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); // ako korisnik izabere crvenu  bice crvena , ako je undefined bice plava

/*=================================================================================================================
    BITWISE opertors
=================================================================================================================== */
/*          
Bitwise AND (&):
    Postavlja bit rezultata na 1 samo ako su oba odgovarajuća bita u operandima 1.
Bitwise OR (|):
    Postavlja bit rezultata na 1 ako je bar jedan odgovarajući bit u operandima 1.
Bitwise XOR (^):
    Postavlja bit rezultata na 1 ako su tačno jedan odgovarajući bit u operandima 1.
Bitwise NOT (~):
    Invertuje sve bitove u operandu, postavlja 0 na 1 i obrnuto.
Left Shift (<<):
    Pomeranje svih bitova u operandu ulevo za određeni broj pozicija, prazne pozicije se popunjavaju nulama.
Right Shift (>>):
    Pomeranje svih bitova u operandu udesno za određeni broj pozicija, prazne pozicije se popunjavaju vrednostima originalnog znaka (kod aritmetičkog pomeranja), ili nulama (kod logičkog pomeranja).
Zero-fill Right Shift (>>>):
    Pomeranje svih bitova u operandu udesno za određeni broj pozicija, prazne pozicije se uvek popunjavaju nulama.
 */
/*
decimalni=binarni
               1 = 00000001
               2 = 00000010
      RezultatOR = 00000011
     RezultatAND = 00000000
        Rezultat = gleda oba bita poredi prve brojeve pa druge pa trece... : u ovom slucaju prvih 6 su isti nule,
          za OR: ako je barem jedan od njih jedan rezultat ce biti jedan,kada se prevede ovaj binarni broj u decimalni dobice se 3
         za AND: ako su oba jedan rezultat ce biti jedan,kada se prevede ovaj binarni broj u decimalni dobice se 0
*/
console.log(1 | 2)  //3
console.log(1 & 2)  //0

/*
najcesce se koristi za davanje permisija:
                 read    00000100
                 write   00000010
                 execute 00000001
*/
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission

console.log(myPermission);
let message = (myPermission & readPermission) ? 'yes' : 'no'; // na konzoli ce pisati yes
let message2 = (myPermission & executePermission) ? 'yes' : 'no'; // na konzoli ce pisati no


/*=================================================================================================================
    PRECEDENCE of opertors
=================================================================================================================== */
/*
Precedenca operatora je pravilo koje određuje redosled izvršavanja operatora u izrazu. 
Operatori sa višom precedencom se izvršavaju pre operatora sa nižom precedencom. 

Zagrade:
    Izrazi unutar zagrada uvek imaju najvišu precedencu. Ako imaš izraz tipa (a + b) * c,
     prvo će se izračunati zbir a + b, a zatim će se taj rezultat pomnožiti sa c.
Aritmetički operatori:
Aritmetički operatori imaju različitu precedencu. 
Na primer, množenje (*) i deljenje (/) imaju višu precedencu od sabiranja (+) i oduzimanja (-).
Relacioni operatori:
    Operatori poređenja poput >, <, >=, <= imaju precedencu nižu od aritmetičkih operatora.
Logički operatori:
    Logički operatori poput &&, ||, i ! imaju nižu precedencu od operatora poređenja.
Dodela vrednosti:
    Operator dodele (=) ima nižu precedencu od većine drugih operatora, što znači da će se
     izračunavanje vrednosti desne strane izvršiti pre dodele rezultata levoj strani.
Ternarni operator (? :):
Ternarni operator ima nižu precedencu od većine operatora. Na primer, 
        u izrazu a > b ? x : y, 
prvo se porede a i b, a zatim se odabira vrednost između x i y na osnovu rezultata poređenja.
 */

let t = 2 + 3 * 4
console.log(t);     //  14

let r = (2 + 3) * 4
console.log(r);     //  20

