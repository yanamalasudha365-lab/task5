//Part 1: Array Manipulation Methods
// Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.
let arr=["apple","kiwi","banana","grapes","mango"];
arr.push("strawberry","orange");
console.log(arr);
//2. Create an array of 6 numbers. Remove the last element using pop() and print the result.
let arr1=[10,20,30,40,50,60];
arr1.pop();
console.log(arr1);
//3. Create an array of 5 names. Remove the first element using shift() and print the array.
let arr2=["sudha","sai","saisudha","sree","saisree"];
arr2.shift();
console.log(arr2);

//4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
let arr3=[44,22,33,77];
arr3.unshift(66,99);
console.log( arr3);

//5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().
 let arr4 = [10, 20, 30, 40, 50];
console.log(arr4.splice(1,2));
// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2,1,100);
console.log(arr5);
// 7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
let arr6=[12,13,24,56,78];
arr6.fill("hello",2,5);
console.log(arr6);
// Part 2: Array Merge and Search Methods
// 8. Create two arrays of numbers and combine them using concat().
let a=[1,2,3,4,5];
let a1=[11,22,33,44,55];
let res=a.concat(a1);
console.log(res);

// 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().
let arr7 = [10, 20, 30, 40, 50, 60];
let res1=arr7.slice(1,5);
console.log(res1);
// 10. Create a nested array and convert it into a single-level array using flat(Infinity).
let nested=[1,[2,3],[4,[5,6]]];
let res2=nested.flat(Infinity);
console.log(res2);

// 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().
let arr8 = [10, 20, 30, 40, 50];
let res3=arr8.includes(30);
console.log(res3);

// 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().
let arr9 = [5, 10, 15, 20, 25];
let res4=arr9.indexOf(20);
console.log(res4);

// 13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().
let arr10 = [1, 2, 3, 2, 1, 2];
let res5=arr10.lastIndexOf(2);
console.log(res5);
// 14. Create an array of numbers and arrange its elements using sort().
let arr11=[13,14,15,1621,12];
let res6=arr11.sort();
console.log(res6);

// 15. Create an array of 7 numbers and reverse the order using reverse().
let arr12=[9,8,88,56,90,21,78];
let res7=arr12.reverse();
console.log(res7);
//Part 3: Spread and Rest Operators
// 16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.
let arr13=[51,41,32,71];
let arr14=[32,89,65,21];
let result=[...arr13,...arr14];
console.log( result);

// 17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.
obj={
    name:"sudha",
    age:21,
    cgpa:8.7
}
obj1={
    job_role:"full stack developer",
    ctc:7,
    company:"stackly"
}
let result1={...obj,...obj1};
console.log( result1);
// 18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
function rest(s,t,...u){
    console.log(s);
      console.log(t);
        console.log(u);
}
rest(12,34,92,45,65,75);
// 19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].
function one(a, b, ...c)
{
    console.log(a+b+c[0]+c[1]);
     
}
one(12,12,44,10,66,88);
// 20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.
let array=[90,70,20,40];
let array1=[...array];
console.log(array1);

// Part 4: Array Destructuring
// 21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.
let array2=[10,20,30,40];
let [x,y,z,w]=array2;
console.log(x,y,z,w);

// 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.

let nested1 = [1, 2, [3, 4, [5, 6]]];
 

let [a2, b, [c, d, [e, f]]] = nested1;

console.log(a2);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
// 23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.
let array3=["sweety",21,8];
let [a3,b1,c1]=array3;
console.log(a3,b1,c1);
// Part 5: Object Destructuring
// 24. Create an object containing name, role, and location. Extract these properties using object destructuring.
let obj2={
    name:"swapna",
    role:"developer",
    location1:"hyd"
}
let {name,role,location1}=obj2;
console.log(name,role,location1);
// 25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.
 let student = {
    name2: "Sudha",
    address: {
        city: "Nellore",
        state: "Andhra Pradesh"
    }
};
let {address:{city,state}}=student;
console.log(city,state);
// 26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
let  object3={
    name1:"sravs",
    role1:"fullstack",
    location:{
        mainlocation:"vnr",
        currentlocation:"kbl"
    }
}
let {name1,role1,location:{mainlocation,currentlocation}}=object3;
console.log(name1,role1,mainlocation,currentlocation);
// Part 6: Mixed Practical Challenges
// 27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
let array4=[1,2,3,4,5,6,7,8,9,10];
array4.pop();
array4.shift();
array4.unshift(12,13);
console.log(array4);
// 28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
let num=[12,89,90,45,54,76];
let num1=num.includes(54);
let num2=num.indexOf(54);
let num3=num.lastIndexOf(54);
console.log(num1,num2,num3);
// 29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
let first={
    emp_name:"sweety",
    emp_role:"devops",
    emp_cmp:"wipro"
}
let sec={
    emp_name2:"sai",
    emp_role2:"frontend",
    emp_cmp3:"tcs"
}
let merge={...first,...sec};
let {emp_name,emp_role,emp_cm,emp_name2,emp_role2}=merge;
console.log(emp_name,emp_role);
 console.log(emp_name2,emp_role2);


// 30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
let number=[12,32,[1,[11,22,]]];
let number1=number.flat(Infinity);
console.log(number1);
let reversed=number1.reverse();
console.log(reversed);
