"use strict";

var quiz = {
    
    froga : null,

    xhr1 : new XMLHttpRequest(),
    
    xhr2 : new XMLHttpRequest(),
    
    webbfroga : "http://vhost3.lnu.se:20080/question/1",
    
     tries : 0,
     
    arr : [],
    
    start : function()
    {
    
    document.getElementById("button").onclick = function(e)
    {
            e.preventDefault();
            
            var value = document.getElementById("svar").value;
            
             document.getElementById("textonpage").innerHTML = "hej på dig"; 
            
            document.getElementById("textonpage").innerHTML = quiz.froga.nextURL +" " + value; 
            
            quiz.laddarupp(value, quiz.froga.nextURL);
             
    };
     
        
quiz.laddarner(quiz.webbfroga);

    },
    
    //---------------------laddar ner frågor--------------------------------
    
    laddarner : function(http)
    {
       quiz.xhr1.onreadystatechange = function()   
        {
            
            if (quiz.xhr1.readyState === 4)
            {
                  
             if(quiz.xhr1.status === 200)
                {
                     
                    
                quiz.froga =  JSON.parse(quiz.xhr1.responseText);
                
                document.getElementById("textonpage").innerHTML = quiz.froga.question; 
               
                }
             
            }
                
        };
          
            quiz.xhr1.open("GET",http,true);
        
            quiz.xhr1.send(null);     
    },
    
    //---------------------laddar upp svar--------------------------------
    
    laddarupp : function(svar, http)
    {
        
        quiz.xhr2.onreadystatechange = function(){  
            
            if(quiz.xhr2.readyState === 4)
            {
                var message = JSON.parse(quiz.xhr2.responseText);
                
               document.getElementById("svar").value = "";
               
                 if(message.message === "Correct answer!"){
                    
                        if (message.nextURL !== undefined)
                        {
                            document.getElementById("fel").innerHTML = "";
                            quiz.arr.push(quiz.tries);
                            quiz.tries = 0;
                            quiz.laddarner(message.nextURL);
                        }
                    
                    
                    }
                else{
                        document.getElementById("fel").innerHTML = "Fel Svar!";
                        quiz.tries += 1;
                    }
            }
        };

    var answer = JSON.stringify({answer: svar});
    
   quiz.xhr2.open("POST", http, true);
   
    quiz.xhr2.setRequestHeader("Content-Type", "application/json");
    
    quiz.xhr2.send(answer);
        
    
    }
   
};


window.onload = quiz.start;