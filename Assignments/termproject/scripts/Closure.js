var myObj, i, j, x = "";
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    {"name":"Salt Lake Closures", "Temples":["Start", "2019-04-06", "End", "2019-04-06" ]},
    // {"name":"Las Vegas Closures", "Temples":["Start", "2019-04-06", "End", "2019-04-06"]},
    // {"name":"Manti", "Temples":["500", "Panda"] },
    // {"name":"Rexburg", "Temples":["500", "Panda"] }
  ]
}
for (i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (j in myObj.cars[i].Temples) {
    x += myObj.cars[i].Temples[j] + "<br>";
  }
}
document.getElementById("SaltLake").innerHTML = x;



var myObj, i, j, x = "";
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    // {"name":"Salt Lake Closures", "Temples":["Start", "2019-04-06", "End", "2019-04-06" ]},
    {"name":"Las Vegas Closures", "Temples":["Start", "2019-04-06", "End", "2019-04-06"]},
    // {"name":"Manti", "Temples":["Start", "2019-04-06", "End", "2019-04-06"] },
    // {"name":"Rexburg", "Temples":["Start", "2019-04-06", "End", "2019-04-06"] }
  ]
}
for (i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (j in myObj.cars[i].Temples) {
    x += myObj.cars[i].Temples[j] + "<br>";
  }
}
document.getElementById("Vegas").innerHTML = x;



var myObj, i, j, x = "";
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    // {"name":"Salt Lake Closures", "Temples":["Start", "2019-04-06", "End", "2019-04-06" ]},
    // {"name":"Las Vegas Closures", "Temples":["Start", "2019-04-06", "End", "2019-04-06"]},
    {"name":"Manti", "Temples":["Start", "2019-04-06", "End", "2019-04-06"] },
    // {"name":"Rexburg", "Temples":["Start", "2019-04-06", "End", "2019-04-06"] }
  ]
}
for (i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (j in myObj.cars[i].Temples) {
    x += myObj.cars[i].Temples[j] + "<br>";
  }
}
document.getElementById("Mantis").innerHTML = x;




var myObj, i, j, x = "";
myObj = {
  "name":"John",
  "age":30,
  "cars": [
    // {"name":"Salt Lake Closures", "Temples":["Start", "2019-04-06", "End", "2019-04-06" ]},
    // {"name":"Las Vegas Closures", "Temples":["Start", "2019-04-06", "End", "2019-04-06"]},
    // {"name":"Manti", "Temples":["Start", "2019-04-06", "End", "2019-04-06"] },
    {"name":"Rexburg", "Temples":["Start", "2019-04-06", "End", "2019-04-06"] }
  ]
}
for (i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (j in myObj.cars[i].Temples) {
    x += myObj.cars[i].Temples[j] + "<br>";
  }
}
document.getElementById("Rexburgg").innerHTML = x;