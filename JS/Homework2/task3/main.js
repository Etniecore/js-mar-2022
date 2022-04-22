let indexNumber = +prompt("Enter index number, please");
switch (indexNumber) {
    case '1':
        document.write(`<div>Monday</div>`);
        break;
    case '2':
        document.write(`<div>Tuesday</div>`);
        break;
    case '3':
        document.write(`<div>Wednesday</div>`);
        break;
    case '4':
        document.write(`<div>Thursday</div>`);
        break;
    case '5':
        document.write(`<div>Friday</div>`);
        break;
    case '6':
        document.write(`<div>Saturday</div>`);
        break;
    case '7':
        document.write(`<div>Sunday</div>`);
        break;
    default:
        document.write(`<div>Not Found</div>`);
}