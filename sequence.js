function sequence(name,age) {
this.name = name;
this.age = age;
this.print = function () {
  console.log("print");
 }
}

this.prototype.moveToChamp = function () {
  console.log("champ");
}
