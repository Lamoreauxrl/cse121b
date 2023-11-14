/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'LaMond Lamoreaux';
let currentYear = '2003';
let profilePicture = 'images/myImage.png';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */
let myFavFoods = ['Pizza', 'Spaghetti', 'Steak'];
foodElement.textContent = myFavFoods;
let anotherFavFood = 'Pudding';
myFavFoods.push(anotherFavFood);
foodElement.innerHTML += `<br>${myFavFoods}`;
myFavFoods.shift();
foodElement.innerHTML += `<br>${myFavFoods}`;
myFavFoods.pop();
foodElement.innerHTML += `<br>${myFavFoods}`;




