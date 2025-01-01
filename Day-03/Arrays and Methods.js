/*----- Explicit type conversion -------- */

// let num = 420;
// let boolnumber = Boolean(num);
// console.log(boolnumber);


// let num = 0;
// let boolnumber = Boolean(num);
// console.log(boolnumber);


/*---Loops---*/

// let num =2;
// let i = 1;
// while(i<=10){
//   console.log(num * i);
//   i++;
// }

// let num = 2;
// for(let i = 1; i<=10 ; i++){
//   console.log(num * i)
// }

/*----- Lexical Scoping ------*/

function outer(){
  let a = 10;
  function inner(){
    let b = 20;
    function innerMost(){
      let c = 30;
      console.log(a,b,c);
    }
    innerMost()
  }
  inner();
}
outer()