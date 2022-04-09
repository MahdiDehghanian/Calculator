//VARS
const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const hisbtn = document.querySelector(".hisbtn");
//NUMS
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");

num1.value = "1";
num2.value = "2";
num3.value = "3";
num4.value = "4";
num5.value = "5";
num6.value = "6";
num7.value = "7";
num8.value = "8";
num9.value = "9";
num0.value = "0";
//OPERS
const momaiez = document.querySelector(".momaiez");
momaiez.value = ".";
const divi = document.querySelector(".divi");
divi.value = "/";
const multi = document.querySelector(".multi");
multi.value = "*";
const plus = document.querySelector(".plus");
plus.value = "+";
const minus = document.querySelector(".minus");
minus.value = "-";
const divires = document.querySelector(".divires");
divires.value = "%";

const rase = document.querySelector(".rase");
const M = document.querySelector(".M");
const clear = document.querySelector(".cleer");
const equal = document.querySelector(".equal");


operation.value = result.value ;
//FUNKS
num1.addEventListener("click" , function() {
  operation.value += num1.value ;
})

num2.addEventListener("click" , function() {
  operation.value += num2.value ;
})

num3.addEventListener("click" , function() {
  operation.value += num3.value ;
})

num4.addEventListener("click" , function() {
  operation.value += num4.value ;
})

num5.addEventListener("click" , function() {
  operation.value += num5.value ;
})

num6.addEventListener("click" , function() {
  operation.value += num6.value ;
})

num7.addEventListener("click" , function() {
  operation.value += num7.value ;
})

num8.addEventListener("click" , function() {
  operation.value += num8.value ;
})

num9.addEventListener("click" , function() {
  operation.value += num9.value ;
})

num0.addEventListener("click" , function() {
  operation.value += num0.value ;
})


plus.addEventListener("click" , function() {
  operation.value += plus.value ;
})
divi.addEventListener("click" , function() {
  operation.value += divi.value ;
})
divires.addEventListener("click" , function() {
  operation.value += divires.value ;
})
minus.addEventListener("click" , function() {
  operation.value += minus.value ;
})
multi.addEventListener("click" , function() {
  operation.value += multi.value ;
})
momaiez.addEventListener("click" , function() {
  operation.value += momaiez.value ;
})

equal.addEventListener("click",function () {
  //for 1 num ops
  // if (operation.value[1] == "+") {
  //  var finres =  Number(operation.value[0])+Number(operation.value[2]);
  //  result.value = finres ;
  //  operation.value = ""; 
  // }else if (operation.value[1] == "-") {
  //   var finres =  Number(operation.value[0])-Number(operation.value[2]);
  //   result.value = finres ;
  //   operation.value = ""; 
  // }else if (operation.value[1] == "*") {
  //   var finres =  Number(operation.value[0])*Number(operation.value[2]);
  //   result.value = finres ;
  //   operation.value = ""; 
  // }else if (operation.value[1] == "/") {
  //   var finres =  Number(operation.value[0])/Number(operation.value[2]);
  //   result.value = finres ;
  //   operation.value = ""; 
  // }else if (operation.value[1] == "%") {
  //   var finres =  Number(operation.value[0])%Number(operation.value[2]);
  //   result.value = finres ;
  //   operation.value = ""; 
  // }
  

  var helper =  operation.value ;
  var part1 = "";
  var part2 = "";
  

 
  for (let index = 0; index < helper.length; index++) {
    if (helper[index] == "+" ) {
      var myget = index ;
      for (let index = 0; index < myget; index++) {
        part1 += helper[index]; 
        Number(part1);
      }
      var hpart2 = myget+1;
      for (; hpart2< helper.length; hpart2++) {
        part2 += helper[hpart2]; 
        Number(part1);
      }
       var plusres = Number(part1)+Number(part2);
       result.value = plusres ;
       operation.value = result.value; 

    }else if (helper[index] == "-" ) {
      var myget = index ;
      for (let index = 0; index < myget; index++) {
        part1 += helper[index]; 
        Number(part1);
      }
      var hpart2 = myget+1;
      for (; hpart2< helper.length; hpart2++) {
        part2 += helper[hpart2]; 
        Number(part1);
      }
       var plusres = Number(part1)-Number(part2);
       result.value = plusres ;
       operation.value = result.value; 

    }else if (helper[index] == "*" ) {
      var myget = index ;
      for (let index = 0; index < myget; index++) {
        part1 += helper[index]; 
        Number(part1);
      }
      var hpart2 = myget+1;
      for (; hpart2< helper.length; hpart2++) {
        part2 += helper[hpart2]; 
        Number(part1);
      }
       var plusres = Number(part1)*Number(part2);
       result.value = plusres ;
       operation.value = result.value; 

    }else if (helper[index] == "/" ) {
      var myget = index ;
      for (let index = 0; index < myget; index++) {
        part1 += helper[index]; 
        Number(part1);
      }
      var hpart2 = myget+1;
      for (; hpart2< helper.length; hpart2++) {
        part2 += helper[hpart2]; 
        Number(part1);
      }
       var plusres = Number(part1)/Number(part2);
       result.value = plusres ;
       operation.value = result.value; 

    }else if (helper[index] == "%" ) {
      var myget = index ;
      for (let index = 0; index < myget; index++) {
        part1 += helper[index]; 
        Number(part1);
      }
      var hpart2 = myget+1;
      for (; hpart2< helper.length; hpart2++) {
        part2 += helper[hpart2]; 
        Number(part1);
      }
       var plusres = Number(part1)%Number(part2);
       result.value = plusres ;
       operation.value = result.value; 
      
    }
  }
  var storage = [];
  for (let index = 0; index < helper.length; index++) {
    storage[index] = helper[index];
  }
  storage[helper.length] = "=" ;
  storage[helper.length+1] = result.value ;
  localStorage.setItem("storage" , JSON.stringify(storage));




})


 //OVA FUNKS

 rase.addEventListener("click" , function() {
  var helper = operation.value;
  var sln = helper.length;
  var finsln = sln - 1 ;
  var resi = helper.slice(0,finsln);
  operation.value = resi ;
})

clear.addEventListener("click" , function cleer() {
 result.value = "";
 operation.value = "";
 preventDefault();
 
})


hisbtn.addEventListener("click" , function () {
  var history = [] ;
  history =  JSON.parse(localStorage.getItem('storage'));
  operation.value = "" ;
  result.value = "" ;
  var leng = history.length ;
  result.value = history[leng-1];
  var z = leng - 1; 
  var storage = history.slice(0,z);
  localStorage.setItem("storage" , JSON.stringify(storage));
  console.log(storage);
})