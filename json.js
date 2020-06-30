function myFunction() {
  let x = {name:'Somchai',favNums:[1,2,3]};
  s = JSON.stringify(x)
  Logger.log(s);          // {"name":"Somchai","favNums":[1,2,3]}
  y = JSON.parse(s);
  Logger.log(y);          // {name=Somchai, favNums=[1.0, 2.0, 3.0]}
}



