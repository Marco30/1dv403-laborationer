"use strict";

function Message(message, date) //Konstruktor som har tvo privata variabler, vi använder get och set för att koma åt dem  
{
    
    this.getText = function()// används för att hämta en text 
    {
        return message;
    };
    
    this.setText = function(_text)// används för att lägga till en text 
    {
        message = _text;
    };
    
    this.getDate = function() 
    {
        return date;
    };
        
    this.setDate = function(_date) 
    {
        date = _date;
    };
}

Message.prototype.toString = function() 
{
    return this.getText()+" ("+this.getDate()+")";// visar tect och datumet till sammans
};

Message.prototype.getHTMLText = function() {
    return this.getText().replace(/[\n\r]/g, "<br />");// om vandlar alla \n  tll radbrytning innan man använder texten
};

Message.prototype.getDatetext = function() {//Tar ut tiden som separatas
    return this.getDate();
};

 /*var mess = new Message("marco", new Date());
 alert(mess);
 alert(mess.getText());
 mess.setText("enn annan text");
 alert(mess);*/