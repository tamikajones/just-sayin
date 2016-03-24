 
      
    var person = prompt("Hi enter your name!", "Type here");

        if (person != null) {
            document.getElementById("demo").innerHTML =
                "Howdy " + person + " you are a beautiful unicorn!";
        }

        function myFunction2() {
            
            ("Howdy\nI am a country computer.");
        }
        
   new WOW().init();
   
   var count = 0;
   
    function mainAlert()
{
    
    var name = $('#name').val();

    
    alert(name+",you're a beautiful unicorn!");
    
    count++;
    
    $('#countAlert').show();
    
    $('#countAlert #number').text(count);

}


var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
