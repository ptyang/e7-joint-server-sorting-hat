(this["webpackJsonpsorting-hat"]=this["webpackJsonpsorting-hat"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"guilds":[{"guild-name":"Transcend","guild-leader":"Pokeguy","guild-members":["Pokeguy","david","Fire","UnLimited714","Fionabe","Skitti","Alexsander","jorhan","Rei","SleepyMoon","Steph","Amaloner","bleh","EDotAnt","epikknight","Gritz87","Hakuha","hotrode","Jipsy","Kaizer","KaizerDestiny","Lucifer Morning Star","nnyahahaha","Quang Anh","Sooi","Takaa","ThePariah","upthesun","Vizzix","Yorai"]},{"guild-name":"PowerLevel","guild-leader":"Dord","guild-members":["Dord","Purinsu","jshyne","TsundereRic","Binadas","ForemanX","ip","kost5681","milktea","Mooncaller","Sushi","Akwezy","appasionata","Ayllon","BoiledRice","BustaSimes","Glou","Hacchichi","HentaiSenpai","JustTilted","Levelasia","One_Eye","PrincePatat","Roland","Seofon","Synphony","thanhs0","thefunguy"]},{"guild-name":"Knightvale","guild-leader":"Cloud","guild-members":["Cloud","GettinCocky","Kalagor","Blitz","Wolfslayer","7heGrea7","Architarchus","AsaNomura","Azurin","bbhuey","Bluewindz","BlurStar","creka","D1player","Darkarthan","Destina","e-biscuit","Epraim","Etu","Gus","Hydro","Insomnia","Intel Pindelo","jaymac6","LastExi\u0141\u0113","NarutoHyuga","Prosyus","Raku","Sabthecrab","SaveTheWorld"]},{"guild-name":"Eternum","guild-leader":"That_Droid_R2","guild-members":["That_Droid_R2","BrokenSaint","Trojjanman","Aorta","Mouse Mouse","salad","alpacado","AlphaSaga","AP","Azemar","DKshadow","DragonFloxy","Etzing6","GolfGap","Hantaro","Jon","kaolo","Kyrvin","LittleWeeb","Llimona","Muhammad.02","Mystic","Nycholis","Pascauuu","PeachyTokio","Roka\u30c4","SnowBunny","t1lt3d","tyeche","Virie","Waffle"]}]}')},,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),l=t.n(r),o=(t(14),t(3)),u=t(4),d=t(7),s=t(5),m=t(8);t(15),t(16);var c=function(e){return i.a.createElement("div",null,i.a.createElement("h3",null,e.Name))};var h=function(e){return i.a.createElement("div",null,e.GuildMembers.map((function(e){return i.a.createElement(c,{key:e,Name:e})})))};var g=function(e){return i.a.createElement("div",null,i.a.createElement("h2",{className:"GuildName"},"Guild Name: ",e.Guild["guild-name"]),i.a.createElement("h2",{className:"GuildLeader"},"Guild Leader: ",e.Guild["guild-leader"]),i.a.createElement(h,{GuildMembers:e.Guild["guild-members"]}))},y=t(6);var f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(d.a)(this,Object(s.a)(a).call(this,e))).state={guildData:y.guilds},t}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},"Joint Guild Community Sorting Hat"),i.a.createElement("div",{className:"MiddlePanel"},i.a.createElement("div",{className:"RandomizeButton",onClick:function(){return e.randomizeGuilds(e.state.guildData)}},"Randomize")),function(e){for(var a=0,t=0;t<e.length;t++)a+=e[t]["guild-members"].length;return a}(this.state.guildData)," members across ",this.state.guildData.length," guilds.",i.a.createElement("div",{className:"Guilds"},this.state.guildData.map((function(e){return i.a.createElement(g,{key:e["guild-name"],Guild:e})}))))}},{key:"randomizeGuilds",value:function(e){for(var a=[],t=0;t<e.length;t++)a=a.concat(e[t]["guild-members"]);a=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}return e}(a);for(t=0;t<e.length;t++)e[t]["guild-members"]=[];var n=0;for(t=0;t<a.length;t++)e[n]["guild-members"].push(a[t]),++n==e.length&&(n=0);for(t=0;t<e.length;t++)e[t]["guild-leader"]=e[t]["guild-members"][0];this.setState({guildData:e})}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8bf81331.chunk.js.map