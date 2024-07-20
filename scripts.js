//JavaScript is one of the languages used in modern web browsers. It powers the dynamic behavior on most websites.

// This is a single line comment

/*
This is a multi-line comment
*/

/*THE CONSOLE- Displays messages like errors. Console is an object, which is a collection of data and actions
CONSOLE.LOG()- A method on the console object used to log or print messages to the console. 

console.log(5); Prints 5 to the console 
NOTE: Javascript code will run as intended without a semicolon at the end but it is a best practice to include it.

DATA TYPES 

    Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.

    BigInt: Any number, greater than 2^53-1 or less than -(2^53-1), with n appended to the number: 1234567890123456n.

    String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. 

    Boolean: This data type only has two possible values— either true or false (without quotes).

    Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).

    Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.

    Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

    Object: Collections of related data.

    All data types have access to specific properties that are passed down to each instance. 
    Ex: Strings have length property
    console.log('Hello'.length); Prints 5

ARITHMETIC OPERATORS- Perform tasks in code

    console.log(3 + 4); Prints 7
    console.log(5 - 1); Prints 4
    console.log(4 * 2); Prints 8
    console.log(9 / 3); Prints 3
    console.log(11 % 3); Prints the remainder 2

ASSIGNMENT OPERATORS- Assign value to left operand based on value of its right operand
    += addition assignment
    -= subtraction assignment
    *= multiplication assignment
    /= division assignment

    let number=28;

    number= number*10;
    number*=10;
    console.log(number); Prints 280

VARIABLES- Containers for data

    Variable Declarations
    var height;   var was used in prior versions of Javascript(pre-ES6).
    let age;      Contains undefined if nothing is assigned to it. Allows you to change the value of the variable later on.
    const name= 'Ashanti';   Used for variables with values that will remain constant.


    Initalizing Variables
    let age;          Can declare without initalizing
    console.log(age); Prints: undefined
    age=15;
    console.log(age); Print: 15

    const name="Ashanti";
    name="Sidney"  //TypeError: Assignment to constant variable

STRINGS

    let age= 9;

    CONCATENATION: 'Mark is  ' + age + ' years old.';
    INTERPOLATION: 'Mark is  ${age} years old.';

METHODS- Data types have access to methods that allow us to handle instances of that data type.

    console.log('hello'.toUpperCase()); Prints 'HELLO'
    console.log('Hey'.startsWith('H')); Prints true
    More methods at the documentation website : https://developer.mozilla.org/en-US/docs/Web/JavaScript

BUILT IN OBJECTS

    Math object is used for complex operations
    console.log(Math.random()); Prints a random DECIMAL number between 0 and 1

    To generate a DECIMAL number between 1 and 10 use:
    Math.random() *10;

    To make the result a whole number we use Math.floor(). It takes a decimal number, and rounds down to the nearest whole number. 

    Math.floor(Math.random() * 50);


A LITTLE REVIEW: 
    Data is printed, or logged, to the console, a panel that displays messages, with console.log().

    Numbers are any number without quotes: 23.8879

    Strings are characters wrapped in single or double quotes: 'Sample String'

    The built-in arithmetic operators include +, -, *, /, and %.

    Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.

    Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().

    We can access properties and methods by using the . dot operator.

    Built-in objects, including Math, are collections of methods and properties that JavaScript provides.

CONDITIONAL STATEMENTS

    If...else statement structure
    let sale= false;
    if(sale == true){
        console.log("Time to buy!");
    }
    else{
        console.log("Wait for a sale")
    }   

    The else statement must be paired with an if statement. 
    We can also use else...if before the else to allow for more than two possible outcomes.

    Switch keyword- Used to simplify the process of writing multiple else if statements

    let groceryItem = 'papaya';

    switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:  
        console.log('Invalid item');
        break;
    }

    // Prints 'Papayas are $1.29'

    Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether 
    or not it matches—including the default. This behavior is different from if/else conditional statements that execute 
    only one block of code.

    The default statement is evaluated if none of the conditions are true.

COMPARISON OPERATORS
    Less than: <
    Greater than: >
    Less than or equal to: <=
    Greater than or equal to: >=
    Is equal to: ===
    I RECOMMEND U USE === BECAUSE == will return true even if the values are off different types
    '1' == 1 Returns true even though one is a string and the other is a number
    '1' === 1 Returns false
    Is not equal to: !==

    'apples' === 'oranges' will evaluate to false

LOGICAL OPERATORS

    and (&&) Checks if two conditions are true

    if(weather === 'sunny' &&  day === 'Sunday'){
    console.log('Go to beach with family');
    } else{
    console.log('Stay home');
    }

    or(||)  Checks if one of the conditions is true
    not(!) Reverses or negates the value 

    let happy= true;
    console.log(!happy); Prints false


TRUTHY AND FALSY

    let val= "Exists";
    if(val){
        console.log(val)
        } else{
        console.log('The variable doesn't exist');
        }

    In this example, the code block in the if statement will run because val has a truthy value. So even though it is
    not explicitly the value true, when used in a boolean or conditional context, it will evaluate to true.

    Falsy Values 
    0
    Empty strings like '' or ""
    null which represents that there is no value at all
    NaN (not a number)
    undefined which represents when there is no value at all

    let username='';
    let defaultname= username || 'Stranger';
    console.log(defaultName);  Prints Stranger

TERNARY OPERATOR- Used to simplify an if...else statement

    isNightTime? console.log('Turn on the lights!) : console.log('Turn off the lights!');

2ND REVIEW

An if statement checks a condition and will execute a task if that condition evaluates to true.

if...else statements make binary decisions and execute different code blocks based on a provided condition.

We can add more conditions using else if statements.

Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.

The logical and operator, &&, or “and”, checks if both provided expressions are truthy.

The logical operator ||, or “or”, checks if either provided expression is truthy.

The not operator, !, switches the truthiness and falsiness of a value.

The ternary operator is shorthand to simplify concise if...else statements.

A switch statement can be used to simplify the process of writing multiple else if statements. 
The break keyword stops the remaining cases from being checked and executed in a switch statement.


FUNCTION- A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

    Function Declaration
    function greetWorld(){
    console.log('Hello, World!');
    }

    Hoisting- feature in JavaScript which allows access to function declarations before they’re defined.
    NOT GOOD PRACTICE

    greetWorld();   Output: Hello, World!

    function greetWorld() {
        console.log('Hello, World!');
    }
    
    Use greetWorld() to call the function

PARAMETERS 

    Some functions can take inputs and use the inputs to perform a task. When declaring a function, 
    we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s).
    
    DEFAULT PARAMETERS- Gives the function parameters a default value in cause no arguments are passed
    function greeting (name = 'stranger') {
         console.log(`Hello, ${name}!`)
    }

    greeting('Nick') // Output: Hello, Nick!
    greeting() // Output: Hello, stranger!

ARGUMENTS
    The values that are passed to the function when it is called are called arguments. 
    Arguments can be passed to the function as values or variables.

    function sayThanks(name) {
        console.log('Thank you for your purchase ' +name+ '! We appreciate your business.');
    }

    sayThanks('Cole');

RETURN 

    When a function is called, the computer will run through the function’s code and evaluate the result. By default, the resulting value is undefined.

    function rectangleArea(width, height) {
    let area = width * height;
    }

    console.log(rectangleArea(5, 7))  Prints undefined because we didn't use a return statement

    function rectangleArea(width, height) {
        if (width < 0 || height < 0) {
            return 'You need positive integers to calculate area!';
    }
    return width * height;
    }

HELPER FUNCTIONS

    We can also use the return value of a function inside another function. 
     Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

    If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

    function multiplyByNineFifths(number) {
        return number * (9/5);
    };

    function getFahrenheit(celsius) {
        return multiplyByNineFifths(celsius) + 32;
    };

    getFahrenheit(15); // Returns 59

FUNCTION EXPRESSIONS

     To define a function inside an expression, we can use the function keyword. In a function expression, 
     the function name is usually omitted. A function with no name is called an anonymous function. 
     A function expression is often stored in a variable in order to refer to it.

    const plantNeedsWater= function(day, plantNeedsWater){
        if (day === 'Wednesday'){
            return true;
        }
        else{
            return false;
        }
        };

    plantNeedsWater('Tuesday');
    console.log(plantNeedsWater('Tuesday'));

    NOTE: Unlike function declarations, function expressions are not hoisted so they cannot 
    be called before they are defined.

*/

//DOM = DOCUMENT OBJECT MODEL
/*
    Object{} that represents the page you see in the web browser and provides you with an API to interact with it. 
    Web browser constructs the DOM when it loads the HTML document, and structures all the elements in a tree-like representation.
    Javascript can access the DOM to dynamically change the content, structure and style of a web page.

    Explanation: https://youtu.be/NO5kUNxGIu0?si=t1MUM8eL1LPf4L_I

    Element Selectors= Methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML 
    elements from the DOM(Document Object Model).

    1. document.getElementById() //Element or Null
    2. document.getElementsClassName() 
    3. document.getElementsByTagName()
    */


const choices= ["rock","paper","scissors"];
const playerDisplay= document.getElementById("playerDisplay");
const computerDisplay= document.getElementById("computerDisplay");
const resultDisplay= document.getElementById("resultDisplay");
  
function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() *3)];
    let result="";

    if(playerChoice === computerChoice){
        result="THERES A TIE!!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result= (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result= (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result= (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;  
        }

    }

    playerDisplay.textContent = 'PLAYER: '+ playerChoice ;
    computerDisplay.textContent = 'Computer: ' + computerChoice;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText"); //Resets the colors

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break;
        
    }
}
