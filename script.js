// TODO: add code here

window.addEventListener("load", function(){
  
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
   
             response.json().then(function(json) {

      
                 const container = document.getElementById("container").innerHTML=`
      
     
      
                  
                    <h2>Number of austronauts: ${json.length}</h2>
                    ${json.map(function(json){
                    return `
                    
                    <div class="astronaut"> 
                    
                    <div "bio">
                     <h3>${json.firstName} ${json.lastName} </h3>             
                     <ul>
                     <li>HoursInSpace: ${json.hoursInSpace}</li>
                     <li>Active:${json.active}</li>
                     <li>Skills:${json.skills}</li>
                     </ul>      
                   </div>
                   <img class="avatar" src=${json.picture} height=100></img>
              
                  </div> `
                  }).join('')}
                
                   `
                 });
               });
             });
