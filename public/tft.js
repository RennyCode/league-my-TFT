
var teamSize = 0; //number of current selected champs.

var champStatus  = [] ; // creates and a array to take mode of all selectable champ. On/Off
for(var i=0; i<59;i++)
  champStatus[i]= '0' ;


var membersID = ['memb1','memb2','memb3','memb4','memb5','memb6','memb7','memb8','memb9'];   //img to add cto the teams

var teamComboID = ['teamCombos1','teamCombos2','teamCombos3','teamCombos4','teamCombos5','teamCombos','teamCombos7','teamCombos8','teamCombos9']; // p to write to

var teamEffectIndex = 0;

//in alphabetical order, tracks number of group members : academy ,christmas ,coven ,galaxy ,gentleman
// ,halloween ,king in the north ,lover ,mafia ,military ,police , prehistoric ,royalty ,zombie.
var teamMembersClassTracker = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 

var teamMembersOriginTracker = [0,0,0,0,0,0,0,0,0,0,0,0,0]; 
// Bandle City ,Bilgewater ,Demacia ,Freljord ,Ionia ,Ixtal ,Noxus ,Piltover ,Shadow Isles ,Shurima ,Targon ,Void ,Zaun


function clicked(clickedID,imgSrc){

    var addSignal = 0; // 0 if removed , 1 if added
     clickedOn = document.getElementById(clickedID); //get id of clicked img


    if(champStatus[clickedID-1] == '0'){// if a champ got selected   
        if(teamSize<9 && teamSize >= 0){    //add hcamp to team
            champStatus[clickedID-1] = '1';
            clickedOn.style.borderColor = "blue"; 
            
            addToTeam(imgSrc);
            teamSize++; 
            addSignal++;
          }
          else                          //team is full. can add champ
            alert('your team is full!');
          
       }
    else{           // if user unselect a champ
      
      champStatus[clickedID-1] = '0';
      clickedOn.style.borderColor = "white"; 
      
      removeFromTeam(imgSrc); //remove champ
      teamSize--;
    } 
    accessData(addSignal,clickedID);
    
    addSignal = 0;
}


function addToTeam(imgSrc,){ //add function

  var addChamp = document.getElementById(membersID[teamSize]);
  addChamp.src = imgSrc;
}

function removeFromTeam(imgSrc){ //remove function

  if(check(imgSrc)){ //checks if it's not the last champ  , then need to reload in the new order of the team
    
    reload(imgSrc); //reload team
  }
  else{
    var removeChamp = document.getElementById(membersID[teamSize-1]); //the champ that needs to be remove is the last on so no reload is needed.
    removeChamp.src = '/champions/unknown.jpg';
  }

}

function check(imgSrc){ // check if relaod is needed

 

  if(teamSize == 1 || (imgSrc == document.getElementById(membersID[teamSize-1]).src )) //if team contains only one or its the last one
    return 0;
  return 1;
}

function reload(imgSrc){
  
  var position = 0

  while(position<teamSize-1){ //find location of the unselect champ in the team.

    if(document.getElementById(membersID[position]).src ==(imgSrc))
      break;  
    position++;
  }

  var timesToMove = teamSize - position;
  for(var i=0;i<timesToMove;i++){ //move,push and over writeב
  
    if( position + i == 8 ){
      document.getElementById(membersID[position+i]).src = '/champions/unknown.jpg';
      break;
      }
    document.getElementById(membersID[position+i]).src = document.getElementById(membersID[position+i+1]).src;

  }
}

