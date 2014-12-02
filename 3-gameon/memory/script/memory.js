"use strict";

var rows = 4;// antal rader 

var cols = 4;// antal celler

var antalforsok = 0;// här sparar vi antalförösk man gjort 

var antalpar = 0;// här sparar vi antalpar vi hittat


var Memory = 
{
    
    
    smlumpbilder: [],// i den här arryarne sparar vi de slumpade bidlerna 
   
    par: [], // i den hhär arrayen kommer vi spara paren som man hittar i memory spelet
    
    start : function() {
        
        var bildplats = 0;// Ska representera bild i pics mappen 
        
        var table = document.getElementById("Memorytable");// Variabeln tabele får HTML koden tabele som har namnet "Memorytable" i HTML sidan index 
        
     
        Memory.smlumpbilder = RandomGenerator.getPictureArray(rows, cols);// här slupas bilderna i funktionen RandomGenerator och en array med splumpade tall tilldellas arryan smlumpbilder 
        
     
        for(var i = 0; i < rows; i++)// Den här forstasen kommer loppa 4 gånger och skapa 4 tabellrader 
        {
            var tabellrad = table.insertRow();// här får variabeln tabellrad en HTML kod som skappar en tabellrad inuti index sidan
            
            for(var j = 0; j < cols; j++)// Den här forstasen loppa 4 gånger och skapa 4 celler Inuti table raden som skapats i forsatsen innan  
            {
                var cell = tabellrad.insertCell();// skapara en Cell i en tabbel 
                
                // Kapslar in varje bild i en a-länk
                var bild = document.createElement("img"); // variabeln bild får HTML koden <img>
                
                var a = document.createElement("a");// variabeln a får HTML koden <A>
                
                a.setAttribute("href", "#"); // <A> får egenskapen som gör den till en lenk
                
                a.className = "startimg";// <A> till delas klassa namnet tidikon <div class="startimg">
                
                bild.setAttribute("src", "memory/pics/0.png"); // <img> får egenskapen som länkar till bild och själva sökvägen till bilden 
                
                bild.alt = "hidden";// om bilden i sidan inte kan visas så kommer följande text visas
                
                a.appendChild(bild);//  Variabeln a får HTML koden <img>
                
                cell.appendChild(a); // Variabeln cell får HTML koden <a> som atmoatisk lägs in i index sidan 
                
             
                Memory.vendbilder(bildplats, a);
                
                bildplats++;
            }
        }
        
        
        document.getElementById("button").onclick = function()// startar om sidan genom att ladda om sidan 
        {
                window.location.reload();// laddar om sidan 
        };
    },
    
    
   
  
};

window.onload = Memory.start;// startar funktionen som har label start när sidan har ladats