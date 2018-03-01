import Phaser from 'phaser'

import {setDomain} from './client'
import {
    StoryController_Get_All
  } from '~/client'
setDomain("/v1");

// import BootScene from './scenes/Boot'
// import SplashScene from './scenes/Splash'
// import GameScene from './scenes/Game'

// import config from './config'

// const gameConfig = Object.assign(config, {
//   scene: [BootScene, SplashScene, GameScene]
// })

// class Game extends Phaser.Game {
//   constructor () {
//     super(gameConfig)
//   }
// }

// window.game = new Game()

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
};

var game = new Phaser.Game(config);
function preload (){
    // StoryController_Get_All({}).then(response =>{
    //     console.log(response.data)
    // }).catch(error => {
        
    // });
    this.load.setBaseURL('http://localhost:8081/v1');
    this.load.json('story', '/stories/1');

    var story = this.cache.json.get('story')
    console.log(story.Name);
    // this.load.image('sky', 'assets/skies/space3.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
}

function create (){
    var story = this.cache.json.get('story')
    //console.log(story.Name);
    this.add.text(100, 100, story.Name, {
      font: '64px Bangers',
      fill: '#7744f0'
    })
    // this.add.image(400, 300, 'sky');
    // var particles = this.add.particles('red');
    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });
    // var logo = this.physics.add.image(400, 100, 'logo');
    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);
    // emitter.startFollow(logo);
}