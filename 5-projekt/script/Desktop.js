"use strict";

var Desktop = {
    
    counter : 0,
    
    loadIcon : null,
    
    footer : null,
    
    time : null,
    
     //Variablerna för popup fönstret.
    popupwindow: function(galler) 
    { 
        Desktop.counter++;
        
        
        var popup = document.createElement("div");
        
		popup.setAttribute("id", "popup");
				
		
		var top = document.createElement("div");
		top.setAttribute("id", "top");
				
		var mid = document.createElement("div");
		mid.setAttribute("id", "mid");
				
 Desktop.footer = document.createElement("div");
 
	 Desktop.footer.setAttribute("id", "footer");
 
 alert("I am an alert box!");
				
		popup.appendChild(top);
		
		popup.appendChild(mid);
		
		popup.appendChild(Desktop.footer);// skapar tre ramar inuti popupfönstret 
				
        var topright = document.createElement("div");
		topright.setAttribute("id", "topright");
				
		var topleft = document.createElement("div");
		topleft.setAttribute("id", "topleft");
				
		top.appendChild(topleft);
		top.appendChild(topright);// dellar upp topramen i höger och vänster
		
        var Bildgallerikon = document.createElement("img");
        
        Bildgallerikon.setAttribute("src", "images/tinyCamera.png");
        
        Bildgallerikon.setAttribute("id", "image");
        
        topleft.appendChild(Bildgallerikon);
        
        var avslutaikon = document.createElement("img");
        
         avslutaikon.setAttribute("src", "images/delete.png");
         
         avslutaikon.setAttribute("id", "cancelButton")
         
         topright.appendChild(avslutaikon);
        
        var ajaxbild = document.createElement("div");
    
        alert("I am an alert box2323!");
        
        Desktop.time = setTimeout(function() 
        {
            
        Desktop.loadIcon = document.createElement("img");
        
         Desktop.loadIcon.setAttribute("src", "images/ajax.gif");
         
          Desktop.loadIcon.setAttribute("id", "load")
          
        Desktop.footer.appendChild(Desktop.loadIcon);
        
        },300);  
        
   
        
        
        //"Knuffar" in taggarna i popup rutan.
        //cancelButton.setAttribute("click");
        
        ajaxbild.appendChild(galler);
        
        mid.appendChild(ajaxbild);

alert("ok");
        //body.insertBefore(body.firstChild);
        
        document.getElementById("body").appendChild(popup);
        
        //Funktion som stänger ner popup fönstret.
        avslutaikon.onclick = function() 
        { 
            popup.parentNode.removeChild(popup);
            
            Desktop.counter = 0;
        };
        
        alert("slut3!");
    },
    
    
     //Ajax metoden som hämtar ut länken med bilderna och knuffar in de i popup fönstret. 
    laddarner : function() 
    {
        var galler = document.createElement("div");
        
        Desktop.popupwindow(galler);
        
        var xhr = new XMLHttpRequest(); 
        
        var count = 0;
        
        
        xhr.onreadystatechange = function() 
        {
            if(xhr.readyState === 4) 
            {
                if(xhr.status === 200) 
                {
                    var info = JSON.parse(xhr.responseText);
                    
                    alert(xhr.responseText);
                    
                }
            }
        };
        
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);    
        
        xhr.send(null);
    }
    
};

window.onload = Desktop.laddarner;