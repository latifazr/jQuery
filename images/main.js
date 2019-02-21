$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=https://samples.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=b6de2ac9d54e1ea1fafb210aceb477c7", function (api) {
      console.log(api);

      for (let i = 0; i < api.data.length; i++) 
      {
        var j=0;
        x = "slid" + (i);
        console.log(x);
        
        document.getElementById(x).innerHTML = `<img src="http://${api.data[i].imagePath}"> <br> <h4>${api.data[i].label}</h4><br>`
        if (x!=="slid4") {
        do {  
          
          
         
          document.getElementById(x).innerHTML += `<p>- ${api.data[i].Services[j].label_service}</p>`
          j++;
       
       
     
        } while (j!=api.data[i].Services.length);
      } 
    else {
        do {  
          
   
          document.getElementById(x).innerHTML += `<p>- ${api.data[i].subCategories[j].label}</p>`
          j++;
     
     
        } while (j!=api.data[i].subCategories.length);

         }
        }


      });