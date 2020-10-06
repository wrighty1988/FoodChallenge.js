//TODO: create a program that stores what you have eaten today for breakfast and what your going to have for tea.

//TODO: update the varibles for what you are going to eat tomorrow .

let myBreakfast;
myBreakfast="frostes";
let myDinner;
myDinner="ham sandwhich";
let myTea;
myTea="chicken mayo pasta";
console.log(myBreakfast);// logs the varible myBreakfast to the console
//***********
console.log(`for breakfast i had ${myBreakfast} and for my dinner i had a ${myDinner} and then when i get home i will enjoy a ${myTea}`)


myBreakfast="toast";
myDinner="pot noodle";
myTea="chippy";

console.log(`for breakfast i had ${myBreakfast} and for my dinner i had a ${myDinner} and then when i get home i will enjoy a ${myTea}`)

//TODO: a list that has your three favorite songs
//TODO: a list that has your three favorite films
let favoriteSongs = ["angel with a shoutgun","river flows in you","give your heart a break",]
console.table(favoriteSongs)

//*push - adds element to the end
//*pop - removes element from end
//*splice - takes out a selection of values from aspecific index 

//*.slice - 
//*.shift - removes the first element of the array 
//*.unshift - adds a new element to the start of the array 
//TODO use the above on the shoppinglist 

let favoriteFilms =["avengers", "ironman","anime sword art online","matrix","bloodbrothers"]
favoriteFilms.push("lord of the rings")// adds anouther element into the end of the array 

favoriteFilms.pop()// removes the last element of the table created.
console.table(favoriteFilms)

let removed = favoriteFilms.splice(1,1)//this takes out the selected varible 
console.table(favoriteFilms)

favoriteFilms.slice(3)
console.table(favoriteFilms)

favoriteFilms.shift()
console.table(favoriteFilms)

favoriteFilms.unshift()
console.table(favoriteFilms)
