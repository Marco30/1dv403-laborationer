"use strict";



var makePerson = function(persArr){


	// Din kod här...
	
	var nameage = persArr.slice();
	
	var name = "";
	var age =[];
	
nameage.sort(function(a, b)
{
 return a.age-b.age
})

for(var i = 0; i < nameage.length; i+=1) 
{
    name += " " + nameage[i].name;
    age [i]= nameage[i].age;

}
var minAge = Math.min.apply( Math, age); 
var maxAge = Math.max.apply( Math, age);
var avarageAge = age[(age.length - 1) / 2];
 

console.log( "minAge: " + minAge + "maxAge: " + maxAge + " averageAge: " + avarageAge + " names: " + name);



};


var data = [{name: "Mats Loock", age: 46}, {name: "Johan Leitet", age: 36}, {name: "John Häggerud", age: 37}];

var result = makePerson(data);

console.log(result); 