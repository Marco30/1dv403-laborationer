"use strict";

var Desktop = {
    
    counter : 0,
    
    loadIcon : null,
    
    footer : null,
    
    time : null,
    
    //Variablerna för popup fönstret.
    popupWindow: function() 
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
		
        var imageIcon = document.createElement("img");
        
        imageIcon.setAttribute("src", "images/tinyCamera.png");
        
        imageIcon.setAttribute("id", "image");
        
        topleft.appendChild(imageIcon);
        
        var cancelButton = document.createElement("img");
        
         cancelButton.setAttribute("src", "images/delete.png");
         
         cancelButton.setAttribute("id", "cancelButton")
         
         topright.appendChild(cancelButton);
        
        var ajaxImg = document.createElement("div");
    
        alert("I am an alert box2323!");
   
        
        //"Knuffar" in taggarna i popup rutan.
        //cancelButton.setAttribute("click");
        
        ajaxImg.appendChild(galler);
        
        mid.appendChild(ajaxImg);

alert("ok");
        //body.insertBefore(body.firstChild);
        
        document.getElementById("body").appendChild(popup);
        
        
        alert("slut3!");
    }
    
    
};

window.onload = Desktop.popupWindow;