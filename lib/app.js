 
      
   
        
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
