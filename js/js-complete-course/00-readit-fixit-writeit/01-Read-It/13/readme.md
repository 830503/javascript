# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
* Look at the documentation of for...in
* Look at the documentation of the .sort(à function. Explain how it's applied here.
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?

1, Because forEach() method executes a function once for each array element. 
2, for in loop iterates over the properties of an object in an arbitrary order, 
3, .sort() method sorts the elements of an array. In this exercise, we ues .sort() to sort the movies array by year. 
4, In exercise 10, there is no difference console befor or after the creatList function. That may because of we did not use sort() function.
5, In exercise 13, there is differerce. Console.table before, the table displayed in an arbitrary order. But after the creatList function, the table displayed in sort of year. 