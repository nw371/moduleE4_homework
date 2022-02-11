class Equipment {
  constructor(name) {
    this.name = name;
    this.powerState = false;
  }
    getPowerState() {
      if (this.powerState === true) {
        console.log(`${this.name} is On` );
      } else {
        console.log(`${this.name} is Off` );
    }
    }
    switchPower(onOff) {
      let status = '';
      if (onOff === true) {
        status = 'On';
      }else{
        status = 'Off';
      }
      if (this.powerState !== onOff) {
        this.powerState = !this.powerState;
        console.log(`${this.name} was switched ${status}`);
      } else {
        console.log(`No action taken ${this.name} is ${status}`);
      }
    }
}


class Console extends Equipment {
  constructor(name, manufacturer) {
  super(name);
  this.manufacturer = manufacturer;
  }
  startGame(){
    console.log('Game started');
  }
    saveGame(){
    console.log('Game saved');
  }
}


class Tv extends Equipment {
  constructor (name, size) {
  super(name);
  this.size = size;
}
  selectInput(input){
    if (input === 1){ console.log('HDMI1'); }
    if (input === 2){console.log('HDMI2');}
  }
}


const myPS4 = new Console('PS4', 'Sony');
const myTV = new Tv('Panasonic', '40in');

myPS4.switchPower(false)
myPS4.switchPower(true)
console.log(myPS4.name)
myPS4.startGame()
myPS4.saveGame()
myPS4.switchPower(false)

myTV.switchPower(true)
console.log(myTV.size)
myTV.selectInput(2)
myTV.switchPower(false)
