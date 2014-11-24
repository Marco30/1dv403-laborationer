"use strict";

function Message(message, date) 
{
    
    this.getText = function() 
    {
        return message;
    };
    
    this.setText = function(_text) 
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
    return this.getText()+" ("+this.getDate()+")";
};

 var mess = new Message("marco", new Date());
 alert(mess);
 alert(mess.getText());
 mess.setText("enn annan text");
 alert(mess);