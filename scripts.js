var i = 187;
var i_prev = i - 1;
var j = 198;
var initialize_var = 0;

function delay_function() {
    var src = document.getElementById("ISSIMG");
    var img = document.createElement("img");
    img.id = "img" + i;

    if (initialize_var == 0) {
      setTimeout(function() {    
            
          img.src = "Images/ISS 360 0-90.58." + i + ".png";
          img.height = 550
          img.width = 750
          src.appendChild(img);
          console.log(i);
          i++;
          initialize_var = 1;
    
          if (i <= j) {
              delay_function();
          }
           
            
      }, 0)
    } 
  
    else if (i > 187 && i < j && i_prev < i) {
      setTimeout(function() {    
          document.getElementById("img" + (i - 1)).remove();
            
          img.src = "Images/ISS 360 0-90.58." + i + ".png";
          img.height = 550
          img.width = 750
          src.appendChild(img);
          console.log(i);
          
          i_prev = i;
          i++;
    
          if (i <= j) {
            delay_function();
          }
           
            
      }, 20000)
    } 
    else if (i > 187 && i < j && i_prev > i) {

      setTimeout(function() {    
          document.getElementById("img" + (i + 1)).remove();
            
          img.src = "Images/ISS 360 0-90.58." + i + ".png";
          img.height = 550
          img.width = 750
          src.appendChild(img);
          console.log(i);
          i_prev = i;
          i--;
    
          if (i >= 187) {
              delay_function();
          }
           
            
      }, 20000)
    } 
    else if(i == 187) {
      setTimeout(function() {    
          document.getElementById("img" + (i + 1)).remove();

          var src = document.getElementById("ISSIMG");
          img.id = "img" + i;

          img.src = "Images/ISS 360 0-90.58." + i + ".png";
          img.height = 550
          img.width = 750
          src.appendChild(img);
          console.log(i);
          i_prev = i - 1;
          i++;
    
          if (i <= j) {
              delay_function();
          }
            
      }, 20000)
    }

    else if(i == j) {
      setTimeout(function() {    
          document.getElementById("img" + (i - 1)).remove();

          var src = document.getElementById("ISSIMG");
          img.id = "img" + i;

          img.src = "Images/ISS 360 0-90.58." + i + ".png";
          img.height = 550
          img.width = 750
          src.appendChild(img);
          console.log(i);
          i_prev = i + 1;
          i--;
    
          if (i <= j) {
              delay_function();
          }
            
      }, 20000)
    }
    
};