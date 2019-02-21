function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    var time = new Date().getTime();
   
    var date = new Date(time);
    var n = date.getMinutes();
    var n1 = date.getHours();
    var n3 = date.getSeconds();
   
    
      var op = "TD2";
      var x= 20;
      var y =10;
      var z=10;
    var latitude =0;  
    var longitude= 0;
    var key = "1d4d4e73955189b75fef86371fbe0555";
    

    console.log(position.coords.latitude );
    latitude = position.coords.latitude ; 
    longitude = position.coords.longitude;
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + key, function (api) {
      console.log(api);
      $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat="+latitude + "&lon=" + longitude +"&cnt="+x+"&appid=" + key, function (apii) {
      console.log(apii);
      t=api.main.temp-273.15;
      var iconcode1 = api.weather[0].icon ;
      console.log(iconcode1);
      var imgsrc1= "http://openweathermap.org/img/w/"+iconcode1+".png";
      console.log(imgsrc1);
      tmin= api.main.temp_min -273.15;
      tmax= api.main.temp_max -273.15;
      img= api.weather[0].description;
     
      
      
      document.getElementById("tempo").innerHTML +=  `<div class="card bg-primary ml-2"><img src="${imgsrc1}" class="card-img-top w-100 <div class="card-body ml-3"><h5 ><centre>${api.name}</centre> </h5><p>Temprature actueill= ${Math.floor(t)} °c"</p> <p>${date.toLocaleDateString()}</p><p> ${n1}:${n}:${n3}</p><p>min=${Math.floor(tmin)}°c</p>  <p> max=  ${Math.floor(tmax)} °c</p>   <p>humidite = ${api.main.humidity}</p></div></div>`
     
   for (let i = 0; i < apii.list.length; i++) {
      var iconcode = apii.list[i].weather[0].icon ;
      console.log(apii.list[i].weather[0].icon)
      var imgsrc= "http://openweathermap.org/img/w/"+iconcode+".png"
      console.log(imgsrc)
        t1=apii.list[i].main.temp-273.15;
        console.log(apii.list[i].main.temp);
        t2min= apii.list[i].main.temp_min -273.15;
      t2max= apii.list[i].main.temp_max -273.15;
      
        document.getElementById("card").innerHTML += `  <div class="card bg-primary col col-2 ml-3 mt-2" ><img src="${imgsrc}" class="card-img-top w-100 ">  <div class="card-body "  ><h6 class="card-title" ><p>${apii.list[i].dt_txt}</p><p>Temprature= ${Math.floor(t1)} °c"</p></h6>
          <p class="card-text" > <br> min= ${Math.floor(t2min)}°c <br> <p> max=  ${Math.floor(t2max)} °c</p> </p> <br><p>humidite = ${apii.list[i].main.humidity}</p></div></div> `
          
      }
    
      
        
     
    
      
      
    
    });
});
  }



