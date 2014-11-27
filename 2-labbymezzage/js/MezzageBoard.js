"use strict";

    var MezzageBoard = 
    {
        
        messages: [],//Skappar arrayer  
    
        start : function()
        {
            document.getElementById("button").onclick = function gettext(e)// körs när man klickat på skicka knappen, tar i mot texten som mattas in 
            {
                 e.preventDefault();
                 
                var text = document.getElementById("text").value;// Tilldelar variabelns text, det värdet som mattat in i hemsidans text ruta 
                
                document.getElementById("text").value = "Marco är kung";// Åter ställer värdet på textarea i indext.html rutan till tom
                
                var mess = new Message(text, new Date());// skapar ett objket, Till delar den texten och tiden då den skrevs   
                
                MezzageBoard.messages.push(mess);// lägger in objketet i arrayern,Varje objekt representerar ett meddelande   
                
                MezzageBoard.laddatext();     
                
            };
            
        },
        
          laddatext : function()// Löper igenom texterna som mattas in
          {
           
            document.getElementById("textonpage").innerHTML= "";// Raderar tidigar texter så man bara matar in den senaste
            
            for (var i = 0; i < MezzageBoard.messages.length; i+=1)// skriver ut alla    
            {
                MezzageBoard.textin(i);
            }
            
            var antal = document.getElementById("messagecount");// räknar antal skrivna meddelanden    
            
            var number = (MezzageBoard.messages.length);
            
            antal.innerHTML = number;
        },
        
        textin : function(tex) //funktionen skriver in texterna och ikoner på HTML sidan så att det kan presenteras 
        {
            
             //---------------------Text--------------------------------
             
             var text1 = document.createElement("div");//Variabeln text1 får HTML koden <div>
             
            var p = document.createElement("p"); //Variabeln p får HTML koden <p>
            
             text1.appendChild(p);// <div > får <p> 
             
             p.innerHTML = MezzageBoard.messages[tex].getHTMLText();//<P> får texten som ska mattas in i sidan  
            
            text1.className = "newmessage";// <div> till delas klassa namnet newmessage <div class="newmessage">
            
            p.className = "textinput";// <p> till delas klassa namnet newmessage <p class="textinput"
            
        
          //---------------------Tid--------------------------------
          
          
            var tid = document.createElement("p");// Variabeln tid får HTML koden <p>
          
            tid.innerHTML = MezzageBoard.messages[tex].getDatetext().toLocaleTimeString(); // Variabeln tid får tiden som ska kommer matas in i sidan  
            
            tid.className = "tid";// <p> till delas klassa namnet tid <p class="tid"
            
             text1.appendChild(tid);// <div > får <p> med tid

        
        
            //-------------------ikon div--------------------------------
        
         
            var ikon = document.createElement("div");// Variabeln Ikon1tid får HTML koden <span>
            
            ikon.className = "ikon";// <div> till delas klassa namnet ikon <div class="ikon">
            
             //-------------------tid ikon--------------------------------
            
            var tidlenk = document.createElement("a");// Variabeln tidikon får HTML koden <a>
            
            var bildkod = document.createElement("img");// variabeln bildkod får HTML koden <img>
            
            bildkod.className = "tidikon";// <img> till delas klassa namnet tidikon <div class="tidikon">
            
            bildkod.setAttribute("src", "pics/tid.png");// <img> Egenskapen som länkar till bild och själva sökvägen till bilden 
            
            bildkod.onclick = function() // visar tiden i en ruta när man klickar på tid ikonen 
            {
                alert("Inlägget skapades " + MezzageBoard.messages[tex].getDatetext().toLocaleDateString() +
                " klockan " + MezzageBoard.messages[tex].getDatetext().toLocaleTimeString());
            }
            
           ikon.appendChild(tidlenk);//  Variabeln ikon får HTML koden <a>
           
           tidlenk.appendChild(bildkod);//  Variabeln tidlenk får HTML koden <img>
          
           text1.appendChild(ikon);// <div > får <a> med tid
           
           //-------------------skriver ut--------------------------------
           
           document.getElementById("textonpage").appendChild(text1);// Lägger in den nya HTML koden i <div id = "textonpage"> så att det syns på sidan
        
        }
    };
        
   
window.onload = MezzageBoard.start;