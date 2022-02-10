// Написать, функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.


const a1 = {
  prop1: "val1",
  prop2: "val2",
}

const a2 = Object.create(a1);

  a2.prop3 = "val3";
  a2.prop4 = "val4";


function own_props(a){
  for (let key in a) {

    if (a.hasOwnProperty(key)) {

         console.log(key)
        //console.log(key + "=" + a[key]);
    }
}

}

own_props(a2)
