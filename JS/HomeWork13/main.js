function wakeUp (didYouWakeUp) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            if(didYouWakeUp){
                resolve(8)
            }else
            {
                reject('You woke up too late')}
            },2000)
    })
}

function getReady(whenYouWokeUp){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=> {
            if(whenYouWokeUp === 8){
                resolve ('Good job, let`s get ready to work')
            }else{
                reject('It`s too late')
            }
        }, 2300)
    })
}

function eatBreakFast(areYouReady){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if(areYouReady === 'Good job, let`s get ready to work' ){
            resolve('Done')
        }else{
            reject('Hungry')
        }
        },2500)
    })
}
function orderTaxi(didYouEatYouBreakFast){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(didYouEatYouBreakFast === 'Done'){
                resolve ('Taxi is coming')
            }else{
                reject ('Brrrrr, you should eat something=)')
            }

        },2200)
    })
}
function getToOffice(taxi){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(taxi === 'Taxi is coming'){
                resolve('Hello, our conference just started')
            }else{
                reject('Sorry, you can not bypass, meeting has already started')
            }
        },1500)
    })
}




// wakeUp(true)
// .then(result=> {
//     console.log(`You woke up at ${result} AM`);
//     return getReady(result)})
// .then(result=> {
//     console.log(result);
//     return eatBreakFast(result)
// })
// .then(result=>{console.log(result)
// return orderTaxi(result)
// })
// .then(result=>{
//     console.log(result);
//     return getToOffice(result);
// })
// .then(result=>console.log(result))
// .catch(reason => console.log(reason));

async function schedule(){
    const time = await wakeUp(true);
    console.log(`You woke up at ${time} AM`);
    const ready = await getReady(time);
    console.log(ready);
    const breakfast = await eatBreakFast(ready);
    console.log(breakfast);
    const ride = await orderTaxi(breakfast);
    console.log(ride);
    const office = await getToOffice(ride)
    console.log(office);
}
schedule();