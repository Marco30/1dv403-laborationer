"use strict";

var rows = 4;// antal rader 
var cols = 4;// antal celler


var Memory = 
{
    
    
    smlumpbilder: [],// i den här arryarne sparar vi de slumpade bidlerna 
   
    par: [], // i den hhär arrayen kommer vi spara paren som man hittar i memory spelet
    
    antalforsok : 0,// här sparar vi antalförösk man gjort 

    antalpar : 0,// här sparar vi antalpar vi hittat

    
    start : function() 
    {
        
        var bildplats = 0;// Ska representera bild i pics mappen 
        
        var table = document.getElementById("Memorytable");// Variabeln tabele får HTML koden tabele som har namnet "Memorytable" i HTML sidan index 
     
        Memory.smlumpbilder = RandomGenerator.getPictureArray(rows, cols);// här slupas bilderna i funktionen RandomGenerator och en array med splumpade tall tilldellas arryan smlumpbilder 
        
      //------------------- Här skapas tabellen --------------------------------
     
        for(var i = 0; i < rows; i+=1)// Den här forstasen kommer loppa 4 gånger och skapa 4 tabellrader 
        {
            var tabellrad = table.insertRow();// här får variabeln tabellrad en HTML kod som skappar en tabellrad inuti index sidan
            
            for(var j = 0; j < cols; j+=1)// Den här forstasen loppa 4 gånger och skapa 4 celler Inuti table raden som skapats i forsatsen innan  
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

                bildplats+=1;// Variabeln bildplats ökar met ett
            }
        }
        
        //------------------- Nytt spel --------------------------------
        
        document.getElementById("button").onclick = function()// startar om sidan genom att ladda om sidan 
        {
                window.location.reload();// laddar om sidan 
        
        };
    },
    
    
    vendbilder: function(bildplats, a) // Här hanterar vi vändning av memory bilderna   
    {
        
        a.onclick = function()// När man klickar på en bild så startar den här funktionen 
        {
           //------------------- kontrolerar vilken bild man trycker på  --------------------------------
           
            if (a.getElementsByTagName("img")[0].getAttribute("src") === "memory/pics/0.png") // vi Kontrollera att lenk man klickar på representerar bild numer 0 i mappen pices, getElementsByTagName returnerar en node list, [0] vi kotrolerar den frösrata img i nod listan  
            {
                Memory.par.push(a);// Här trycker  man in "a "variabeln som representerar en bild i par arrayen  
                
           
            //------------------- kontrolerar om arrayn par har minder än två platser --------------------------------
            
                if (Memory.par.length < 3) // Så länge arrayen par inte har mer än två värden så vissas bilden man klickar på 
                {
                a.getElementsByTagName("img")[0].setAttribute("src", "memory/pics/" + Memory.smlumpbilder[bildplats] + ".png");// Här vissas bilen man klickar på  
                } 
                

             
            } 
        };
    },
    
   
    Kontroll: function (bilder) // Kontrollerar bilder som är lika och ska vara öppna och bilder som är olika och ska stängas  
    {
        
        //------------------- kontrolerar om bilderna är lika   --------------------------------
        
        if (bilder[0].getElementsByTagName("img")[0].src === bilder[1].getElementsByTagName("img")[0].src) // den här if satsen kontrollerar om bilderna är lika 
        {
            Memory.par = [];
            
            Memory.antalpar+=1;// Räknar antal par man hittat   
            
        } 
        
            //------------------- Återställer två bilder som inte var lika  --------------------------------
            
            else 
            {
                for(var m = 0; m < 2; m+=1)// nollställer båda bilderna som finns i par arrayen  
                {
                bilder[m].getElementsByTagName("img")[0].setAttribute("src", "memory/pics/0.png");// nollställer båda bilderna  
                }
                
                Memory.par = [];// skapar ny par array 
                
                Memory.antalforsok+=1;//Räknar antal försök man gjort  
                
                document.getElementById("grattis").innerHTML = "Antal " + Memory.antalforsok + " försök!";// visar antal förösk
                
            }
            
            //-------------------spelt är slut, Grattis text --------------------------------
            
             if (Memory.antalpar === 8) // har man hittat 4 par så är spelet slut 
                {
          
                document.getElementById("grattis").innerHTML = "Grattis!!! spelet är slut, \nAntal " + Memory.antalforsok + " försök!";// lägger in texten i div när spelt är slut 
        
                 }
                
            

    }
  
};

window.onload = Memory.start;// startar funktionen som har label start när sidan har ladats