1. The console will print `3` because `i` was defined with the `var` keyword, so it is accessible within the function `discountPrices`. At the end of the `for` loop, `i = 3` because there are 3 items in `prices`.
2. The console will print `150` because `discountedPrice` was defined with `var`, and thus it is accessible within the function `discountPrices`. The last value passed into `discountedPrice` was the last item in `prices` which was `300` multiplied by `1 - 0.5` from `discount`, so it should be `300 * 0.5 = 150`.
3. The console will print `150` because `finalPrice` was a `var` declared in `discountPrices` and is thus accessible in the function. The last value passed into `finalPrice` was the last value in `discountedPrice` rounded to the cent and converted back into dollars. Since `discountedPrice` is already in dollars only, it will be the same as `discountedPrice` which is `300`.
4. The function will return an array of values `[50, 100, 150]`. These values were obtained in the for loop where each item was calculated with a `0.5` discount and pushed into the `discounted` array defined in the function and returned.
5. An error occurs at `line 12` because `i` was defined with the keyword `let` so it is only accessibe within the `for` loop. `line 12` is outside of that for loop, so it will return an error.
6. An error occurse because `discountedPrices` is defined by `let` within the for loop, so it can only be accessed there. Yet, `line 13` still tries to access it.
7. The console logs `150` because `finalPrice` was defined in the function `discountPrice`. Even though it was defined with `let` `line 14` still works as intended since they are both within the same scope of the function.
8. The function will return the array `[50, 100, 150]`. These values are obtained through the for loop and applying all elements of `prices` the `0.5` discount. This still works as intended because even though `let` is used, the variables are only utilized in the scope that they were  defined in.
9. An error occurs at `line 11` because it is trying to access `i` which as declared by the keyword `let` that only allows access to it within the `for` loop scope. `line 11` is outside of this scope, so it throws an error.
10. The console will print `3` which is the length of the `prices` parameter. This works since `length` is a constant that doesn't get reassigned to a new value and it is accessed within the scope of the function.
11. This function still returns the array `[50, 100, 150]` which is the `prices` elements with the `0.5` discount applied. This still works because all variables are used within the scope that they are defined in, and the constants are not reassigned values once they have been defined.
12. 
    A. `student.name`
    B. `student['Grad Year']`
    C. `student.greeting()`
    D. `student['Favorite Teacher'].name`
    E. `student.courseLoad[0]`
13. 
    A. `32` - the inputs were mapped to their string representation
    B. `1` - the inputs were mapped to their integer outputs
    C. `3` - null was converted to 0 and they were both treated as integers
    D. `3null` - null was converted to a string and they were both treated as strin representation
    E. `4` - true was converted to 1 and the inputs were then treated as integers
    F. `0` - false and null were converted to 0 anad treated as integers
    G. `3undefined` - undefined was treated as a string since 3 was a string, and the result is a string
    H. `NaN` - undefined is treated as NaN, so when the operation is applied on integers it will result in NaN.

14.
    A. `true` - the string '2' becomes the number 2 which is greater than 1
    B. `false` - the inputs are both strings. Since alphabetically 1 comes before 2, then the string 2 is not less than the the string 12
    C. `true` - this only compares the value and not the datatype. Since both are 2 then they are equal.
    D. `false` - this compares the type and value. Since one is a string and the other is an int, then they aren't the same.
    E. `false` - true converts to 1, and 1 doesn't equal 2.
    F. `true` - Booean(2) converts to true. Since `true` is also a boolean they both match in value and in datatype.
15. `==` only compares the value of the data, so it will convert the inputs to be the same datatype beffore returning a result. `===` will check both the data and the datatype, so even if they hold the same value, it will still return false given that the inputs are of different datatypes. If they are of the same datatype and hold the same value, then it will return true.
17. The function will return `[2, 4, 6]`. When the function `modifyArray` was called, an array and the function `doSomething` were passed in. From there it create `newArr` in which it iterates through the input `array` and applied the function `doSomething` to each of the elements and placed it in `newArr`. This `doSomething` doubles the input value which were the elements. Thus, the returning array contains the elements from the input array but doubled.
18.
    1
    4
    3
    2