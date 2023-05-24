//1

let price2 = +prompt("Ücreti giriniz: ")

let priceAdapted = function (number){
    let ucret = number.toFixed(2);
    return ucret;
}

let adapted = priceAdapted(price2);
console.log(`$${adapted}`);

//2

const birthYear = +prompt("Dogum yili: ");

let date = new Date();
let year = date.getFullYear();

function yas(dogumYili){
    let age = year - dogumYili;
    console.log(`${age} yasindasin`);
    if (age <= 10){
        return "Daha 70 sene ömrün var. En güzel yillarindasin."
    }
    else if(age <= 20){
        return "60 yilin falan kaldi. Ana babana saygili davran."
    }
    else if(age <= 30){
        return "Bir an önce hayata atil, evde bos bos yatma."
    }
    else if(age <= 40){
        return "Yas 35, yolun yarisi eder. Belki yarisindan cogu.."
    }
    else if(age <= 50){
        return "Hayatta birseyler basardin mi? Coluk cocuk büyüdü mü? Alper Tunga öldi mu?"
    }
    else if(age <= 60){
        return "Isi gücü birak git ege'de bi tatil kasabasina yerles."
    }
    else if(age <= 70){
        return "Son yillarin, tevbe et, namaza basla, hacca filan git gafillik etme."
    }
    else if(age <= 80){
        return "Uzatmalari oynuyorsun."
    }
    else if(age <= 90){
        return "Sen hala buralarda misin"
    }
    else if(age <= 100){
        return "Ohoooooo"
    }
    else {
        return "Yanlis deger girdiniz. Yani muhtemelen.. Ya da birileri 100 yildan fazla yasamis olabilir."
    }    
}

console.log(yas(birthYear));

//4- Bir ürün ve fiyat giriliyor. %18 vergi ekleyip döndüren program
// Bulaşık Makinası 8.500    

// Vergi %18 = 1.530 TL
// Bu ürünün KDV dahil fiyatı: 10.030 TL


let price = 8500;
function priceVA(price) {
    return price * 118 / 100;
}
console.log(priceVA(price));

//5- Kelvin yada Fahrenheit olarak girilen sıcaklı değerini celcius dönüştüren program. Virgülden sonra iki basamklı bir göstemle ile gösteriniz.

let value = +prompt("Kac derece?")
let unit = prompt("Hangi birim?(K ya da F")

let Converter = (value, unit) => {
    if (unit === "K"){
        return value - 273.15;
    }
    else if (unit === "F"){
        return (value - 32) / 1.8;
    }
    else return "Yanlis deger girdiniz."
}

console.log(`${value} ${unit} sicaklik ${Converter(value,unit).toFixed(2)} degerine esdegerdir.`);


//6- Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results. Sample numbers : 0, -1, 4 

let n1 = parseInt(prompt("n1: "))
let n2 = parseInt(prompt("n2: "))
let n3 = parseInt(prompt("n3: "))

let rank = (x,y,z) =>{
    if (x>y && x>z){
        if (y>z){
            console.log(x + ", " + y + ", " +z);
        }
        else{
            console.log(x + ", " + z + ", " +y);
        }
    }
else if (y>x && y >z){
        if (x>z){
            console.log(y + ", " + x + ", " +z);
        }
        else{
             console.log(y + ", " + z + ", " +x);
        }
    }
else if (z>x && z>y){
        if (x>y){
            console.log(z + ", " + x + ", " +y);
        }
        else{
            console.log(z + ", " + y + ", " +x);
        }
    }      
}
rank(n1,n2,n3);

//!    7- Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.

for(let i = 1; i <=15; i++){
    if(i % 2 === 1) console.log(`${i} is odd.`);
    else console.log(`${i} is even.`);
}


/*    8- Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * * */  

let pattern = "";
for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= i; j++){
        pattern += "* ";
    }
    pattern += "\n";
}
console.log(pattern);

//!     9- DrawParallelogram

// kullanıcı 3 değer girecek, 1. değer kaç adet sembol olacak, 2. değer kaç satır olacak, 3. değer ise sembol

// Örnek:

// DrawParallelogram(10,4,'*');

const rows = +prompt("Kac satir?");
const columns = +prompt("Kac sütun?");
const symbol = prompt("Hangi sembol?");

let smb = "";

function drawParalleogram(satir, sutun, sembol){
    for (let i = 1; i <= satir; i++){
        for(let j = 1; j <= i; j++){
            smb += " ";
        }
        for (let j = 1; j <= sutun; j++){
            smb += sembol;
        }
        smb += "\n";
    }
    return smb;
}

console.log(drawParalleogram(rows,columns,symbol));


//    10-  Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

let k = 60;
let m = 30;
let min = Math.min(k,m);
let maxDenom = 0;

for(let i = 1; i <= min; i++){
    if(k % i === 0 && m % i === 0){
        maxDenom = i;
    }
}
console.log(maxDenom);

//    11- Write a JavaScript program to find the Armstrong numbers of 3 digits. 
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 


for (let i = 100; i < 1000; i++){
    let temp = i;
    let birler = temp % 10;
    temp = (temp - birler) / 10;
    let onlar = temp % 10;
    temp = (temp - onlar) / 10;
    let yuzler = temp;

    if(birler**3 + onlar**3 + yuzler**3 === i) console.log(i);
}