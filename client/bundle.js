(()=>{const e=io();class t extends Phaser.Scene{constructor(){super({key:"Title"})}preload(){}create(){this.add.text(640,240,"Welcome to the Multiplayer Game!",{fontSize:"48px",fill:"#ffffff"}).setOrigin(.5,.5);const t=this.add.text(640,480,"Connected Users: x",{fontSize:"72px",fill:"#ffffff"}).setOrigin(.5,.5);e.on("connect",(()=>{console.log("Connected to server")})),e.on("updateConnectedUsers",(e=>{t.setText(`Connected Users: ${e}`)}))}update(){}}const s={type:Phaser.WEBGL,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:1280,height:720},backgroundColor:"#000000",scene:[t]};new Phaser.Game(s)})();