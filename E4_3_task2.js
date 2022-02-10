// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.


const a1 = {
  prop1: "val1",
  prop2: "val2",
}

const a2 = Object.create(a1);

  a2.prop3 = "val3";
  a2.prop4 = "val4";


function check_prop(prop_name, obj_name){
  console.log(prop_name in obj_name)

}

check_prop("prop3", a2)