function accessData(addSignal,clickedID){
  var xhttp = new XMLHttpRequest(); // will only run on a server, so the json file can ber read.
  xhttp.onreadystatechange = function() {   // open the server on the command pro. in the html file location,
      if (this.readyState == 4 && this.status == 200) {     // then the whole file of the TFT will be up as a server, through that
        var response = JSON.parse(xhttp.responseText);    // you'll be able to access the page and it will recogngize the json fille as well.

        championsFromjson=response.champions;   
        
        champClass = championsFromjson[clickedID-1].class;
        champOrigin = championsFromjson[clickedID-1].origin;

        var tableClassIndex = 0;
        var tableOriginIndex = 0;
       
       
        switch(champClass) {
          case "Academy":
            if(addSignal)
              teamMembersClassTracker[0]++;
            else
              teamMembersClassTracker[0]--;

            tableClassIndex = 0;  
            break;
          case "Christmas":
            if(addSignal)
              teamMembersClassTracker[1]++;
            else
              teamMembersClassTracker[1]--;
            tableClassIndex = 1; 
            break;
          case "Coven":
            if(addSignal)
              teamMembersClassTracker[2]++;
            else
              teamMembersClassTracker[2]--;
            tableClassIndex = 2;  
            break;
          case "Galaxy":
            if(addSignal)
              teamMembersClassTracker[3]++;
            else
              teamMembersClassTracker[3]--;
            tableClassIndex = 3;  
            break;
          case "Gentleman":
            if(addSignal)
              teamMembersClassTracker[4]++;
            else
              teamMembersClassTracker[4]--;
            tableClassIndex = 4;  
            break;
          case "Halloween":
            if(addSignal)
              teamMembersClassTracker[5]++;
            else
              teamMembersClassTracker[5]--;
            tableClassIndex = 5;
            break;
          case "King-in-the-north":
            if(addSignal)
              teamMembersClassTracker[6]++;
            else
              teamMembersClassTracker[6]--;
            tableClassIndex = 6;  
            break;
          case "Lover":
            if(addSignal)
              teamMembersClassTracker[7]++;
            else
              teamMembersClassTracker[7]--;
            tableClassIndex = 7;
            break;
          case "Mafia":
            if(addSignal)
              teamMembersClassTracker[8]++;
            else
              teamMembersClassTracker[8]--;
            tableClassIndex = 8;
            break;
          case "Military":
            if(addSignal)
              teamMembersClassTracker[9]++;
            else
              teamMembersClassTracker[9]--;
            tableClassIndex = 9;
            break;
          case "Police":
            if(addSignal)
              teamMembersClassTracker[10]++;
            else
              teamMembersClassTracker[10]--;
            tableClassIndex = 10;
            break;
          case "Prehistoric":
            if(addSignal)
              teamMembersClassTracker[11]++;
            else
              teamMembersClassTracker[11]--;
            tableClassIndex = 11;  
            break;      
          case "Royalty":
            if(addSignal)
              teamMembersClassTracker[12]++;
            else
              teamMembersClassTracker[12]--;
            tableClassIndex = 12;
            break;              
          default:  //zombie
          if(addSignal)
            teamMembersClassTracker[13]++;
          else
            teamMembersClassTracker[13]--;  
          tableClassIndex = 13;  
        }

        switch(champOrigin) {
          case "Bandle city":
            if(addSignal)
              teamMembersOriginTracker[0]++;
            else
              teamMembersOriginTracker[0]--;
            tableOriginIndex = 0;  
            break;
          case "Bilgewater":
            if(addSignal)
              teamMembersOriginTracker[1]++;
            else
              teamMembersOriginTracker[1]--;
            tableOriginIndex = 1;
            break;
          case "Demacia":
            if(addSignal)
              teamMembersOriginTracker[2]++;
            else
              teamMembersOriginTracker[2]--;
            tableOriginIndex = 2;
            break;
          case "Freljord":
            if(addSignal)
              teamMembersOriginTracker[3]++;
            else
              teamMembersOriginTracker[3]--;
            tableOriginIndex = 3;
            break;
          case "Ionia":
            if(addSignal)
              teamMembersOriginTracker[4]++;
            else
              teamMembersOriginTracker[4]--;
            tableOriginIndex = 4;
            break;
          case "Ixtal":
            if(addSignal)
              teamMembersOriginTracker[5]++;
            else
              teamMembersOriginTracker[5]--;
            tableOriginIndex = 5;
            break;
          case "Noxus":
            if(addSignal)
              teamMembersOriginTracker[6]++;
            else
              teamMembersOriginTracker[6]--;
            tableOriginIndex = 6;
            break;
          case "Piltover":
            if(addSignal)
              teamMembersOriginTracker[7]++;
            else
              teamMembersOriginTracker[7]--;
            tableOriginIndex = 7;
            break;
          case "Shadow isles":
            if(addSignal)
              teamMembersOriginTracker[8]++;
            else
              teamMembersOriginTracker[8]--;
            tableOriginIndex = 8;
            break;
          case "Shurima":
            if(addSignal)
              teamMembersOriginTracker[9]++;
            else
              teamMembersOriginTracker[9]--;
            tableOriginIndex = 9;
            break;
          case "Targon":
            if(addSignal)
              teamMembersOriginTracker[10]++;
            else
              teamMembersOriginTracker[10]--;
            tableOriginIndex = 10;
            break;
          case "Void":
            if(addSignal)
              teamMembersOriginTracker[11]++;
            else
              teamMembersOriginTracker[11]--;
            tableOriginIndex = 11;
            break;                 
          default:  //zuan
            if(addSignal)
              teamMembersOriginTracker[12]++;
            else
              teamMembersOriginTracker[12]--;
            tableOriginIndex = 12; 
        }

      
        updateEffects(addSignal,tableClassIndex,tableOriginIndex);
      }
      
  };
  xhttp.open("GET", "champData.json", true);
  xhttp.send();
}

