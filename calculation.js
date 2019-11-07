var inp = document.getElementById("gth");
var df = document.getElementById("pr");
df.onclick = function(){
    myForm.textview.value+='%';
              size = myForm.textview.value.length; 
                n = Number(myForm.textview.value.substring(0, size-1)); 
                myForm.textview.value = n/100;
}
var divi = document.getElementById("dividebyone");
divi.onclick = function(){
    myForm.textview.value = 1/eval(myForm.textview.value) 
}
var cl = document.getElementById("clear");
cl.onclick = function(){
    myForm.textview.value=""
}
var back = document.getElementById("backspace");
back.onclick = function(){
    size = myForm.textview.value.length; 
            myForm.textview.value = myForm.textview.value.substring(0, size-1); 
}
var dividing = document.getElementById("divide");
dividing.onclick = function(){
    myForm.textview.value+='/'
}




var tubir = document.getElementById("sqrt");
tubir.onclick = function(){
myForm.textview.value = Math.sqrt(eval(myForm.textview.value)) 
}



var numberseven = document.getElementById("sevens");
numberseven.onclick = function(){
     myForm.textview.value+='7'
}

var numbereight = document.getElementById("eights");
numbereight.onclick = function(){
     myForm.textview.value+='8'
}
var numbernine = document.getElementById("nines");
numbernine.onclick = function(){
     myForm.textview.value+='9'
}
var kobeitu = document.getElementById("multiply");
kobeitu.onclick = function(){
    myForm.textview.value+='*'
}

var kvadrat = document.getElementById("square");
kvadrat.onclick = function(){
    myForm.textview.value = Math.pow(eval(myForm.textview.value), 2) 
}
var numberfour = document.getElementById("four");
numberfour.onclick = function(){
     myForm.textview.value+='4'
}
var numberfive = document.getElementById("five");
numberfive.onclick = function(){
     myForm.textview.value+='5'
}
var numbersix = document.getElementById("six");
numbersix.onclick = function(){
     myForm.textview.value+='6'
}
var numberminus = document.getElementById("minus");
numberminus.onclick = function(){
myForm.textview.value+='-'
}
var numbercube = document.getElementById("cube");
numbercube.onclick = function(){
    myForm.textview.value = Math.pow(eval(myForm.textview.value), 3) 
}
var numberone = document.getElementById("one");
numberone.onclick = function(){
     myForm.textview.value+='1'
}
var numbertwo = document.getElementById("two");
numbertwo.onclick = function(){
     myForm.textview.value+='2'
}
var numberthree = document.getElementById("three");
numberthree.onclick = function(){
     myForm.textview.value+='3'
}
var numberplus = document.getElementById("plus");
numberplus.onclick = function(){
    myForm.textview.value+='+'
}
var numberbracketone = document.getElementById("bracketone");
numberbracketone.onclick = function(){
    myForm.textview.value+='('
}
var numberbrackettwo = document.getElementById("brackettwo");
numberbrackettwo.onclick = function(){
    myForm.textview.value+=')'
}
var numberpoint = document.getElementById("point");
numberpoint.onclick = function(){
    myForm.textview.value+='.'
}
var numberzero = document.getElementById("zero");
numberzero.onclick = function(){
    myForm.textview.value+='0'
}
var numberequal = document.getElementById("space");
numberequal.onclick = function(){
   myForm.textview.value = eval(myForm.textview.value)
}


