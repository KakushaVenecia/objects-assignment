// Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 
function InstagramPost(authorhandle,content, imagelink, views, likes){
    this.authorhandle = authorhandle;
    this.content = content;
    this.imagelink = imagelink;
    this.views = views;
    this.likes = likes;
}

// Create 2 Instagram post objects from the constructor function you created above
 
let firstPost = new InstagramPost('hannah', 'This is me', 'www.instagram.com', 20, 59);

let secondPost = new InstagramPost('john','I am the John Doe they speak about', 'www.idonotexizt.com',80,7);
console.log (firstPost.imagelink)
console.log (secondPost)

// Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State.
// Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94
// Using the factory method, implement a createPerson() factory function that takes name,
//  age and location as arguments.
//  Afterwards, create an object representing Musa from the factory function. 

const createPerson =(name,age,location) =>{
    return{
    name:name,
    age:age,
    location:location}
}

const Musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State')

console.log(Musa)

// Also, implement a factory function createJambScores()
//  that takes eng, govt, lit, crk as arguments.
//   Then create an object representing Muse’s JAMB scores. 
//   Add the object as a property to Musa object you created above in (a) above

let createJambScores = (eng, govt, lit, crk) =>{
    return{
        eng:eng,
        govt:govt,
        lit:lit,
        crk:crk
    }
}

//method 1 : Musa.JambScores = createJambScores(70,85,82,94)
const JambScores = createJambScores(70,85,82,94)

Musa.newJambscores = JambScores

console.log(Musa)

// What are the different ways you can clone an object? 
// Give examples for each of them.

// Using the spread operator:
const objectOne = {
    names: "Chebet",
    age: 37,
    title: "Somewhat Greatest"
};
const chebetObject = {...objectOne};
console.log(chebetObject); 

// Using Object.assign():
const venObject = {
    names: "Venecia",
    age: 27,
    title: "The Greatest"
};
const venCloned = Object.assign({}, venObject);
console.log(venCloned); 

// Using JSON.parse() and JSON.stringify():
const kushObject = {
    names: "Kakusha",
    age: 40,
    title: "The Greatest of all Time"
};
const kushCloned = JSON.parse(JSON.stringify(kushObject));
console.log(kushCloned); 

// As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// 	’Omoyele Sowore is the presidential candidate of AAC’

for (let key in presidentialCandidates) {
    console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`);
  }