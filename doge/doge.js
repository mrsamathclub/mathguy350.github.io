class BootState {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    game.state.start("Load");
  }
}

class LoadState {
  preload() {
    console.log("Loading...");
    this.load.image("background","assets/background.png");
  }
  create() {
    console.log("Loaded");
  }
}

class PlayState {
  create() {
    console.log("Entering Play State");
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(0,700);
  }
}
var game = new Phaser.Game(320,568);
game.state.add("Boot",BootState);
game.state.add("Load", LoadState);
game.state.start("Boot");

