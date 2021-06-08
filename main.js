var images = 
    [
"images.jpg",
        
        "nanu.jpg",
     
     "nani.jpg", 
     
     
     
     "papa.jpg",
     
     "Mummy.jpg",
     
     "mishti.jpg",
     
     "candy.jpg",

     "shourya.jpg"
     
];

var names = ["FAMILY BOOK", "GRANDFATHER", "GRANDMOTHER", "FATHER", "MOTHER", "BIG SISTER", "LIL SISTER", "ME"]


var i = 0;
function update()

{
    i++;
    var number_of_family_member_in_array = 7
    if(i > number_of_family_member_in_array)
    {
        i=0;
    }

    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}