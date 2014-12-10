"use strict";

var quiz = {
    
    
    start : function()
    {
        
        var xhr = new XMLHttpRequest();
        

        xhr.onreadystatechange=function()       
        {
      
        if (quiz.xhr.readyState === 4)
        {
      
            if(quiz.xhr.status === 200)
            {
               var text =  JSON.parse(quiz.xhr.responseText);
            document.getElementById("textonpage").innerHTML = " Hej " + text.question; 
            }
            
             else
            {
                var text1 = JSON.parse(quiz.xhr.status);
            document.getElementById("textonpage").innerHTML ="Error"+ text1.question;
            
                
            }
    
        }
  
        quiz.xhr.open("GET","http://vhost3.lnu.se:20080/question/1",true);

       quiz.xhr.send(null);
        
    }

}
   
};


window.onload = quiz.start;