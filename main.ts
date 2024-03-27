//Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
console.log("Hellow world");
//Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let personName:string="areeba";
console.log(`hellow${personName}, would you like to learn some TypeScript today?”`);

/*Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let personName1:string="aReeba";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
console.log(personName1.charAt(0).toUpperCase()+personName.slice(1,7).toLowerCase());
/*Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
"Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
let famPerson:string="Albert Einstein";
console.log(`${famPerson} once said, “A person who never made a mistake never tried anything new.”`);

//Question 5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person:string="Albert Einstein";
let message:string=" A person who never made a mistake never tried anything new."
console.log(`\n\n${famous_person} once said,"${message}"`);
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
let famous_person2:string="Albert Einstein";
//space in up
console.log(`\n${famous_person2}`);
//space in down
console.log(`${famous_person2}\n`);
//space in left
console.log(`\t${famous_person2}`);
//space in right
console.log(`${famous_person2}\t`);

// Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
console.log(4+4);
console.log(10-2);
console.log(2*4);
console.log(16/2);

/*Question 8: You should create four lines that look like this:
console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.*/
let a:number=10;
let b:number=2;
let c:number=4;
let d:number=16;
console.log(c+c);
console.log(a-b);
console.log(b*c);
console.log(d/b);

//Question 9: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
let favNo:number=9;
let mes:string=" is my favourit number.";
console.log(favNo+mes);

//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
console.log("// is one line comment");
//let favNo:number=9;
console.log("/**/ is multilines lines comment");
/*let mes:string=" is my favourit number.";
console.log(favNo+mes);*/

//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
let arry:string[]=["Muskan","Alina","Aisha"];
arry.forEach(friends=>console.log(`${friends}`));
//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
let arry2:string[]=["Muskan","Alina","Aisha"];
let mes2="would you like to learn typescript with us?";
arry2.forEach(friends=>console.log(`Hellow ${friends},\t${mes2}`));
//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//let mes3:string=“I would like to own a”;
let mean_transport=["bike","car","honda","supera"];
mean_transport.forEach(transport=>console.log(`I would like to own a ${transport}.`));
//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest:string[]=["Muskan","Alina","Aisha"];
let invitation="would you like to hsve a today night dinner with us?";
guest.forEach(friend=>console.log(`Hellow ${friend},\t${invitation}`));

//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guest2:string[]=["Muskan","Alina","Aisha","Teena"];
let guestcopy=[...guest2];
let invitation2="will not come today."
let dontcome=guestcopy[2];
console.log(`${dontcome}\t${invitation2}`);
invitation2="will come today.";
guestcopy.splice(2);
guestcopy.splice(2,4,"seema");
guestcopy.forEach(fri_end=>console.log(`${fri_end},\t${invitation2}`));
//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let all_guest_invited:string[]=["Muskan","Alina","Aisha","Teena"];
console.log(`all guest list is: ${all_guest_invited}`);
all_guest_invited.splice(2);
console.log(`the list who are cmming now is: ${all_guest_invited}`);


//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let all_guest_invited3:string[]=["Muskan","Alina","Aisha","Teena"];
console.log(`before remove all guest list is: ${all_guest_invited3}`);
//all_guest_invited3.empty();
console.log("it should be removed but it did not become empty");
console.log(`after remove all guest list is: ${all_guest_invited3}`);
//Question 18: Seeing the World: Think of at least five places you’d like to visit.
//arry should be non alphabetiacl ordr
let country:string[]=["pakistan","saudi arabia","america","europ","china"];
//country.forEach(name=> console.log("")l;
console.log("original order");
console.log(country);
//alphabetical order with out change arry by copy of arry
 console.log("alphabetial order:",[...country].sort());
 console.log(`still in origional arry: ${country}`);
 //reverse orderd with out modifying actual arryby [...arryname].reverse()
 console.log(" order in alphabetical order in origion arry:" , country.sort());
 //revers will  modify and reverse in origional arry
 console.log("again revers order in arry : " , country.reverse());

//Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
let guest_in:string[]=["dolly","Amna","shan","kinza","shiza"];

