


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
            
<<<<<<< HEAD
            img.src = "/static/Photo Resource/ISS 360 0--90.59." + i + ".png";
            img.height = 550;
            img.width = 1050;

            src.appendChild(img);
            //console.log(i);
            i++;
=======
          img.src = "/static/Photo Resource/ISS 360 0-90.58." + i + ".png";
          src.appendChild(img);
          console.log(i);
          i++;
          initialize_var = 1;
>>>>>>> e6840e383a193e177ef812503358cc7ff004315a
    
          if (i <= j) {
              delay_function();
          }
           
            
      }, 0)
    } 
  
    else if (i > 187 && i < j && i_prev < i) {
      setTimeout(function() {    
          document.getElementById("img" + (i - 1)).remove();
            
          img.src = "/static/Photo Resource/ISS 360 0-90.58." + i + ".png";
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

<<<<<<< HEAD
            img.src = "/static/Photo Resource/ISS 360 0--90.59." + i + ".png";
            img.height = 550;
            img.width = 1050;
            src.appendChild(img);
            //console.log(i);
            i++;
=======
      setTimeout(function() {    
          document.getElementById("img" + (i + 1)).remove();
            
          img.src = "/static/Photo Resource/ISS 360 0-90.58." + i + ".png";
          src.appendChild(img);
          console.log(i);
          i_prev = i;
          i--;
>>>>>>> e6840e383a193e177ef812503358cc7ff004315a
    
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

          img.src = "/static/Photo Resource/ISS 360 0-90.58." + i + ".png";
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

          img.src = "/static/Photo Resource/ISS 360 0-90.58." + i + ".png";
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

/*
function delay_function() {
    const img = document.createElement('img');

    img.id = 'img' + i;

    img.src = "static/images/image" + i + ".jpg";

    var div = document.getElementById("ISSIMG");
    div.appendChild(img);

    document.getElementById("img" + i).remove();

}
*/


/*
function test(img, src) {         //  create a loop function
    i = 1;
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    var src = document.getElementById("Img232");
    var img = document.createElement("img");

    img.src = "static/images/image" + i + ".jpg";
    src.appendChild(img);   //  your code here
    i++;                    //  increment the counter
    if (i <= 4) {           //  if the counter < 10, call the loop function
      insert();             //  ..  again which will trigger another 
      img.parentNode.removeChild(img);
    }                       //  ..  setTimeout()
    }, 5000)
  }

*/

/*
function insert(){

    var src = document.getElementById("Img232");
    var img = document.createElement("img");

    

    img.src = "static/images/image" + i + ".jpg";
    src.appendChild(img);


//    img.parentNode.removeChild(img);
} 
*/
// function sleep(duration) {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve()
// 		}, duration * 1000)
// 	})
// }

// function insert(img, src){
//     while (true) {
//         const d = new Date();
//         let minutes = d.getUTCMinutes();
//         console.log(minutes);
//     };

//     for(i = 1; i <= 4; i++){
//         var src = document.getElementById("Img232");
//         var img = document.createElement("img");

//         img.src = "static/images/image" + i + ".jpg";
//         src.appendChild(img);
//         sleep(1000);
//         //img.parentNode.removeChild(img);
//     }


// }