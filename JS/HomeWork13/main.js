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
function orderTaxi(DidYouEatYouBreakFast){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(DidYouEatYouBreakFast === 'Done'){
                resolve ('Taxi is coming')
            }else{
                reject ('Brrrrr, you should eat something=)')
            }

        },2200)
    })
}
function GetToOffice(Taxi){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(Taxi === 'Taxi is coming'){
                resolve('Hello, our conference just started')
            }else{
                reject('Sorry, you can not bypass, meeting has already started')
            }
        },1500)
    })
}




wakeUp(true)
.then(result=> {
    console.log(`You woke up at ${result} AM`);
    return getReady(result)})
.then(result=> {
    console.log(result);
    return eatBreakFast(result)
})
.then(result=>{console.log(result)
return orderTaxi(result)
})
.then(result=>{
    console.log(result);
    return GetToOffice(result);
})
.then(result=>console.log(result))
.catch(reason => console.log(reason));