console.log(`we have invited ${guest_in.length} guests in today dinner`);
//Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//object creating method
/*object is used for creating properties detail.*/
interface itcourse{
    courseName:string;
 location:string;
 onsitestudent:number;
}
let itcourse={
    courseName:"typescript $ javascript",

 location : "governor house karachi",

 onsitestudent: 500000,

};
console.log(itcourse);

//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
//undefined error{ element is not defind but we are calling by index method of arry it will show undefined error means element is not present in arry}
let error:string[]=["muskan","areeba","kinza"];
//undefined index error
console.log(error[10]);
/*console.log(error["imrana"]);
console.log(error["muskan"]);
console.log(error["areeba"]);
console.log(error["kinza"]);*/
//here it will not show error because it is present in arry
console.log(error[0]);
console.log(error[1]);
console.log(error[2]);

//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let you_score=67;


//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
//comparission operators =,<,>,! boolean result
let aa=23;
let bb=20;
//true result 
console.log("boolean true answers are:");
console.log(aa==23);
console.log(aa>20);
console.log(aa>bb);
console.log(bb<aa);
console.log(bb<23);
console.log(aa!=bb);
//false result
console.log("boolean false answers are:");
console.log(aa==20);
console.log(aa==bb);
console.log(aa<20);
console.log(aa<bb);
console.log(bb==23);
console.log(bb>aa);
//Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
//if else if statement with alian
let alian="green";
if(alian="green"){
    console.log("shoot green alian.you score 101 points");}
    else if(alian==="blue"){
        console.log("\nshoot blue alian. you score 501 points.");}
        else{console.log("\nshoot red alian .you score 101 points");};
    
    


//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age=45;
if(age>=45){
    console.log("you are senior citizen.");
}
else if(age<45 && age>=20){
    console.log("you are oiller of nations.");
}else if (age<20 && age>=13){
    console.log("you are teen ager.");
}else if(age<13 && age>=1 ){
    console.log("you are kid.");
}else{
    console.log("you are todler ");
}

//Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
//include()method of arry
let favfruit=["apple","oranges","banana"];
// this include method is not working although i have insert "lib":["es2016","dom"], but it is not working.
//these condition will run
/*if(favfruit.includes("apple")){
    console.log("i like apple.");
}
if(favfruit.includes("orange")){
    console.log("i like orange.");
}
if(favfruit.includes("banana")){
    console.log("i like banana.");
}
// these conditions will not run
if(favfruit.includes("mango")){
    console.log("i like mango.");
}
if(favfruit.includes("strawberry")){
    console.log("i like strawbarry.");
}*/


//Question 30: Hello Admin: Greet users differently, especially 'admin'.
//arry message in with if else condition 
let employ=["ali","asma","admin","sufyan","mehwish"];
 //employ=[];
if(employ.length==0){
    console.log("your arry is empity.");
}else {
//{employ.trim();
   console.log(`your erry length is ${employ.length}`);};
employ.forEach(oneEmploy=>{
    if(oneEmploy==="admin")
    {
       console.log(`hellow! ${oneEmploy} would you need some stats?`);
    }
else 
   { console.log(`hellow! ${oneEmploy} thank you, for visiting more.`)}});



//Question 31: No Users: Ensure your user list isn’t empty.
let employ_1=["ali","asma","admin","sufyan","mehwish"];
 //employ=[];
if(employ_1.length==0){
    console.log("your arry is empity.");
}else {
//{employ.trim();
   console.log(`your arry length is ${employ.length}`);};
//Question 32: Checking Usernames: Ensure uniqueness in usernames.
let username=["samina","sidra","ali","mehmood"];
// this include method is not working although i have insert "lib":["es2016","dom"], but it is not working.
//these condition will run
let newuser:string="mehwish";
/*if(username.includes("samina")){
    console.log("this user name is already taken .Give unique name.");
}
else if(username.includes("ali")){
    console.log("this user name is already taken .Give unique name.");
}
else if(username.includes("sidra")){
    console.log("this user name is already taken .Give unique name.");
}
// these conditions will not run
else if(username.includes("mahmood")){
    console.log("this user name is already taken .Give unique name.");
}
else{username.splice(3,4,newuser)
    console.log("its a unique name .thank you")
    username.forEach(name=>console.log(`new arry is after adding is ${name}`));
}*/



//Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
//ordinal number
let num=[1,2,3,4,5,6,7,8,9];
for(let number of num){
    if(number==1){
        console.log(`${number}st`);
    }else if(number==2){
        console.log(`${number}nd`);
    }
    else if(number==3){
        console.log(`${number}rd`);
    }
    else{console.log(`${number}th`);}
}
//alternat method
for(let number of num){
    let ordinal_num:string;
    if(number==1){
        ordinal_num="st";
    }else if(number==2){
        ordinal_num="nd";
    }
    else if(number==3){
        ordinal_num="rd";
    }
    else{ordinal_num="th";}
    console.log(`${number}${ordinal_num}`);
}


//Question 34: Pizzas: Share your favorite pizzas and express your love for them.
//pizza exercise
let pizza=["chiken tikka","fajita","mali cheeze"];
for(let piz of pizza){
    console.log(`I like ${piz} pizza.`);
}console.log("i like pizza but my children realy like it very much. ");


//Question 35: Animals: Highlight animals with a common trait.
//modify animal arry
let animal=["cat","dog","cow"];
for(let pet_ani of animal){
    console.log(`${pet_ani} would make a great pet.`);
}
console.log(`all animals such as ${animal} would be make a good pet animal.`);

//Question 36: T-Shirt: Create a function for customizing t-shirts.
//function making and calling
function make_shirt(size:string,print_mes:string){
    console.log(`\nyou selected shirt size is ${size}.and printing message on your shirt is "${print_mes}". `);
}
make_shirt("medium","hellow world!")
make_shirt("large","Be bold like me.")
make_shirt("small","lovely bird")

//Question 37: Large Shirts: Default values in make_shirt().
//function making defalt value and calling
function make_shirt2(size:string="large",print_mes:string="hello world"){
    console.log(`\nyou selected shirt size is ${size}.and printing message on your shirt is "${print_mes}". `);
}
make_shirt2();

make_shirt2("small","lovely bird");


//Question 38: Cities: Describing cities with a function.

function describeCity2(city:string){
    console.log(`${city} is in Pakistan`);
}
describeCity2("Karachi");
describeCity2("Lahore");
describeCity2("Quetta");

//Question 39: City Names: Formatting city-country pairs.
function describeCity(city:string,coun:string="pakistan"){
    console.log(`${city} is in ${coun}`);
}
describeCity("Karachi");
describeCity("Lahore");
describeCity("Quetta");

//Question 40: Album: Create objects for music albums.

//Question 41: Magicians: Display magician names from an array.
let magi2:string[]=["ali","saad","dad"];
console.log(magi2);
//other method
magi2.forEach(char=> console.log(char));
//Question 42: Great Magicians: Add "the Great" to magician names.
console.log(" sir! I need guideance in this coding it is not done by me."); 
//changing in copy arry by function for loop
let artist:string[]=["ali haider","nusrat fatah","teena sani"];

/*function musicAlbumorg(){
    for(let name of artist){
    console.log(artist)
    }
}*/
//copy of arry
let artistcopy=[...artist];
function musicAlbummodify(greet:string="the great"){
    let modify="";
    for(let name2 of artistcopy){
        modify+=`${greet} ${name2}\n`;
    }
    
    return modify;
};

   /* let newarry=musicAlbummodify("hello");  
console.log(newarry);
console.log(artist);*/
console.log("sorry sir it is not new arry it is as same as console.log  result in for loop.how to make new arry i did not undestand.");

console.log(musicAlbummodify());
console.log(musicAlbummodify("hellow"));
//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
console.log(" this is unchanged arry, or original arry.");
console.log(artist);
//Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
console.log("not understand");
//Question 45: Cars: Create detailed car objects with flexible properties.
//object creating method
/*object is used for creating properties detail.*/
interface car_property{
    carName:string;
colour:string;
 modle_no:number;
}
let car_property={
    carName:"honda",

 colour : "gray",

 modle_no: 500000,

};
console.log(car_property);

