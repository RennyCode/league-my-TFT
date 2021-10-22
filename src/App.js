import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import page2 from './components/page2';
import ToggleLink from './components/linkColorChange';



var teamSize = 0; //number of current selected champs.

var champStatus  = [] ; // creates and a array to take mode of all selectable champ. On/Off
for(var i=0; i<59;i++)
  champStatus[i]= '0' ;


var membersID = ['memb1','memb2','memb3','memb4','memb5','memb6','memb7','memb8','memb9'];   //img to add cto the teams

var effectsP =  ['teamCombos1','teamCombos2','teamCombos3','teamCombos4','teamCombos5','teamCombos6','teamCombos7','teamCombos8','teamCombos9','teamCombos10','teamCombos11','teamCombos12','teamCombos13']; 


//in alphabetical order, tracks number of group members : academy ,christmas ,coven ,galaxy ,gentleman
// ,halloween ,king in the north ,lover ,mafia ,military ,police , prehistoric ,royalty ,zombie.
var teamMembersClassTracker = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 

var teamMembersOriginTracker = [0,0,0,0,0,0,0,0,0,0,0,0,0]; 
// Bandle City ,Bilgewater ,Demacia ,Freljord ,Ionia ,Ixtal ,Noxus ,Piltover ,Shadow Isles ,Shurima ,Targon ,Void ,Zaun




class App extends React.Component {
    constructor(props) {
      super(props);
      this.clicked = this.clicked.bind(this);
    }
    clicked(event) {


      if(event.target.id === 'memb1' || event.target.id === 'memb2' || event.target.id === 'memb3' || event.target.id === 'memb4' || event.target.id === 'memb5' || event.target.id === 'memb6' || event.target.id === 'memb7' || event.target.id === 'memb8' || event.target.id === 'memb9')
        remove(event.target.id);
      else{
      const id = event.target.id;
      const imgSrc = event.target.src;


      clickedOnImg(id,imgSrc);
      }
    }


