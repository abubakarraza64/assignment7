function raza() {
    var a = document.getElementById("a").value
    var b = document.getElementById("output")
    output.innerHTML = a}
 function raza2(){
    var num1 = document.getElementById("c").value
var num2 = document.getElementById("d").value
if (num1>num2 ) {
    document.getElementById("e").innerHTML= " "+num1+" "  
}
if (num1<num2){
    document.getElementById("e").innerHTML= " "+num2+" "
}
 }
 function raza3() {
    var num = document.getElementById("f").value;
  if ((num % 2) === 0) {
      document.getElementById("g").innerHTML = " Hurry! number " +num+" is even "
      
  }
  else{
      document.getElementById("g").innerHTML= " Oh no ! number " +num+"  is odd"
  }
}
function raza4() {
    var num1 = document.getElementById("h").value;
    var num2 = document.getElementById("i").value;
    var num3 = document.getElementById("j").value;
   if (num1>num2 && num1>num3) {
       document.getElementById("k").innerHTML = " number "+num1+"  is greater  "
    }
    if (num2>num1 && num2>num3) {
        document.getElementById("k").innerHTML = "number "+num2+" is greater"
    }
   if(num3>num1 && num3>num2) {
        document.getElementById("k").innerHTML = "number "+num3+" is greater"
    }
    
}
function raza5() {
    var number = document.getElementById("l").value;
    if (number > 0 ) {
        document.getElementById("m").innerHTML= " "+number+" is positive "
        
    }
    if (number < 0 ) {
        document.getElementById("m").innerHTML= " "+number+" is negative "
    }
    if ( number= 0){
        
        document.getElementById("m").innerHTML= " "+number+" is zero "
        
    }
}
function raza6() {
    var year = document.getElementById("n").value;  
    if (year%4===0) {
        document.getElementById("o").innerHTML= " "+year+" is leap year "   
    }
    else{
       document.getElementById("o").innerHTML= " "+year+" is not leap year "   
   
    } 
   }
   function raza7() {
    var char = document.getElementById("p").value
    if (char === "a"  || char === "e"|| char === "i" || char === "o" || char === "u"  ) {
        document.getElementById("q").innerHTML= " "+char+" is vowel    "   
    }
    else{
        document.getElementById("q").innerHTML= " "+char+" is consonant"
    }
}
function raza8() {
    var char = document.getElementById("r").value;
    if (char>="a" && char<="z") {
        document.getElementById("s").innerHTML= " "+char+" is lowerrcase ";
    }
    if     (char>="A" && char<="Z") {
        document.getElementById("s").innerHTML= " "+char+" is uppercase ";
    }
}
function raza9() {
    var char = document.getElementById("t").value;
    if ( ( char>=Number.MIN_VALUE) && (char<=Number.MAX_VALUE)
       ) {
        document.getElementById("u").innerHTML= "  "+char+" is number "
    }
     if ((char>="a" && char<="z") ||( char>="A" && char<="Z")  ) {
        document.getElementById("u").innerHTML= "  "+char+" is alphabet "
    }
   //else{
     //   document.getElementById("u").innerHTML= "  "+char+" is special character"
  // }
}
function raza10() {
    var week = document.getElementById("v").value;
    if (week==1) {
        document.getElementById("w").innerHTML= "monday"

    }
    if (week==2) {
        document.getElementById("w").innerHTML= "tuesday"

    }
    if (week==3) {
        document.getElementById("w").innerHTML= "wednesday"

    }
    if (week==4) {
        document.getElementById("w").innerHTML= "thursday"

    }
    if (week==5) {
        document.getElementById("w").innerHTML= "friday"

    }
    if (week==6) {
        document.getElementById("w").innerHTML= "saturday"

    }
    if (week==7) {
        document.getElementById("w").innerHTML= "sunday"
       
    }
    
      
    }
    function raza11() {
        var week = document.getElementById("x").value;
        if (week==1) {
            document.getElementById("y").innerHTML= "january"
    
        }
        if (week==2) {
            document.getElementById("y").innerHTML= "february"
    
        }
        if (week==3) {
            document.getElementById("y").innerHTML= "march"
    
        }
        if (week==4) {
            document.getElementById("y").innerHTML= "april"
    
        }
        if (week==5) {
            document.getElementById("y").innerHTML= "may"
    
        }
        if (week==6) {
            document.getElementById("y").innerHTML= "june"
    
        }
        if (week==7) {
            document.getElementById("y").innerHTML= "july"
           
        }
        if (week==8) {
            document.getElementById("y").innerHTML= "august"
           
        }
        if (week==9) {
            document.getElementById("y").innerHTML= "september"
           
        }
        if (week==10) {
            document.getElementById("y").innerHTML= "october"
           
        }
        if (week==11) {
            document.getElementById("y").innerHTML= "november"
           
        }
        if (week==12) {
            document.getElementById("y").innerHTML= "december"
           
        }
        
          
        }