$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
   $("button").click(function(){
       let finalResult = "";
       let anything= $(".input").val();
        let arr = anything.split(" ");  
        arr.forEach(function(word){
            let firstchar= word.charAt(0);
            let result= word.substr(1);
            result= result + firstchar + 'ay';
            finalResult = finalResult + " " + result;

        });


      



       $(".output").text(finalResult);
});
});
