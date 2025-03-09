

function listCheck (a,b){
    return a.filter((num)=>!b.includes(num))
}

function plural(n) {
    return n!==1
  }

  console.log(plural(0));