"use strict";

    var MezzageBoard = 
    {
        
        messages: [],//Skappar arrayer  
    
        start : function()
        {
            document.getElementById("button").onclick = function gettext(e)
            {
                 //e.preventDefault();
                 
                var text = document.getElementById("text").value;// Tilldelar variabelns text, det värdet som mattat in i hemsidans text ruta 
                
                document.getElementById("text").value = "Marco är kung";// Åter ställer värdet på textarea i indext.html rutan till tom
                
                var mess = new Message(text, new Date());// skapar ett objket, Till delar den texten och tiden då den skrevs   
                
                MezzageBoard.messages.push(mess);// lägger in objketet i arrayern,Varje objekt representerar ett meddelande   
                
                 alert(mess);
                
                
            };
            
        }
        
        
        
    };
        
   
window.onload = MezzageBoard.start;