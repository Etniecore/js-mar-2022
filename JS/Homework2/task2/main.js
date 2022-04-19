let time = prompt('Enter a number');
if (time >=0 && time <=15) {
    console.log('First quater')
}
else if(time >=16 && time <=30) {
    console.log('Second quater');
}
else if(time >=31 && time <=45) {
    console.log('Third quater');
}
else if(time >=45 && time <= 59) {
    console.log('Fourth quater');
}
else {
    console.log('Not found');
}

let day = prompt( 'Enter a day number');
if (day >=1 && day <=10) {
    console.log ('First decade');
}
else if(day >= 11 && day <=20) {
    console.log('Second decade');
}
else if(day >= 21 && day <=31) {
    console.log('Third decade');
}
else {
    console.log('Sorry, we could not indentify it');
}

