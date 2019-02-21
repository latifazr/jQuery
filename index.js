
$.getJSON("https://cors.io/?http://api.myglamapp.pl/api/categories?language=EN", function (result) {
    console.log(result);
    var text = "";
    for (i = 0; i < result.data.length; i++) {
        // affichage par 1 paregraphe
        /*var text="";
        text +='<p>'+ result.data[i].id + '</P>';
        text +='<p>'+ result.data[i].label + '</P>';
        text +='<p>'+ result.data[i].description + '</P>';
        text +='<p>'+ '<img src="http://'+ result.data[i].imagePath+'">' + '</P>';*/

        // affichage de +iseur

        /* text +='<div class="card">'+'<p>'+ result.data[i].id+ '<p>'+'<p>'+ result.data[i].label +'<p>'+'<p>'+'<img src= "http://'+result.data[i].imagePath+'">'+ '<p>'+'<p>'+result.data[i].description+'<p>'+'</div>';
         document.getElementById("tab").innerHTML = text;*/

        // affichage de card
       /* text += '<div class="container">' +
            '<div class="card" style="width:400px">' +
            '<img class="card-img-top" src="http://' + result.data[i].imagePath + '" alt="Card image" style="width:100%">' +
            '<div class="card-body">' +
            '<h4 class="card-title">' + result.data[i].label + '</h4>' +
            '<p class="card-text">' + result.data[i].description + '</p>' +
            '</div>' +
            '</div>';
        document.getElementById("tab").innerHTML = text;*/

        
            if (i == 0) {
                text +=
                '<div class="carousel-item active">' +
                '<img src="http://' + result.data[i].imagePath + '"  class="d-block w-100">' +
                '<div class="carousel-caption d-none d-md-block">'+
                '<h4 style="color:black">' + result.data[i].label + '</h4>' +
                '<p style="color:black">' + result.data[i].description + '</p>' +
                '</div>'+
                '</div>'+
                '</div>';}
            else {
                text +=
                '<div class="carousel-item">'+
                '<img src="http://' + result.data[i].imagePath + '" class="d-block w-100">' +
                '<div class="carousel-caption d-none d-md-block">'+
                '<h4 style="color:black">' + result.data[i].label + '</h4>' +
                '<p style="color:black">' + result.data[i].description + '</p>' +
                '</div>'+
                '</div>'+
                '</div>';
            }

            document.getElementById("tab").innerHTML = text;





        // console element
        /*  const element1 = result.data[i].id;
          const element2 = result.data[i].description;
          const element3 = result.data[i].imagePath;
          const element4 = result.data[i].label;*/

        // console.log(element1);
        // console.log(element2);
        // console.log(element3);
        // console.log(element4);
        // console.log("      ");

        //  document.getElementById("message1").innerHTML = element1;
        //  document.getElementById("message2").innerHTML = element2;
        //  document.getElementById("message3").innerHTML = element3;
        //  document.getElementById("message4").innerHTML = element4;



        // tableau

        /*  var table = '<table class ="table table-hover table-checkable order-column full-width">';
          table += '<tr>';
          table += '<th>' + "Id" + '</th>';
          table += '<th>' + "Description" + '</th>';
          table += '<th>' + "label" + '</th>';
          table += '<th>' + "Image" + '</th>';
          table += '</tr>';
          for (var j = 0; j < result.data.length; j++) {
  
              table += '<tr>';
              table += '<td>' + result.data[j].id + '</td>';
              table += '<td>' + result.data[j].description + '</td>';
              table += '<td>' + result.data[j].label + '</td>';
              table += '<td><img class="imagP" src="http://'+ result.data[j].imagePath+'"></td>';
          }
          document.getElementById("tab").innerHTML = table; */

    }
}
);



