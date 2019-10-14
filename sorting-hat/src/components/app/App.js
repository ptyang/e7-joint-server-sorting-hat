import React from 'react';
import './App.css';
import Guild from '../guild/Guild';
import GuildData from '../../data/guild-data';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      guildData: GuildData.guilds
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Joint Guild Community Sorting Hat 
        </header>
        
        <div className="MiddlePanel">
          <div className="RandomizeButton" onClick={() => this.randomizeGuilds(this.state.guildData)}>Randomize</div>
        </div>
        
        { GetGuildAllMemberCount(this.state.guildData) } members across {this.state.guildData.length} guilds.
  
        <div className="Guilds">
          {
            this.state.guildData.map(function(guild){
              return <Guild key={guild["guild-name"]} Guild={guild}></Guild>
          })}
        </div>
      </div>
    );
  }
  
  randomizeGuilds(guilds){
    var memberBucket = [];
    for(var i = 0; i < guilds.length; i++){
      memberBucket = memberBucket.concat(guilds[i]["guild-members"]);
    }

    memberBucket = ShuffleArray(memberBucket);

    // Clear out members
    for (var i = 0; i < guilds.length; i++){
      guilds[i]["guild-members"] = [];
    }

    // Deal out the members now that they are shuffled
    var guildCounter = 0;
    for (var i = 0; i < memberBucket.length; i++){
      guilds[guildCounter]["guild-members"].push(memberBucket[i]);
      guildCounter++;
      if (guildCounter == guilds.length){
        guildCounter = 0;
      }
    }

    // Update guild leaders randomly
    for (var i = 0; i < guilds.length; i++){
      guilds[i]["guild-leader"] = guilds[i]["guild-members"][0];
    }

    this.setState({
      guildData: guilds
    })
  }
}


function ShuffleArray(arr){
  for (var i = arr.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function GetGuildAllMemberCount(guilds){
  var total = 0;
  for(var i = 0; i < guilds.length; i++){
    total += guilds[i]["guild-members"].length;
  }
  return total;
}

export default App;
