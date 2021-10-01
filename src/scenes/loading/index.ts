import { Scene, GameObjects } from 'phaser';

export class LoadingScene extends Scene {
  private king!: GameObjects.Sprite;
  
  constructor() {
    super('loading-scene');
  }

  create(): void {
    this.scene.start('level-1-scene');
  }

  preload(): void {
	  this.load.baseURL = 'assets/';
	  // key: 'king'
	  // path from baseURL to file: 'sprites/king.png'
	  this.load.image('king', 'sprites/king.png');
    this.load.atlas('a-king', 'spritesheets/a-king.png', 'spritesheets/a-king_atlas.json');
  }
}