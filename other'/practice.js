
letpromiseToGetGoodMarks=newPromise(function(resolve,reject){​
letisGoodMarks=false;
if(isGoodMarks){​
resolve('Got good marks')
    }​else{​
reject('failed')
    }​
}​);
promiseToGetGoodMarks.then(function(fromResolve){​
console.log('The result is '+fromResolve);
}​).catch(function(fromReject){​
console.log('the result is '+fromReject);
}​)
letcleantheRoom=function(){​
returnnewPromise(function(resolve,reject){​
resolve('Cleaned perfect without any dust');
    }​)
}​
letremovetheGarbage=function(message){​
returnnewPromise(function(resolve,reject){​
resolve(message+"Remove the garbage   ");
    }​)
}​
letrewarded=function(message){​
returnnewPromise(function(resolve,reject){​
resolve(message+"Rewarded $100 dollars  ");
    }​)
}​

    cleantheRoom().then(function(result){​
returnremovetheGarbage(result);
 }​).then(function(result){​
returnrewarded(result);
 }​).then(function(result){​
console.log(result+'All process finished   ');
 }​)
Promise.all([cleantheRoom(),removetheGarbage(),rewarded()]).then(function(){​
console.log("finsihed");
 }​)
