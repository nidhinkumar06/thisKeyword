Implicit and Explicit Calling:
================================

Implicit calling is function calling which is made by the compiler automatically without user's interference, whereas explicit calling is made by the user using specific type of codes.

Using This in arrow function
==============================
Case1: If this is called inside a function and if it has no value then it would display {}
Case2: If this is declarted globally and if this is called in the arrow function it would return it as Object(if we call simply this instead of this.key)
Case3: If we add a new value to an object during the function call it will add that value as well as the old value and displays entire object


Using This in Normal function:
==================================
Using Implicit Call - Calling a function directly
-----------------------------------------------------
Case1: Calling the this keyword inside a function will return window object
Case2: Declaring a variable outside the function and calling the variable inside the function will display the output as undefined since it doesn't what is this(To avoid this we will use call or bind)
Case3: Creating an object and creating a function inside that object and calling that function will return the value or object

Using Explict Call - calling indirectly
--------------------
Case1: Explicit function is called using call or apply
