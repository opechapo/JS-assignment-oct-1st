//Task!

// Create a simple program that simulates a sequence of actions using callback functions. In this case, they will simulate the process of cooking a meal with two steps: preparing ingredients and cooking them.

// Instructions:
// Create a function prepareIngredients that takes a callback function as an argument.
// Inside prepareIngredients, simulate a delay of 2 seconds , then print the message "Ingredients prepared." and call the callback function.
// Create a function cookMeal that takes a callback function as an argument.
// Inside cookMeal, simulate a delay of 3 seconds , then print the message "Meal cooked." and call the callback function.
// Finally, simulate eating the meal after both tasks are complete by printing "Meal is ready to eat!".

// Rewrite the above operations using promises also







// Callback method

// function prepareIngredents(callback){
  
//     setTimeout(() =>{
//     console.log("Ingredient Prepared");
//     callback()
//     },2000)
  // }
  
  // function cookMeal(callback){
  // setTimeout(() =>{
  // console.log("meal cooked");
  // callback()
  
  // },3000)
  // }
  
  // function mealReady(){
  //   setTimeout(() => {
  //   console.log("Meal is ready to eat!!");
  //   },4000)
  // }

  // prepareIngredents(() => cookMeal(mealReady))

// Writing in promise

function prepareIngredents(){
  return new Promise(resolve => 
    setTimeout(() => {
    console.log("Ingredient Prepared")
    resolve()
  },5000))}


function cookMeal(){
  return new Promise(resolve => 
    setTimeout(() => {
    console.log("meal cooked");
    resolve()
},6000))}

function mealReady(){
  return new Promise(resolve => 
    setTimeout(() => {
    console.log("Meal is ready to eat!!")
    resolve()
},7000))}


prepareIngredents()
.then(() =>cookMeal())
.then(() =>mealReady())


  
    
    
  
  