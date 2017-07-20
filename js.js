;(function(){

// GET ARRAY OF PERSON	
arr1 = [];

function createPersonFunc(arg) {
		var newPerson = {};
		newPerson.name = 'Jone Silver # ' + +arg;
		newPerson.quote = '<p data-lorem="4-12w"></p>';
		newPerson.img =  '<img src ="http://lorempixel.com/50/50" '+ 
		 					randomImgCategory() + 
		 					' width="50" height="50" </img>';
		arr1.push(newPerson);
};

function randomImgCategory () {
	var randomNum = Math.floor(Math.random()*14);
	switch (randomNum) {
		case 1: return 'data-lorem="abstract"';
		case 2: return 'data-lorem="animals"';
		case 3: return 'data-lorem="business"';
		case 4: return 'data-lorem="city"';
		case 5: return 'data-lorem="food"';
		case 6: return 'data-lorem="nightlife"';
		case 7: return 'data-lorem="fashion"';
		case 8: return 'data-lorem="people"';
		case 9: return 'data-lorem="nature"';
		case 10: return 'data-lorem="sports"';
		case 11: return 'data-lorem="technics"';
		default: return 'data-lorem="cats"';
	};
};

function checkSublingsImage () {
	 for (var i = 1; i < arr1.length; i++) {
	 	if (arr1[i].img == arr1[i - 1].img) {
	 	arr1[i].img = '<img src ="http://lorempixel.com/50/50" '+ 
	 					randomImgCategory() + 
	 					' width="50" height="50" </img>';
	 	i = 1;
}}};

function setPeopleArray(quant){	     // !!!!! set people quantiti and get DOM
	for (var i = 0; i < quant; i++ ) {
		createPersonFunc(i);
	}
	checkSublingsImage();
};

setPeopleArray(5);				// !!!!! set people quantiti and get DOM


// DOM build
var PersonImg = document.getElementById('facesImg').children[0];
var PersonQuote = document.getElementById('quote');
var PersonName = document.getElementById('name');

var createNodes = function () {
	var PersonImgData, PersonQuoteData, PersonNameData; 
		 for (var i = 0; i < arr1.length; i++) {
		 	PersonImgData += '<a href="#">' + arr1[i].img + '</a>';
		 	PersonQuoteData += arr1[i].quote;
		 	PersonNameData += '<div>' + arr1[i].name + '</div>';
		 };
	 	PersonImg.innerHTML = PersonImgData.slice(9);
	 	PersonQuote.innerHTML = PersonQuoteData.slice(9);;
	 	PersonName.innerHTML = PersonNameData.slice(9);;
	}();


//EVENT
//onclick
PersonImg.addEventListener('click', function (e) {
	var target = e.target.parentNode;

	var getTargetNumber = function () {
		var n = PersonImg.children;
		for (var i = 0; i < n.length; i++) {
			if (n[i].innerHTML == target.innerHTML) {
				return i;
			}
		};
	}();

function setElementVisability (elem) {
	var n = elem.parentNode.children;
	for(var i = 0; i < n.length; i++){
		n[i].classList.add("visability");
	}
	elem.classList.remove("visability");
}

setElementVisability(PersonQuote.children[getTargetNumber]);
setElementVisability(PersonName.children[getTargetNumber]);

})

//прогнать функцию искуственно с элементом 0 чтобы попрятать показать первого пользователя и попрятать все лишнее

//mouseEnter

//если длинна скрытой части больше видимой (по количеству элеменов) то запускаем следующий обработчик событий
//

/*PersonImg.addEventListener('mouseenter', function (e) {
	document.body.style.backgroundColor = 'red';
})
PersonImg.addEventListener('mouseleave', function (e) {
	document.body.style.backgroundColor = '';
})*/


})();