    render() {
      return (

        <>
            <div className='box'>
                
                          
                <div className="intro">
                    <h1>welcome to TFT team builder </h1>
                    
                    <h3>with a whole new set of champions</h3>
                    
                    <p>this page will show a new set of champions with brand new classes and origins</p>

                </div>

                <div className="bar">  

                    <div className="team-effects">

                        <h3>Team Combos:</h3>

                        
                        <p id = "teamCombos1" > </p>
                        <p id = "teamCombos2" ></p>
                        <p id = "teamCombos3" ></p>
                        <p id = "teamCombos4" ></p>
                        <p id = "teamCombos5" ></p>
                        <p id = "teamCombos6" ></p>
                        <p id = "teamCombos7" ></p>
                        <p id = "teamCombos8" ></p>
                        <p id = "teamCombos9" ></p>
                        <p id = "teamCombos10" ></p>
                        <p id = "teamCombos11" ></p>
                        <p id = "teamCombos12" ></p>
                        <p id = "teamCombos13" ></p>
                      
                        
                    </div>

                
                    <div className= "team-members">
                        <div> <img id="memb1" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                        <div> <img id="memb2" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                        <div> <img id="memb3" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                        <div> <img id="memb4" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                        <div> <img id="memb5" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                        <div> <img id="memb6" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                        <div> <img id="memb7" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                        <div> <img id="memb8" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                        <div> <img id="memb9" onClick={this.clicked} src="champions/unknown.jpg" alt="member"/> </div>
                     </div>
           

                </div>

                <div className="champTitle">
                    <h1>Champions</h1>
                </div>


                <div className="champions">
                    <div className="line">

                        <div className="pic"> <img id="1" onClick={this.clicked} src="champions/academy-ahri.jpg" alt="champ"/> </div>

                        
                        <div className="pic"> <img id="2" onClick={this.clicked} src="champions/christmas-amumu.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="3" onClick={this.clicked} src="champions/prehistoric-anivia.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="4" onClick={this.clicked} src="champions/galaxy-aurelion-sol.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="5" onClick={this.clicked} src="champions/coven-azir.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="6" onClick={this.clicked} src="champions/police-blitzcrank.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="7" onClick={this.clicked} src="champions/mafia-braum.jpg" alt="champ"/> </div>
                    </div>
                    <div className="line">
                        <div className="pic"> <img id="8" onClick={this.clicked} src="champions/military-caitlyn.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="9" onClick={this.clicked} src="champions/prehistoric-cho'gath.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="10" onClick={this.clicked} src="champions/academy-darius.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="11" onClick={this.clicked} src="champions/halloween-dr-mundo.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="12" onClick={this.clicked} src="champions/christmas-draven.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="13" onClick={this.clicked} src="champions/academy-ekko.jpg" alt="champ"/> </div>
                        <div className="pic"> <img  id="14" onClick={this.clicked} src="champions/gentleman-ezreal.jpg" alt="champ"/> </div>
                    </div>
                    <div className="line">
                        <div className="pic"> <img id="15" onClick={this.clicked} src="champions/military-fizz.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="16" onClick={this.clicked} src="champions/gentleman-galio.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="17" onClick={this.clicked} src="champions/military-gangplank.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="18" onClick={this.clicked} src="champions/military-garen.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="19" onClick={this.clicked} src="champions/mafia-gragas.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="20" onClick={this.clicked} src="champions/police-graves.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="21" onClick={this.clicked} src="champions/halloween-hecarim.jpg" alt="champ"/> </div>
                    </div>
                    <div className="line">     
                        <div className="pic"> <img id="22" onClick={this.clicked} src="champions/military-jarvan-iv.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="23" onClick={this.clicked} src="champions/gentleman-jayce.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="24" onClick={this.clicked} src="champions/halloween-kassadin.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="25" onClick={this.clicked} src="champions/christmas-katarina.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="26" onClick={this.clicked} src="champions/police-kayle.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="27" onClick={this.clicked} src="champions/halloween-kled.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="28" onClick={this.clicked} src="champions/prehistoric-kog’maw.jpg" alt="champ"/> </div>
                    </div>
                    <div className="line">
                        <div className="pic"> <img id="29" onClick={this.clicked} src="champions/coven-lissandra.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="30" onClick={this.clicked} src="champions/lover-lucian.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="31" onClick={this.clicked} src="champions/academy-lux.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="32" onClick={this.clicked} src="champions/halloween-maokai.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="33" onClick={this.clicked} src="champions/mafia-miss-fortune.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="34" onClick={this.clicked} src="champions/royalty-mordekiser.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="35" onClick={this.clicked} src="champions/coven-morgana.jpg" alt="champ"/> </div>
                    </div>
                    <div className="line">
                        <div className="pic"> <img id="36" onClick={this.clicked} src="champions/police-nasus.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="37" onClick={this.clicked} src="champions/prehistoric-nidalee.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="38" onClick={this.clicked} src="champions/zombie-nunu-and-willump.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="39" onClick={this.clicked} src="champions/lover-quinn.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="40" onClick={this.clicked} src="champions/lover-rakan.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="41" onClick={this.clicked} src="champions/prehistoric-renekton.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="42" onClick={this.clicked} src="champions/prehistoric-sejuani.jpg" alt="champ"/> </div>
                    </div>
                    <div className="line">
                        <div className="pic"> <img id="43" onClick={this.clicked} src="champions/coven-soraka.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="44" onClick={this.clicked} src="champions/royalty-syndra.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="45" onClick={this.clicked} src="champions/coven-swain.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="46" onClick={this.clicked} src="champions/christmas-teemo.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="47" onClick={this.clicked} src="champions/military-tristana.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="48" onClick={this.clicked} src="champions/king-in-the-north-tryndamere.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="49" onClick={this.clicked} src="champions/mafia-twitch.jpg" alt="champ"/> </div>
                    </div>
                    <div className="line">   
                        <div className="pic"> <img id="50" onClick={this.clicked} src="champions/lover-varus.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="51" onClick={this.clicked} src="champions/lover-vayne.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="52" onClick={this.clicked} src="champions/academy-vladimir.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="53" onClick={this.clicked} src="champions/gentleman-vi.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="54" onClick={this.clicked} src="champions/coven-viktor.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="55" onClick={this.clicked} src="champions/halloween-warwick.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="56" onClick={this.clicked} src="champions/lover-xayah.jpg" alt="champ"/> </div>
                    </div>    
                    <div className="last-line">
                        <div className="pic"> <img id="57" onClick={this.clicked} src="champions/military-xin-zhao.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="58" onClick={this.clicked} src="champions/zombie-yorick.jpg" alt="champ"/> </div>
                        <div className="pic"> <img id="59" onClick={this.clicked} src="champions/academy-yummi.jpg" alt="champ"/> </div>
                    </div>
                </div>



                <Router>
              
                <div className="buttonBar">

                    <ToggleLink />

                </div>

                <Route exact path="/" render={props => (
                
                    <React.Fragment>


                            <div className="categorize">

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/academy-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description">

                                        <h2>Academy</h2>

                                        
                                        <p>The academy of the rift, holds a wide tanlanted students and staff,
                                            their brightnest can not be ignored.</p>
                                            
                                            <p>Academic champions grant your summoner knowledge add the 
                                            ability to lern faster.</p>
                                            
                                            <p>3/6 champions on the board 
                                            will grant and 1 extra exp and 6/6 will grant 3 extra 
                                            exp per round. </p>

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/academy-ahri.jpg" alt="champ"/> </div>
                                        <div className="pic2"> <img src="champions/academy-darius.jpg" alt="champ"/> </div>
                                        <div className="pic3"> <img src="champions/academy-ekko.jpg" alt="champ"/> </div>
                                        <div className="pic4"> <img src="champions/academy-lux.jpg" alt="champ"/> </div>
                                        <div className="pic5"> <img src="champions/academy-vladimir.jpg" alt="champ"/> </div>
                                        <div className="pic6"> <img src="champions/academy-yummi.jpg" alt="champ"/> </div>
                                        

                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/christmas-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>Christmas</h2>

                                    
                                        <p>It's chrismast time and a bounch of champions has gathered for the cozy holiday.</p>
                                            
                                        <p>Christmas bring presents and so does the champions to the summoner.</p>
                                            
                                        <p>2/4 champions on the board  will grant and 1 random item and  </p>

                                        <p>4/4 will grant 2 random each round</p>
                                            
                                        <p>The item can be put upoun any champion, but will disapear  if the team memebers are no longer in the board</p>
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/christmas-amumu.jpg" alt="champ"/> </div>
                                        <div className="pic2"> <img src="champions/christmas-draven.jpg" alt="champ"/> </div>
                                        <div className="pic3"> <img src="champions/christmas-katarina.jpg" alt="champ"/> </div>
                                        <div className="pic4"> <img src="champions/christmas-teemo.jpg" alt="champ"/> </div>

                                    </div>

                                </div>
                                
                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/coven-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>Coven</h2>

                                        
                                            <p>Praise our lord and savior satan, for the coven gets the bless of the dark one.</p>
                                            
                                            <p>the dark lord curses our enemies so we can defeat them.</p>
                                            
                                            <p>3/6 champions on the board 
                                            will make up to 2 enemies champions to be bewitched and 6/6 will cures all of the enemy's team</p>
                                            
                                            <p> being bewitch or in other words cures will render the effect of the first spell a champion,
                                            in other worlds thier first spell won't work</p>
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/coven-azir.jpg" alt="champ"/> </div>
                                        <div className="pic2"> <img src="champions/coven-lissandra.jpg" alt="champ"/> </div>
                                        <div className="pic3"> <img src="champions/coven-morgana.jpg" alt="champ"/> </div>
                                        <div className="pic4"> <img src="champions/coven-soraka.jpg" alt="champ"/> </div>
                                        <div className="pic4"> <img src="champions/coven-swain.jpg" alt="champ"/> </div>
                                        <div className="pic4"> <img src="champions/coven-viktor.jpg" alt="champ"/> </div>

                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/galaxy-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>Galaxy</h2>

                                    
                                        <p>There stands a lonly dragon, a being form form the ashes of stars.</p>
                                            
                                        <p>aurelion-sol possess the power of the stards and grant all of his allies the followin benifits. </p>
                                            
                                        <p>while aurelion-sol is in play all of your champions get a circle of 3 stars that on enemy hit deals damage.</p>
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/galaxy-aurelion-sol.jpg" alt="champ"/> </div>

                                    </div>

                                </div>

                                
                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/gentleman-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>Gentleman</h2>

                                        
                                            <p>A true gentleman of a man possess the looks and the style.</p>
                                            
                                            <p>gentleman gets bonus health and health regen. </p>
                                            
                                            <p>1/5 gain 100% health regeneration, 3/5 also starts with 150% of their initial health,
                                            5/5 has 200% health regeneration and start with 200% of their initial health.</p>
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/gentleman-ezreal.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/gentleman-galio.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/gentleman-jayce.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/gentleman-jayce.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/gentleman-vi.jpg" alt="champ"/> </div>


                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/halloween-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>Halloween</h2>

                                    
                                        <p>A spookey time is upon us and so on the league.</p>
                                            
                                        <p>the costumes of the halloween champions strighks fears in the enemy's team.</p>
                                            
                                        <p>3/6 memebers will fear all enemies for 1 seconde at the start of the round, 6/6 will make the fear last 3 sec.</p>
                                            
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/halloween-dr-mundo.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/halloween-hecarim.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/halloween-kassadin.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/halloween-kled.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/halloween-maokai.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/halloween-warwick.jpg" alt="champ"/> </div>


                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/king-in-the-north-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>King In The North</h2>

                                    
                                            <p>To the  King In The North.</p>
                                            
                                            <p>the king gets the protection of his subjects.</p>
                                        
                                            <p>the king is imunne and cannot be attacked until he is the last man standing on your team.</p>
                                            
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/king-in-the-north-tryndamere.jpg" alt="champ"/> </div>
                                    


                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/lover-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>Lover</h2>

                                        
                                        <p>Love is in the air.</p>
                                            
                                        <p>lovers are turly in love, when their emotions rage so does their magic.</p>
                                            
                                        <p>3/6 when a lover member dies all other lover use there spell, at 6/6 the spell damage is increased by 100%.</p>
                                            
                                    

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/lover-lucian.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/lover-quinn.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/lover-rakan.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/lover-varus.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/lover-vayne.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/lover-xayah.jpg" alt="champ"/> </div>
                                    


                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/mafia-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>Mafia</h2>

                                        
                                        <p>who said the crimes isn't worth is?</p>
                                            
                                        <p>by working with the mafia you gain access to the black market.</p>
                                            
                                        <p>2/4 you gain one more champion slot in the store, at 4/4 you gain 2 slots.</p>
                                            
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/mafia-braum.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/mafia-gragas.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/mafia-miss-fortune.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/mafia-twitch.jpg" alt="champ"/> </div>

                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/military-symbol.png" alt="cat1Img"/>

                                    </div>

                                    <div className="description1">

                                        <h2>Military</h2>

                                    
                                        <p>It's recruntment time, the league wants you!</p>
                                        
                                        <p>in the military systme you gain ranks, by time not by talent XD.</p>
                                            
                                        <p> 3/6 with make a random champ turn from level 1 to level 2, 6/6 from 2 to 3.</p>
                                            
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/military-caitlyn.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/military-fizz.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/military-gangplank.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/military-garen.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/military-jarvan-iv.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/military-tristana.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/military-xin-zhao.jpg" alt="champ"/> </div>

                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/police-symbol.png" alt="cat1Img"/>

                                    </div>

                                    
                                    <div className="description1">

                                        <h2>Police</h2>

                                    
                                            <p>The riot police squad is up and running and ready to handle all.</p>
                                            
                                            <p>  in a any case of need the police will can backup.</p>
                                            
                                            <p> 3/4 will summon the forth member of the riot team, it will be the same rank as the lowest member to the police squad.</p>

                                            <p>4/4, Call the military calles a random military champion in the same rank as the highes police squad member. </p>
                                            
                                        

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/police-blitzcrank.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/police-graves.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/police-kayle.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/police-nasus.jpg" alt="champ"/> </div>

                                    </div>

                                </div>

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/prehistoric-symbol.png" alt="cat1Img"/>

                                    </div>

                                    
                                    <div className="description1">

                                        <h2>Prehistoric</h2>

                                        
                                        <p>Prehistoric creature gain ancient rage</p>

                                        <p>For each member the rage become stronger 1/3/5  </p>
                                        
                                            <p>A rager deal an extra 2%/5%/10% true damage   </p>

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/prehistoric-anivia.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/prehistoric-cho'gath.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/prehistoric-kog’maw.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/prehistoric-nidalee.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/prehistoric-renekton.jpg" alt="champ"/> </div>

                                    </div>

                                </div>    

                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/royalty-symbol.png" alt="cat1Img"/>

                                    </div>

                                    
                                    <div className="description1">

                                        <h2>Royalty</h2>

                                    
                                        <p>The royal famaliy A king and A queen.</p>
                                    
                                        <p>Roylty is only for the pure royal blood .</p>
                                        
                                        <p>2/2 While aligned gets a huge shield </p>
                                            
                                        
                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/royalty-mordekiser.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/royalty-syndra.jpg" alt="champ"/> </div>
                                        

                                    </div>

                                </div> 
                                    
                                <div className="cat">  

                                    <div className="sign">

                                        <img src="symbols/zombie-symbol.png" alt="cat1Img"/>

                                    </div>

                                    
                                    <div className="description1">

                                        <h2>Zombies</h2>

                                        <p> They want brains, your's one too.  </p>
                                            
                                        <p> zomhie raises again and again. </p>
                                        
                                        <p> 2/2 raise uponn first deathm at half health.</p>
                                            
                                    

                                    </div>


                                    <div className="group-members">

                                        <div className="pic1"> <img src="champions/zombie-nunu-and-willump.jpg" alt="champ"/> </div>
                                        <div className="pic1"> <img src="champions/zombie-yorick.jpg" alt="champ"/> </div>
                                        

                                    </div>

                                </div> 

                            </div>
                    </React.Fragment> )} />

            <Route path="/page2" component={page2} />   
            

           

            </Router>





            


            </div>
        </>
      );
    }
  }

  function clickedOnImg(clickedID,imgSrc){

    var addSignal = 0; // 0 if removed , 1 if added
    var clickedOn = document.getElementById(clickedID); //get id of clicked img


    if(champStatus[clickedID-1] === '0'){// if a champ got selected   
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

 

  if(teamSize === 1 || (imgSrc === document.getElementById(membersID[teamSize-1]).src )) //if team contains only one or its the last one
    return 0;
  return 1;
}

function reload(imgSrc){
  
  var position = 0

  while(position<teamSize-1){ //find location of the unselect champ in the team.

    if(document.getElementById(membersID[position]).src === (imgSrc))
      break;  
    position++;
  }

  var timesToMove = teamSize - position;
  for(var i=0;i<timesToMove;i++){ //move,push and over writeב
  
    if( position + i === 8 ){
      document.getElementById(membersID[position+i]).src = '/champions/unknown.jpg';
      break;
      }
    document.getElementById(membersID[position+i]).src = document.getElementById(membersID[position+i+1]).src;

  }
}

function accessData(addSignal,clickedID){



        var championsFromjson = require('./champData.json');
        
        var champClass = championsFromjson.champions[clickedID-1].class;
        var champOrigin = championsFromjson.champions[clickedID-1].origin;

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

function updateEffects(addSignal,tableClassIndex,tableOriginIndex){

  var effectsIndex = 0;

  if(teamSize === 0)    //reset erffects if team is empty then text box should be reset
    document.getElementById("teamCombos1").textContent = "Chose champions for your team.... ";
    document.getElementById("teamCombos2").textContent = "";
    document.getElementById("teamCombos3").textContent = "";
    document.getElementById("teamCombos4").textContent = "";
    document.getElementById("teamCombos5").textContent = "";
    document.getElementById("teamCombos6").textContent = "";
    document.getElementById("teamCombos7").textContent = "";
    document.getElementById("teamCombos8").textContent = "";
    document.getElementById("teamCombos9").textContent = "";
    document.getElementById("teamCombos10").textContent = "";
    document.getElementById("teamCombos11").textContent = "";
    document.getElementById("teamCombos12").textContent = "";
    document.getElementById("teamCombos13").textContent = "";




  if(teamMembersClassTracker[0] === 6 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Academey 6/6 combo in Class';
      effectsIndex++;
    }  
  else if(teamMembersClassTracker[0] >= 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Academey 3/6 combo in Class';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';


  if(teamMembersClassTracker[1] === 4 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Christmas 4/4 combo is under the tree, ';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[1] >= 2){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Christmas 2/4 combo is under the tree';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';


  if(teamMembersClassTracker[2] === 6 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Coven 6/6 combo in mass';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[2] >= 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Coven 3/6 combo in mass';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';  


  if(teamMembersClassTracker[3] === 1 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Galaxy combo in  ascendance';
      effectsIndex++;
  }  
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';  


  if(teamMembersClassTracker[4] === 5 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Gentleman 5/5 combo is suited up';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[4] >= 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Gentleman 3/5 combo is suited up';
    effectsIndex++;
  }
  else if(teamMembersClassTracker[4] >= 1){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Gentleman 1/5 combo is suited up';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';  
    

  if(teamMembersClassTracker[5] === 6 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Halloween 6/6 combo in costume';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[5] >= 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Halloween 3/6 combo in costume';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';      


    
  if(teamMembersClassTracker[6] === 1 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'King in the north combo in role';
      effectsIndex++;
  }  
  else
    document.getElementById(effectsP[effectsIndex]).textContent = ''; 
    
    

  if(teamMembersClassTracker[7] === 6 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Lover 6/6 combo in love';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[7] >= 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Lover 3/3 combo in love';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';      



  if(teamMembersClassTracker[8] === 4 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Mafia 4/4 combo is runing the streets';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[8] >= 2){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Mafia 2/4 combo is runing the streets';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';          



  if(teamMembersClassTracker[9] === 6 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Military 6/6 combo on duty';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[9] >= 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Military 3/6 combo on duty';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';          



  if(teamMembersClassTracker[10] === 4 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Police 4/4 combo is on potrol';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[10] === 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Police 3/4 combo is on potrol' ;
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';    
    
    

  if(teamMembersClassTracker[11] === 5 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Prehistoric 5/5 combo is still alive';
      effectsIndex++;
  }  
  else if(teamMembersClassTracker[11] >= 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Prehistoric 3/5 combo is still alive';
    effectsIndex++;
  }
  else if(teamMembersClassTracker[11] >= 1){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Prehistoric 1/5 combo is still alive';
    effectsIndex++;
  }  
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';    
    


  if(teamMembersClassTracker[12] === 2 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Royalty 2/2 combo is on the thrown';
      effectsIndex++;
  }  
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';        



  if(teamMembersClassTracker[13] === 2 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Zombies 2/2 combo are back from the dead';
      effectsIndex++;
  }  
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';     



    

  if(teamMembersOriginTracker[0] === 3 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Bandle City 3/3 - Yordles everywhere';
      effectsIndex++;
  }  
  else if(teamMembersOriginTracker[0] === 2){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Bandle City 2/3 - Yordles everywhere';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';


  if(teamMembersOriginTracker[1] === 4 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Bilgewater 4/4 - under the sea';
      effectsIndex++;
  }  
  else if(teamMembersOriginTracker[1] >= 2){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Bilgewater 2/4 - under the sea';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';


  if(teamMembersOriginTracker[2] >= 1 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Demacia '+teamMembersOriginTracker[2]+'/10';
      effectsIndex++;
  } 
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';  


  if(teamMembersOriginTracker[3] === 6 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Freljord 6/6';
      effectsIndex++;
  } 
  else if(teamMembersOriginTracker[3] >= 3 ){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Freljord 3/6';
    effectsIndex++;
  }   
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';  


  if(teamMembersOriginTracker[4] === 5 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Ionia 5/5';
      effectsIndex++;
  }  
  else if(teamMembersOriginTracker[4] >= 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Ionia 3/5';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';  
    

  if(teamMembersOriginTracker[5] === 1){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Ixtal 1/1';
      effectsIndex++;
  }  
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';      


    
  if(teamMembersOriginTracker[6] === 6 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Noxus 6/6';
      effectsIndex++;
  } 
  else  if(teamMembersOriginTracker[6] >=3 ){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Noxus 3/6';
    effectsIndex++;
  }   
  else
    document.getElementById(effectsP[effectsIndex]).textContent = ''; 
    
    

  if(teamMembersOriginTracker[7] === 4 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Piltover 4/4';
      effectsIndex++;
  }  
  else if(teamMembersOriginTracker[7] >= 2){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Piltover 2/4';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';      



  if(teamMembersOriginTracker[8] === 4 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Shadow Isles 4/4';
      effectsIndex++;
  }  
  else if(teamMembersOriginTracker[8] >= 2){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Shadow Isles 2/4';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';          



  if(teamMembersOriginTracker[9] === 4 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Shurima 4/4';
      effectsIndex++;
  }  
  else if(teamMembersOriginTracker[9] >= 2){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Shurima 2/4';
    effectsIndex++;
  }
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';          



  if(teamMembersOriginTracker[10] === 2 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Targon 2/2';
      effectsIndex++;
  }  
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';    
    
    

  if(teamMembersOriginTracker[11] === 3 ){
      document.getElementById(effectsP[effectsIndex]).textContent = 'Void 3/3';
      effectsIndex++;
  }  
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';    
    



  if(teamMembersOriginTracker[12] === 3){
    document.getElementById(effectsP[effectsIndex]).textContent = 'Zaun 3/3';
    effectsIndex++;
  } 
  else
    document.getElementById(effectsP[effectsIndex]).textContent = '';        




return;
}
  
    //   check clickedID move at table
 
  
function remove(idOfImg){

  console.log(document.getElementById(idOfImg).src);
  if(document.getElementById(idOfImg).src === 'http://localhost:3000/champions/unknown.jpg')

       return;
  else{
    
   
    var i=1;

    while(i<60){

      if(document.getElementById(i).src === document.getElementById(idOfImg).src)
        break;
      i++;
    }
    document.getElementById(i).click();

  }

}
    





  export default App