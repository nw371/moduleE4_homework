// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.




function Equipment(name){
    this.name = name
    this.powerState = false
    this.getPowerState = function(){
      if (this.powerState === true){
        console.log(`${this.name} is On` );
      }else{
        console.log(`${this.name} is Off` );
    }
    }
}


Equipment.prototype.switch_power = function(onOff){
      if (this.powerState !== onOff){
        this.powerState = !this.powerState;
        console.log('Device switched: ')
        this.getPowerState();
      }else{
        console.log('No action taken: ')
        this.getPowerState();
      }

    }

function Console(name, manufacturer){
  this.name = name
  this.manufacturer = manufacturer
  this.startGame = function(){
    console.log('Game started')
  }
    this.saveGame = function(){
    console.log('Game saved')
  }
}

Console.prototype = new Equipment();

function Tv(name, size){
  this.name = name
  this.size = size
  this.selectInput = function(input){
    if (input === 1){console.log('HDMI1');}
    if (input === 2){console.log('HDMI2');}
  }
}

Tv.prototype = new Equipment();

const myPS4 = new Console('PS4', 'Sony');
const myTV = new Tv('Panasonic', '40in');

myPS4.switch_power(true)
console.log(myPS4.name)
myPS4.startGame()
myPS4.saveGame()

myTV.switch_power(true)
console.log(myTV.size)
myTV.selectInput(2)
