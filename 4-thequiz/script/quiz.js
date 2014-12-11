"use strict";

var quiz = {
    
    froga : null,

    xhr1 : new XMLHttpRequest(),
    
    xhr2 : new XMLHttpRequest(),
    
    webbfroga : "http://vhost3.lnu.se:20080/question/1",
    
     antal : 0,
     
    forsoktabel: [],
    
    start : function()
    {
    
    document.getElementById("button").onclick = function(e)
    {
            e.preventDefault();
            
            var value = document.getElementById("svar").value;
            
             //document.getElementById("textonpage").innerHTML = "hej på dig"; 
            
            //document.getElementById("textonpage").innerHTML = quiz.froga.nextURL +" " + value; 
            
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
                
               //document.getElementById("svar").value = "";
              
               
                 if(message.message === "Correct answer!")
                 {
                    
                        if (message.nextURL !== undefined)// om message.nextURL int är undefinde så går vi in i den här if stasen 
                        {
                            document.getElementById("fel").innerHTML = "";
                            
                            quiz.forsoktabel.push(quiz.antal);
                            
                            quiz.antal = 0;
                            
                            quiz.laddarner(message.nextURL);
                        }
                        
                        else
                        {
                            quiz.forsoktabel.push(quiz.antal);
                            quiz.antal = 0;
                            quiz.resultat();
                        }
                    
                    }
                    
                else
                {
                        document.getElementById("fel").innerHTML = "Fel";
                        quiz.antal += 1;
                }
            }
        };

    var answer = JSON.stringify({answer: svar});
    
   quiz.xhr2.open("POST", http, true);
   
    quiz.xhr2.setRequestHeader("Content-Type", "application/json");
    
    quiz.xhr2.send(answer);
        
    
    },
    
    resultat : function()
    {
        
        document.getElementById("result").innerHTML = "Antal gissningar:";
        
        for (var i = 1; i < quiz.forsoktabel.length + 1; i+=1) 
        {
            var p = document.createElement("p");
            
            document.getElementById("result").appendChild(p);
            
            p.innerHTML = "Fråga "+ i +": " + quiz.forsoktabel[i - 1];
        }
        
    }
   
};


window.onload = quiz.start;