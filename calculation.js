 function calculate(calc) { 
              
            /* Check if function include ! character then 
            calculate factorial of number */ 
            if(calc.textview.value.includes("!")) { 
                  
                size = (calc.textview.value.length; 
                n = Number(calc.textview.value.substring(0, size-1)); 
                f = 1; 
                  
                for(i = 2; i <= n; i++) 
                    f = f*i; 
                calc.textview.value = f; 
            } 
              
            /* If function include % character then calculate 
            the % of number */ 
            else if(calc.display.value.includes("%")) { 
                  
                size = calc.display.value.length; 
                n = Number(calc.display.value.substring(0, size-1)); 
                calc.display.value = n/100; 
            } 
  
            else     
                /* Otherwise evalute and execute output */ 
                calc.display.value = eval(calc.display.value); 
        } 
        function add(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         //function that evaluates the digit and return result 
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
           
         //function that clear the display 
         function clear() 
         { 
             document.getElementById("result").value = "" 
         } 
          function backspace(calc) {                                              
            size = calc.display.value.length; 
            calc.display.value = calc.display.value.substring(0, size-1); 
        } 