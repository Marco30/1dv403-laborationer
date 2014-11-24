"use strict";



var makePerson = function(persArr){


	// Din kod här...

	
	var name = "";// variabel som kommer ha alla namn som en string    
	
	var age =[];//array som kommer ha allas ålder 
	
	var temp = [];// en array som kommer ha namnen temporär tills det flytas över till name  
	
	var total = 0;// variabel som kommer ha den totala summan av arryan age  
	
    persArr.sort(function(a, b)// sorterar alla numeriska värden i objektet persArr    
    {
        return a.age-b.age;
    });
    
    for(var i = 0; i < persArr.length; i+=1) // i den här for satsen flyttar man över namn och ålder från objektet persArr till array temp och age    
    {
        temp [i]= persArr[i].name;
        age [i]= persArr[i].age;
        
        total += age[i];
        
    }
    
    var minAge = Math.min.apply( Math, age);// minsta åldern
    
    var maxAge = Math.max.apply( Math, age);// hösgta åldern
    
    
    var avarageAge = Math.round( total / age.length);//medelåldern
    
    temp.sort(function(a, b)// sorterar arrayen i bokstav ordning gör så det funkar med svenska tecken 
    { 
        return a.localeCompare(b, 'sv');
        
    });      
    
    name = temp.toString(); //tostring till omvandlar arrayen namn till string
    
    name = name.split(",").join(", ");// ersätter , med , och mellanslag i string
    
    
    return {minAge: minAge, maxAge: maxAge, averageAge: avarageAge, names: name};

};

var data = [{name: "Mats Loock", age: 46}, {name: "Johan Leitet", age: 36}, {name: "John Häggerud", age: 37}];

var result = makePerson(data);

console.log(result); 