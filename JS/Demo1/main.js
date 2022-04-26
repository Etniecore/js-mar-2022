let customers = [
    {name: `Chris`, age: 20, status: true},
    {name: `Erika`, age: 24, status: false},
    {name: `John`, age: 43, status: false},
    {name: `Sam`, age: 34, status: true},
    {name: `Clara`, age: 53, status: true}
];

document.write(`<ul>`)

for (let customer of customers) {
    document.write(`<li>${customer.name} ${customer.age} ${customer.status}</li>`)
}
document.write(`</ul>`)