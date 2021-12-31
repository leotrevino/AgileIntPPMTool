//closures - used to encapsulate private data/methods
//dealing with local variables that were in scope at the time the closure created



function call(){
    let height=6;

    function callMe(){
        console.log('my height' +height+ 'feet');
    }
    return callMe;
}

let finalCall=call();
finalCall();