function updateEffects(addSignal,tableClassIndex,tableOriginIndex){

  textChange1 = document.getElementById("teamCombos1");


  

  if(teamSize == 0){    //reset erffects if team is empty then text box should be reset
    textChange1.innerHTML = "Chose champions for your team.... ";

    return;
    }
  
    //   check clickedID move at table
 
  switch(tableClassIndex) {
      case 0:
        if(teamMembersClassTracker[0] == 3 && addSignal == 1 ){   //academy
          //then need to write new effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');
          
        }
        else if(teamMembersClassTracker[0] == 2  && addSignal == 0){
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else
        {
          console.log('Do nothing!!!')
        }
        break;
      case 1:
        if(teamMembersClassTracker[1] == 2  && addSignal == 1 ){   //christmas
        
          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[1] == 1  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else
        {
          console.log('Do nothing!!!')
        }
        break;
      case 2:
        if(teamMembersClassTracker[2] == 3 && addSignal == 1  ){   //coven

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[2] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else
        {
          console.log('Do nothing!!!')
        }
        break;
      case 3:
        if(teamMembersClassTracker[3] == 1 && addSignal == 1 ){   //galaxy

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');
        
        } 
        else if(teamMembersClassTracker[3] == 0  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        } 
        break;
      case 4:
        if(teamMembersClassTracker[4] == 1 && addSignal == 1  ){   //gentleman

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');
        
        }
        else if(teamMembersClassTracker[4] == 0  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 5:
        if(teamMembersClassTracker[5] == 3 && addSignal == 1  ){   //halloween

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');
        
        }
        else if(teamMembersClassTracker[5] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 6:
        if(teamMembersClassTracker[6] == 1 && addSignal == 1 ){   //king in the north

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[6] == 0  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 7:
        if(teamMembersClassTracker[7] == 3  && addSignal == 1 ){   //lover

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[7] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }  
        break;
      case 8:
        if(teamMembersClassTracker[8] == 2 && addSignal == 1 ){   //mafia

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[8] == 1  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        
        break;
      case 9:
        if(teamMembersClassTracker[9] == 3 && addSignal == 1 ){   //military
          
          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[9] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 10:
        if(teamMembersClassTracker[10] == 3 && addSignal == 1 ){   //police

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[10] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 11:
        if(teamMembersClassTracker[11] == 3 && addSignal == 1 ){   //prehistoric

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[11] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;      
      case 12:
        if(teamMembersClassTracker[12] == 2 && addSignal == 1 ){   //royalty

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersClassTracker[12] == 1  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
         
        break;              
      default:   //zombie
      if(teamMembersClassTracker[13] == 2 && addSignal == 1  ){   

        console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

      }
      else if(teamMembersClassTracker[13] == 1  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
      else{
        console.log('Do nothing!!! got to default')
      }




  }

    switch(tableOriginIndex) {
      case 0:
        if(teamMembersOriginTracker[0] == 3 && addSignal == 1 ){   //academy
          //then need to write new effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');
          
        }
        else if(teamMembersOriginTracker[0] == 2  && addSignal == 0){
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else
        {
          console.log('Do nothing!!!')
        }
        break;
      case 1:
        if(teamMembersOriginTracker[1] == 2  && addSignal == 1 ){   //christmas
        
          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[1] == 1  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else
        {
          console.log('Do nothing!!!')
        }
        break;
      case 2:
        if(teamMembersOriginTracker[2] == 3 && addSignal == 1  ){   //coven

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[2] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else
        {
          console.log('Do nothing!!!')
        }
        break;
      case 3:
        if(teamMembersOriginTracker[3] == 1 && addSignal == 1 ){   //galaxy

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');
        
        } 
        else if(teamMembersOriginTracker[3] == 0  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        } 
        break;
      case 4:
        if(teamMembersOriginTracker[4] == 1 && addSignal == 1  ){   //gentleman

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');
        
        }
        else if(teamMembersOriginTracker[4] == 0  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 5:
        if(teamMembersOriginTracker[5] == 3 && addSignal == 1  ){   //halloween

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');
        
        }
        else if(teamMembersOriginTracker[5] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 6:
        if(teamMembersOriginTracker[6] == 1 && addSignal == 1 ){   //king in the north

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[6] == 0  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 7:
        if(teamMembersOriginTracker[7] == 3  && addSignal == 1 ){   //lover

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[7] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }  
        break;
      case 8:
        if(teamMembersOriginTracker[8] == 2 && addSignal == 1 ){   //mafia

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[8] == 1  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        
        break;
      case 9:
        if(teamMembersOriginTracker[9] == 3 && addSignal == 1 ){   //military
          
          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[9] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 10:
        if(teamMembersOriginTracker[10] == 3 && addSignal == 1 ){   //police

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[10] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;
      case 11:
        if(teamMembersOriginTracker[11] == 3 && addSignal == 1 ){   //prehistoric

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[11] == 2  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
        break;      
      case 12:
        if(teamMembersOriginTracker[12] == 2 && addSignal == 1 ){   //royalty

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

        }
        else if(teamMembersOriginTracker[12] == 1  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
        else{
          console.log('Do nothing!!!')
        }
         
        break;              
      default:   //zombie
      if(teamMembersOriginTracker[13] == 2 && addSignal == 1  ){   

        console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' add effect from the text box');

      }
      else if(teamMembersOriginTracker[13] == 1  && addSignal == 0)
        {
          //need to remove effect

          console.log('what div to deal with : '+teamComboID[teamEffectIndex]+' ,remove effect from the text box');

        }
      else{
        console.log('Do nothing!!! got to default')
      }


    }

    // print out new effects. ->if the amount of the group member will becom in effect (such as 3/3 or 6/6 or 1/1) and effecr, some coloring or something for that acknowledgment.



}
