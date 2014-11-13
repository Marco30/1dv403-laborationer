"use strict";

window.onload = function(){

	
	var birthday = function(date){
		


			// Din kod här.
		if (Date.parse(date))// om det inmatad inte är i formatet YYYY-MM-DD så körs inte if satsen och vi hopar till else satsen som kör ett fel meddelande  
		{
		
			var birthday = new Date(date); //vi skapar ett objekt av typen Date och matar in år-månad-dag
			
			var currentdate = new Date();// Date objekt som har dages datum och tid  
			 
			var day = 24 * 60 * 60 * 1000; // är sifran på antal mikrosekunder i en dag
			 
			birthday.setFullYear(currentdate.getFullYear());// ersätter året som matats in med året vi befinner os i   
			
			var d1 = birthday.getTime();//ger d1 variabeln datumet som finns data objektet i millisekunder    
			
			var d2 = currentdate.getTime();// d2 ger variabeln datumet som finns data objektet i millisekunder 
			
			var daysleft = Math.floor((d1 - d2) / (day));// här subtraherar vi två tal som presenterar två olika datum och dividerar det med antal millisekunder som finns i endag för at få tantal dagar kvar      
			
		if(daysleft < 0)// om daysleft variabeln är mindre än 0 så betyder det att du rädan fylt år
		{
		
			birthday.setFullYear(currentdate.getFullYear() + 1);// för att räkna ut hur många dagar som är kvar, om du redan fyllt år så ökar vi med ett år 2014 blir 2015. 
								
			d1 = birthday.getTime();//ger d1 variabeln datumet som finns data objektet i millisekunder    
			
			d2 = currentdate.getTime();// d2 ger variabeln datumet som finns data objektet i millisekunder 
			
			daysleft = Math.floor((d1 - d2) / (day));// här subtraherar vi två tal som presenterar två olika datum och dividerar det med antal millisekunder som finns i endag för at få tantal dagar kvar      
			
			daysleft+=1;// läger till en dag för att räkna med dagen vi befinner os i, annars för viner den   
			
			return daysleft;
		}
		
			daysleft+=1;// läger till en dag för att räkna med dagen vi befinner os i, annars för viner den   
			return daysleft;
		
		}
		else 
		{
			throw new Error("skriva i formatet YYYY-MM-DD");// visar fel meddelande 
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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};