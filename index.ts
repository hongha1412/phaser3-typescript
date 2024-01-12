import Phaser from 'phaser';
import { Example } from './game/tilemap.scene';

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  loader: {
    baseURL: 'https://labs.phaser.io',
    crossOrigin: 'anonymous',
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: true,
    },
  },
  scene: Example,
};

const game = new Phaser.Game(config);
