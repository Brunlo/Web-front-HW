var header = document.querySelector('header');
var section = document.querySelector('section');





var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';





var request = new XMLHttpRequest();





request.open('GET', requestURL);

request.responseType = 'json';

request.send();



request.onload = function () {

    var townData = request.response;

    //populateHeader(townData);

    showTown(townData);

}




function showTown(jsonObj) {

    var townData = jsonObj['towns'];



    for (var i = 0; i < townData.length; i++) {
        if (i == 0 || i == 1 || i == 2 || i == 3) {
            continue;
        }


        var myArticle = document.createElement('article');
        //add class to target and add a border. Make sure it is a article tag/element
        myArticle.className == 'gb';
        var myH2 = document.createElement('h2');

        var myPara1 = document.createElement('p');

        var myPara2 = document.createElement('p');

        var myPara3 = document.createElement('p');

        var myPara4 = document.createElement('p');

        var myList = document.createElement('ul');



        myH2.textContent = townData[i].townName;

        myPara1.textContent = 'Name: ' + townData[i].name;

        myPara2.textContent = 'Year Founded: ' + townData[i].yearFounded;

        myPara3.textContent = 'Current Population: ' + townData[i].currentPopulation;

        myPara4.textContent = 'Average Rainfall: ' + townData[i].averageRainfall;
        

        var myImg = document.createElement('img');
        myImg.className += "image";
        if (townData[i].name === 'Preston') {
            myImg.src = "./Images/AllPics/prestonpic.jpg";
        } else if (townData[i].name === 'Soda Springs') {
            myImg.src = "./Images/AllPics/SodaSprings.jpg ";
        } else {
            myImg.src = "./Images/AllPics/SpringField.jpg ";

            


        }


        
        var events = townData[i].events;

        for (var j = 0; j < events.length; j++) {

            var listItem = document.createElement('li');

            listItem.textContent = events[j];

            myList.appendChild(listItem);

        }



        myArticle.appendChild(myH2);

        myArticle.appendChild(myPara1);

        myArticle.appendChild(myPara2);

        myArticle.appendChild(myPara3);

        myArticle.appendChild(myPara4);
        //myArticle.appendChild(myList);
        myArticle.appendChild(myImg);


        header.appendChild(myArticle);



    }

}