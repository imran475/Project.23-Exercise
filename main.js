//Q#2
// let personName= "Imran";
// console.log('Hello' ,personName,"Would you like to learn some python today");
// Q#3
// let personName = "Imran";
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
// console.log("imran\nIMRAN\nImran");
// Q#4
// console.log("Audrey Hypburn once said",'"Word IMPOSSIBLE it self says I AM Possible"');
// Q#5
// let famousPerson="Audrey Hypburn";
// let message="once said,'Word IMPOSSIBLE it self says I AM Possible'";
// console.log(famousPerson,message);
// Q#5
// let whiteSpace="\n\t Imran \t\n";
// console.log(whiteSpace);
// let withoutwhiteSpace=whiteSpace.trim();
// console.log(withoutwhiteSpace);
// Q#7 ,Q#8 same
// console.log(4+4);
// console.log(10-2);
// console.log(2*4);
// console.log(16/2);
// Q#9
// let favouriteNumber=9
// console.log("My favourite number is", favouriteNumber);
// Q#10
// let whiteSpace="\n\t Imran \t\n";//\n is used for new line and \t is used for white space
// console.log(whiteSpace);
// let withoutwhiteSpace=whiteSpace.trim();
// console.log(withoutwhiteSpace);
// Q#11
// let friendName=["Imran","Ali","Haider","Saleem"]
// console.log(friendName[0]);
// console.log(friendName[1]);
// console.log(friendName[2]);
// console.log(friendName[3]);
// Q#12
// let friendName=["Imran","Ali","Haider","Saleem"]
// let message="How are you friends?"
// console.log("Hi",friendName[0],message);
// console.log("Hi",friendName[1],message);
// console.log("Hi",friendName[2],message);
// console.log("Hi",friendName[3],message);
// Q#13
// let transportation: string[] = ['Car','Bus','Plan','Train'];
// for(let i=0; i<transportation.length; i++){
// console.log('I would like to own a' + transportation[i]);}
// Q#14
// let guest_list: string[] = ['Waseem','Ahad','Aariz','Imran'];
// for (let i=0; i<guest_list.length; i++){
// console.log("Dear"  +  guest_list[i] + '\n\n You are invited for a dinner tomorrow.\n\n Thank you.');}
// Q#15
//let guest_list: string[] = ['Waseem','Ahad','Aariz','Imran'];
// for (let i=0; i<guest_list.length; i++){
// console.log('Dear ${guest_list[i]}\n\n You are invited for a dinner tomorrow.\n\n Thank you. \n');}
// let not_coming: string ='Waseem';
// let new_guest: string = 'Ali';
// guest_list[0] = new_guest
// for (let i=0; i<guest_list.length; i++){
// console.log('Dear ${guest_list[i]}\n\n You are invited for a dinner tomorrow.\n\n Thank you. \n\n');}
// console.log('Mr ${not_coming}, is not coming for dinner tomorrow.');
// Q#16
// let guest_list: string[] = ['Waseem','Ahad','Aariz','Imran'];
// let not_coming: string ='Waseem';
// let new_guest: string = 'Ali';
// guest_list[0] = new_guest
// for (let i=0; i<guest_list.length; i++){
// console.log('Dear ${guest_list[i]}\n\n You are invited for a dinner tomorrow.\n\n Thank you. \n\n');}
// console.log('Mr ${not_coming}, is not coming for dinner tomorrow.');
// guest_list.unshift('Elon Musk');
// guest_list.splice(guest_list.length/2,2,"Alex");
// guest_list.push("Shaid Afridi");
// for (let i=0; i<guest_list.length; i++){
// console.log('Dear ${guest_list[i]}\n\n You are invited for a dinner tomorrow.\n\n Thank you. \n\n');}
// console.log('We have found a bigger dinner table so we invited more guest');
// Q#17
// let guest_list: string[] = ['Waseem','Ahad','Aariz','Imran'];
// let not_coming: string ='Waseem';
// let new_guest: string = 'Ali';
// guest_list[0] = new_guest
// guest_list.unshift('Elon Musk');
// guest_list.splice(guest_list.length/2,2,"Alex");
// guest_list.push("Shaid Afridi");
// console.log('\n\nUnfortunately we are out of space, so have space for two guests only.\n\n');
// while(guest_list.length>2){
// let removed_guest = guest_list.pop();
//  console.log('Dear ${removed_guest}, you are not invited for a dinner tomorrow');
// }
// for (let i=0; i<guest_list.length; i++){
// console.log('Dear ${guest_list[i]}\n\n You all are still invited for a dinner tomorrow.\n\n Thank you. \n\n');}
// guest_list.splice(0,2);
// console.log(guest_list);
// Q#18
// let places: string [] = ['Islamabad','bejing','sydney','new york','paris'];
// Print your array in its original order
// console.log('original' + places);
// Print your array in alphabetical order without modifying the actual list.
// console.log(`copy` + [...places].sort());
// Show that your array is still in its original order by printing it.
// console.log(`original` + places);
// Print your array in reverse alphabetical order without changing the order of the original list 
// console.log(`copy` + [...places].sort().reverse());
// * Show that your array is still in its original order by printing it again.
// console.log(`copy` + [...places].sort().reverse());
// Reverse the order of your list.Print the array to show that its order has changed 
// console.log(`copy` + [...places].sort().reverse());
// Reverse the order of your list again. Print the list to show it's back to its original order
// console.log(`copy` + [...places].sort().reverse());
// * Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed
// console.log(`copy` + [...places].sort().reverse());
// Q#19
//let guest_list: string[] = ['Waseem','Ahad','Aariz','Imran'];
// for (let i=0; i<guest_list.length; i++){
// console.log("Dear"  +  guest_list[i] + '\n\n You are invited for a dinner tomorrow.\n\n Thank you.');}
// export{guest_list};
// Q#20
// let mountain_list: string [] = [`k2`,`Mount everst`, `Himalya`, `margalla hills`,`nanga parbat`]
// console.log(`\nlist of Mountains`)
// for (let i=0; i<mountain_list.length; i++){
//  console.log(`${mountain_list[i]}`)
// }
//Q#21
// interface item {
//    name : string
//    price: number
// }
// Two objects
// const vegetable: item = {
// name: "tomato",
// price: 100
// }
// const fruit: item = {
// name: "Apple",
// price: 250
// }
// console.log(`vegetable name: ${vegetable.name}, vegetable price: ${vegetable.price}`)
// console.log(`fruit name: ${fruit.name}, fruit price: ${fruit.price}`);
// Q#22
// let listing: string [] = ['imran','Ahad','Saleem','Ali','Aariz'];
// console.log(listing[3]);
// console.log(listing[0]);
// console.log(listing[1]);
// console.log(listing[2]);
// Q#23
var car = 'subaru';
// 5 true Tests
// equality test
// console.log("is car == 'subaru'? I predict True.")
// console.log(car == `subaru`); //true
// strict equality test
console.log("is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //true
// inequality test
console.log("is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); //true
//  strict equality test
console.log("is car !== 'Toyota'? I predict True.");
console.log(car !== "Toyota"); //true
// equality test
console.log("is car === 'subaru'? I predict True.");
console.log(car === "subaru"); //true
// equality test
console.log("is car == 'undefined'? I predict False.");
console.log(car == 'undefined'); // false
// strict equality test
console.log("is car === 'Toyota'? I predict False.");
console.log(car === 'Toyota'); // false
// strict equality test
console.log("is car = 'null'? I predict False.");
console.log(car = 'null'); // fals
// strict equality test
console.log("is car === null? I predict False.");
console.log(car === null); // fals
