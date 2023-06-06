# dice game notes 
 This is just my personal notes , it just helps me documenting my steps. the person who visits my git hub profile hope fully it will teach them.
## notes.
The script tag should be below (at the end ) : Just search in google this is the most basic .
1. First we have to add the image 6 to all the souce images : this is to ensure that when the user first visit the game site ,the user sees the dice 6 image .
2.  ``` let randomNumber1 = Math.floor(Math.random()*6 ) +1 ; ``` : * genral qs* difference between the let and the var ?
* Temporal Dead Zone (TDZ): Variables declared with let are subject to the TDZ, which means they cannot be accessed before they are declared. This behavior helps catch potential bugs and encourages better coding practices by ensuring variables are properly initialized before use.

* Variable Reassignment: Variables declared with let can be reassigned new values within the same scope. This behavior makes let more flexible for scenarios where you need to update the value of a variable. In contrast, variables declared with const are not reassignable, while variables declared with var can be redeclared within the same scope, leading to potential confusion and bugs.
 * ```math.random  ``` as we all know that math .random generally returns the value from the 0 to 0.9999.... but never 1 . so we use this combination of math.floor along with the ``` + 1 ``` to get the value from 1 to 6 ; 

3. ``` let randomImageSource = "images/" + randomDiceImages;``` it is a variable that gets the random images from the image folder that i have created and put all the necessary images.
4. well as there is just the two image tag and i have declared it in order , we can just select the first image with the help of a quwry selectorall ``` var image1 = document.querySelectorAll("img")[0];```.*** note:if there are multiple pictures or it is not defined in a order manner we can always use the get element by id  or document.query selector. ***
.Then just replace the first attribute with the random image source that is ``` randomImageSource ``` that i have created. It can be done with the help of the function called the set attribute;
5. do the same thing for the second dice .
6. Now just write the if else statement of the winner loser and the draw case;
