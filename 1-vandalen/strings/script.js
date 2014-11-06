"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
	if (str==="")// if stasen kontrollerar om str =  "" vilket betyder att det inte har någon text     
	{
		var m="ingen text har mattas in";
		return m;
	}

	else
	{

		var test="";
		
		var text = "";
		
		for(var i=0; i <= str.length; i+=1)// vi löper igenom variabeln str i den här for satsen           
		{
		    test = str.charAt(i);
		    
		    	if (test == test.toUpperCase()) // if stasen kontrollerar om bokstaven är en stor bokstav   
		    	{
		    		text += test.toLowerCase();
		    	 
		    	}
		    	
		    	else if (test == test.toLowerCase())// if stasen kontrollerar om bokstaven är en liten bokstav 
		    	{
		    		text += test.toUpperCase();
		    	}
		  
		}
		
		text = text.replace(/\a|\A/g,"#");//byter ut litet och stort A mot # med hjälp av metoden replace
		
		return text;
		
	}

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};