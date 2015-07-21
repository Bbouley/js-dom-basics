var firstParagraph = document.getElementById('main');

var getAllElements = document.getElementsByTagName('ul');

var getSingleElement = document.getElementsByTagName('ul')[0];


var allListItems = document.getElementsByTagName('li');

for (var i = 0; i < allListItems.length; i++) {
}

var li = document.createElement('li');

var newElement = li.innerText = 'another list item';

getSingleElement.appendChild(li);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = 'prepend';

getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);

var getSingleLiElement = getSingleElement.children;

var test = getSingleLiElement[0].nextSibling;

console.log(test.innerText);





