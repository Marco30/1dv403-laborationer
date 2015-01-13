"use strict";

var Desktop = {
    
    counter : 0, // Den här variabeln användas för att kontrollära att bara en ruta är öppen  
    
    loadIcon : null,// Kommer ha ikonen som visar att systemet laddar   
    
    footer : null,//kommer ha footer rutan som kommer ha laddar ikonen     
    
    time : null,// kommer använda med setTimeout 
    
  
     //---------------------Den här funktionen kommer skapar en popup ruta--------------------------------
     
    popupwindow: function(galler)   
    { 
        Desktop.counter++;// counter har ökat med ett Vilket betyder att man nu inte längre kan öppna en till popup ruta     
        
        var popup = document.createElement("div");// Variabeln popup får HTML koden <div>
        
		popup.setAttribute("id", "popup");//variabeln popup (<div>) till delas id namnet popup <div id="popup">
				
		
		var top = document.createElement("div");// Variabeln top får HTML koden <div>
		
		top.setAttribute("id", "top");//variabeln top (<div>) till delas id namnet top <div id="top">
				
		var mid = document.createElement("div");// Variabeln mid får HTML koden <div>
		
		mid.setAttribute("id", "mid");//variabeln mid (<div>) till delas id namnet mid <div id="mid">
				
        Desktop.footer = document.createElement("div");// Variabeln footer får HTML koden <div>
 
	    Desktop.footer.setAttribute("id", "footer");//variabeln footer (<div>) till delas id namnet footer <div id="footer">
 
        //alert("I am an alert box!");// test
        
        	//--------skapar 3 ramar inuti popupfönstret 
        	
		popup.appendChild(top);// Variabeln popup får HTML koden <div id="top">
		
		popup.appendChild(mid);// Variabeln popup får HTML koden <div id="mid">
		
		popup.appendChild(Desktop.footer);// Variabeln popupfår HTML koden <div id="footer">
	
	
				//--------skapar 2 ramar inuti top ramen
				
        var topright = document.createElement("div");// Variabeln topright får HTML koden <div>
        
		topright.setAttribute("id", "topright");//variabeln topright (<div>) till delas id namnet topright <div id="mid">
				
		var topleft = document.createElement("div");// Variabeln topleft får HTML koden <div>
		
		topleft.setAttribute("id", "topleft");//variabeln topleft (<div>) till delas id namnet topleft <div id="mid">
				
		top.appendChild(topleft);// Variabeln top får HTML koden <div id="topleft">
		
		top.appendChild(topright);// Variabeln top får HTML koden <div id="topright">
		
		
		//--------Skapar HTML koden som kommer ha de två ikonerna i popup rutan---------------------
		
        var Bildgallerikon = document.createElement("img");// variabeln Bildgallerikon får HTML koden <img>
        
        Bildgallerikon.setAttribute("src", "images/camera.png");// <img> Egenskapen som länkar till bild och själva sökvägen till bilden 
        
        Bildgallerikon.setAttribute("id", "image");//variabeln Bildgallerikon (<div>) till delas id namnet image <div id="image">
        
        topleft.appendChild(Bildgallerikon); //Variabeln topleft får HTML koden <img>
        
        var avslutaikon = document.createElement("img");// variabeln avslutaikon får HTML koden <img>
        
         avslutaikon.setAttribute("src", "images/delete.png");// <img> Egenskapen som länkar till bild och själva sökvägen till bilden 
         
         avslutaikon.setAttribute("id", "avslutaikon")//variabeln avslutaikon (<div>) till delas id namnet image <div id="avslutaikon">
         
         topright.appendChild(avslutaikon);// variabeln topright får HTML koden <img>
         
         //--------Skapar laodikone och sen visar den---------------------
        
    
        // alert("I am an alert box2323!");// test
    
            
        Desktop.loadIcon = document.createElement("img");// variabeln loadIcon får HTML koden <img>
        
         Desktop.loadIcon.setAttribute("src", "images/ajax.gif");// <img> Egenskapen som länkar till bild och själva sökvägen till bilden 
         
          Desktop.loadIcon.setAttribute("id", "load")//variabeln loadIcon (<div>) till delas id namnet load <div id="load">
          
        Desktop.footer.appendChild(Desktop.loadIcon);// variabeln footert får HTML koden <img>
        
     //--------Skapar <div> som kommer ha bilderna som laddas hem---------------------
   
        var ajaxbild = document.createElement("div");// Variabeln ajaxbild får HTML koden <div>
        
        ajaxbild.appendChild(galler);// variabeln ajaxbild får HTML koden <div>
        
        mid.appendChild(ajaxbild);// variabeln mid får HTML koden <div> meda alla bilder.

        //alert("ok"); test
    
        document.getElementById("body").appendChild(popup);// skappar popup rutan med alla sina rutor       
        
        //----------------funktionen som tar bort popup rutan-------------- 
        
        avslutaikon.onclick = function()       
        { 
            popup.parentNode.removeChild(popup);// tar bort div med id popup
            
            Desktop.counter = 0;// Nolställer så att man kan öppna en ny ruta        
        };
        
        //alert("slut3!"); test kod
    },
    
    //----------------funktionen som kallar på laddarner funktionen-------------- 
    
    knapp: function() 
    {
            
            var galleryIcon = document.getElementById("Menyikon");// bilden som vissas på sidansbotten
            
            galleryIcon.addEventListener("click", function()// när ikonen klickas körs funktionen 
            {
                    if (Desktop.counter === 1) // om counter är 1 körs inte någosn funktion
                    {
                        return;
                    }
                    else
                    {
                    Desktop.laddarner();// starta laddarnerfunktionen
                    }
            },false);
    },
    
    //------------------Ajax funktionenn som hämtar Information från hemsidan, bearbetar den och läger in de i popup rutan--------- 
    
    laddarner : function() 
    {
        var galler = document.createElement("div");//Variabeln galler får HTML koden div 
        
        Desktop.popupwindow(galler);// kör popupwindow Funktionen som skapar popup rutan          
        
        var xhr = new XMLHttpRequest();// // vi skppar ett XMLHttpRequest objekt som får namnet  xhr 
        
        var count = 0;// Används för att numrera bilderna när dem läggs in som HTML kod          
        
        
        xhr.onreadystatechange = function() 
        {
            if(xhr.readyState === 4)// 4 betyder att att information är färdig sickat, den kan nu användas av oss, när datan finns på websidan så startar den här if satsen
            {
                if(xhr.status === 200)// den här if satsen är en säkerhet kontroll, 200 betyder att att överföringen från server till webbsidan gick bra
                {
                    var info = JSON.parse(xhr.responseText);// Omvandlar objekt vi får från servern till en arraye variabel med array funktioner. 
                    
                    //alert(xhr.responseText); test
                    
                    var temp; // varibelm kommer ha höjd och bred            
                    
                    var height = 0;// Variable som används för att få högsta höjd
                    
                    var width = 0;//Variable som används för att få högsta bred
                  
                  
                    //--------Letar upp bilden med den bredaste och högsta tumlängd--------
                    
                    for (var n = 0; n < info.length; n++)   
                    {
                        temp = info[n];
                        
                        if (temp.thumbHeight > height) // om temp.thumbHeight störe än height så sparar vi det som högsta höjd
                        {
                            height = temp.thumbHeight;
                        }
                        if (temp.thumbWidth > width) // om thumbWidth störe än width så sparar vi det som högsta bred
                        {
                            width = temp.thumbWidth;
                        }
                    }
                    
                     //------------------tar ut varje photo individuellt----------------
                     
                    for (var i = 0; i < info.length; i++) 
                    {
                        var bild = document.createElement("img");// variabeln bild får HTML koden <img>
                        
                        var temp2 = document.createElement("div");// Variabeln temp2 får HTML koden <div>
                        
                        temp2.setAttribute("class", "boxes");//variabeln temp2 (<div>) till delas class namnet  bild <div class="boxes">
                        
                       bild.setAttribute("src", info[i].thumbURL);// <img> Egenskapen som länkar till bild och själva sökvägen till bilden 
                        
                        bild.setAttribute("id", "photo" + count);//variabeln  bild (<div>) till delas id namnet  bild <div id="bild">
                        
                        temp2.appendChild(bild);// Variabeln galler får HTML koden <img> som här representerar dem nya bilderna som sätt in 
                        
                         galler.appendChild(temp2);// Variabeln galler får HTML koden <div class="boxes"> som sendan visas på sidan
                        
                        count++;// Används för att numrera bilderna när dem läggs in som HTML kod  
                        
                        //--------------------------funktionen ändrar bakgrundsbilden------------------
                        
                       bild.onclick = function(e)// klickar man på dem ner laddade bilderna så läggs det som bakgrunds bild 
                        {
                            var image = e.target.id.replace("photo", "");// bilden man klickat på  
                            
                            var Bakgrundsbild  = info[image].URL;//adresen till bilden
                            
                            var body = document.getElementById("body");// Variabeln body representerar HTML koden <body>
                            
                            body.style.backgroundImage = "url(" + Bakgrundsbild  + ")";// Nytt bakgrund bild placeras 
                            
                        };      
                        
                    temp2.style.width = width + "px";//höjd för bilderna som laddas in i popup rutan 
                    
                    temp2.style.height = height + "px";///bred för bilderna som laddas in i popup rutan 
                    
                    }
                }
                
                else 
                {
                    console.log("Fel!!!, status"+xhr.status);// om servern är ner får det fell som hanteras här  
                }
                

                
                Desktop.footer.removeChild(Desktop.loadIcon);// raderar loadkionen 
            }
        };
        
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);//// Här sätter vi inställningar, gör att laddaner eller laddaupp, GET betyder att vi lddarner, http server platsen där informationen vi behöver finns, true betyder asynkront vilket betyder att man kör den utan att störa resten av scriptet    
        
        xhr.send(null);//Den här används för att laddar upp information i servern     
    }
    
};

window.onload = Desktop.knapp;// startar funktionen som har label knapp när sidan har ladats