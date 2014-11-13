"use strict";

window.onload = function(){
	
	// Detta tal behöver bytas ut mot ett slumpat tal.
	var secret = Math.floor(Math.random() * 100 + 1); // här slumpar vi fram talet med hjälp av funktionen Math.floor() och tilldelar variabeln secret det slump mesiga talet   
	
	var turns = 0;
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		// Plats för förändring.
		
		turns+=1;
		
		if(number < 1 || number > 100) // om variablen nummer inte är en siffra mellan 1-100  går vi in här 
		{
		 return [false, "Talet är utanför intervallet 0 - 100"];
		}
		
		 else if (number == secret) // om du variabelerna number och secret är lika stora körs den här if satsen 
		  {      
	
		 return [true, "Gratis du gissade på rätt!!!, det hämliga numret var: " + secret +" du har gissat " + turns + " gånger"];
	
		  }
		 
		  else if (number < secret) // om du variabel number är mindre en secret så körs den här if satsen 
		  {
		  return [false, "talet du gissade var för litet"];
		  }
		 
		  else if (number > secret) // om du variabel number är störe en secret så körs den här if satsen 
		  {
		
		  return [false, "talet du gissade var för stort"];
		  }
		  



		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};