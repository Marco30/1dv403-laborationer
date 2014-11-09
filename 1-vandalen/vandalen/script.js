"use strict";



var makePerson = function(persArr){


	// Din kod här...
	
	var nameage = persArr.slice();
	


alert(JSON.stringify(nameage));

};


var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result); 