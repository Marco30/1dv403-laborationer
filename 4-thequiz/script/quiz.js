"use strict";

var quiz = {
    
    froga : null, // Variabel som kommer hålla objekten man från server 

    xhr1 : new XMLHttpRequest(),// vi skppar ett XMLHttpRequest objekt som får namnet  xhr1 
    
    xhr2 : new XMLHttpRequest(),// vi skppar ett XMLHttpRequest objekt som får namnet  xhr2 
    
    webbfroga : "http://vhost3.lnu.se:20080/question/1",// Variabel som får start webbplatsen där informationen som vi kommer använda finns   
    
    antal : 0,// Kommer hålla antal försök    
     
    forsoktabel: [],// I den här arrayen kommer vi samla alla försök man gjort 
    
    slut : 0, // använd för att texten efter avslutat sepl inte ska visa antal fel och antall försök
    
    start : function()
    {
    
        //---------------------Event hanterare som hanterar knapp tryckning--------------------------------
    
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
       quiz.xhr1.onreadystatechange = function()// Funkar som onclick, men aktiveras när servern skickar till baks information            
        {
            
            if (quiz.xhr1.readyState === 4)// 4 betyder att att information är färdig sickat, den kan nu användas av oss, när datan finns på websidan så startar den här if satsen      
            {
                  
                if(quiz.xhr1.status === 200)// // den här if satsen är en säkerhet kontroll, 200 betyder att att överföringen från server till webbsidan gick bra 
                {
                     
                    
                quiz.froga =  JSON.parse(quiz.xhr1.responseText);// Omvandlar objekt vi får från servern till en arraye variabel med array funktioner. 
                
                document.getElementById("textonpage").innerHTML = quiz.froga.question; // Läger in texten/information vi fåt från server i webbsidan 
               
                }
             
            }
                
        };
          
            quiz.xhr1.open("GET",http,true);// Här sätter vi inställningar, gör att laddaner eller laddaupp, GET betyder att vi lddarner, http server platsen där informationen vi behöver finns, true betyder asynkront vilket betyder att man kör den utan att störa resten av scriptet    
        
            quiz.xhr1.send(null);//Den här används för att laddar upp information i servern     
    },
    

    
    laddarupp : function(svar, http)
    {
        
        //---------------------laddar upp svar, del 1 av 2--------------------------------
            
        quiz.xhr2.onreadystatechange = function()// Funkar som onclick, men aktiveras när servern skickar till baks information   
        {  
            
            if(quiz.xhr2.readyState === 4)// 4 betyder att att information är färdig sickat, den kan nu användas av oss, när datan finns på websidan så startar den här if satsen
            {
                var frogor2 = JSON.parse(quiz.xhr2.responseText);// Omvandlar objekt vi får från servern till en arraye variabel med array funktioner.
                
               document.getElementById("svar").value = "";// Noll ställer text rutan där man mattar in svar    
              
               //---------------------kontrollerar om man fåt rätt svar och laddar ner nästa fråga från server--------------------------------
               
                 if(frogor2.message === "Correct answer!")// kontrollerar att man get rätt svar gänom att gemföra meddelandet från servern            
                 {
                    
                        if (frogor2.nextURL !== undefined)// om frogor2.nextURL int är undefinde så går vi in i den här if stasen 
                        {
                            document.getElementById("fel").innerHTML = ""// Noll ställer fel texte rutan där texten fel visas när man gjort ett fel  
                            
                            document.getElementById("antal").innerHTML = ""// Noll ställer texte rutan där texten antal försök visas 
                            
                            quiz.forsoktabel.push(quiz.antal);//Sparar anfall försöka man gjort i arrayen forsoktabe          
                            
                            quiz.antal = 0;// Noll ställer antal försök innan man läser in nästa fråga      
                            
                            quiz.laddarner(frogor2.nextURL);//Läser in nästa fråga genom att ge den nya server plasten där frågan finns 
                        }
                        
                        else//Har du fåt rät svar och det var den sita frågan så startar vi den här else satsen, den startas när frogor2.nextURL är undefine, Vilket också betyder att det är slut på frågor   
                        {
                            quiz.forsoktabel.push(quiz.antal);//Sparar anfall försöka man gjort i arrayen forsoktabe     
                            
                            quiz.antal = 0; // Noll ställer antal försök innan man läser in nästa fråga 
                            
                            document.getElementById("textonpage").innerHTML = "Quizen är slut";// lägger in Error text i webbsidan
                           
                            document.getElementById("fel").innerHTML = ""// Noll ställer fel texte rutan där texten fel visas när man gjort ett fel  
                            
                            document.getElementById("antal").innerHTML = ""// Noll ställer texte rutan där texten antal försök visas 
                            
                            quiz.slut = 1;// fixar bugar med att man kunte trycka på svara knapen och text matades in
                            
                            quiz.resultat();
                            
                        }
                    
                }
                    
                else// Var det fel svar så körs den här else satsen som visar att du svarat fel  
                {
                    
                    if(quiz.slut === 0)
                    {
                        document.getElementById("fel").innerHTML = "Du har svarat fel på frågan!!!";// lägger in Error text i webbsidan 
                        
                        quiz.antal += 1;// räknar antal fel   
                        
                    document.getElementById("antal").innerHTML = " Antal försök: " + quiz.antal;// visar antal försök du gjort på frågan 
                    }
                    else// fixar fel Som gjorde att man kunde forsetta se att det var fel svar och antal försök man gjort fast spelet var slut. 
                    {
                        document.getElementById("fel").innerHTML = ""// Noll ställer fel texte rutan där texten fel visas när man gjort ett fel  
                            
                        document.getElementById("antal").innerHTML = ""// Noll ställer texte rutan där texten antal försök visas 
                    }
                }
            }
        };
        
        //---------------------laddar upp svar, del 2 av 2--------------------------------

    var serversvar = JSON.stringify({answer: svar});// Här läggs svaret in och omvandlas till ett objekt som kan tass i mot av servern    
    
   quiz.xhr2.open("POST", http, true);// // Här sätter vi inställningar, gör att laddaner eller laddaupp, POST betyder att vi laddar upp, http server platsen där informationen vi ska ladda upp, true betyder asynkront vilket betyder att man kör den utan att störa resten av scriptet
   
    quiz.xhr2.setRequestHeader("Content-Type", "application/json");// Informerar server att vi använder jason
    
    quiz.xhr2.send(serversvar);// Skickar upp datan till servern  
        
    
    },
    
    //----------------------Resultat på antal försök  -------------------------------
    
    resultat : function()// Här presenteras försöks tabell  
    {
        if(quiz.slut === 1)// Som gjorde att man kunde forsetta matta in text efter att spelet är slut och resultat rutan visade texten fast en det inte fan en fråga 
        {
            
            document.getElementById("result").innerHTML = "Antal fel: ";// Lägger in text i webbsidan  
            
            var m = 1;// visar numer på frågan
            
            for (var i = 0; i < quiz.forsoktabel.length; i+=1) // Löper igenom arrayen som har sammalt alla försök    
            {
                var p = document.createElement("p");//Variabeln p får HTML koden <p>
                
                p.innerHTML = "Fråga "+ m +": " + quiz.forsoktabel[i];// lägger in information som finns i arrayen i <p> tagarna så att de syns på sidan     
                
                 document.getElementById("result").appendChild(p);// Lägger in den nya HTML koden <p> i <div id = "result"> så att det syns på webbsidan
            
            m+=1;
                
            }
        
        }
        
        quiz.slut = 2;// fixar fell Som gjorde att man kunde forsetta matta in text efter att spelet är slut och resultat rutan visade texten fast en det inte fan en fråga 
        
    }
   
};


window.onload = quiz.start;// startar funktionen som har label start när sidan har ladats