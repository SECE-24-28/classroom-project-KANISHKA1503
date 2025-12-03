// console.log("Hello World");
// function add(a,b)
// {
//     return a+b
// }
// console.log(add(5,2))
// var sub=function(a,b)
// {
//     return a-b;
// }
// console.log(sub(10,5))
// console.log(sub)
// var sum=(a,b)=>
// {
//     return a+b
// }
// console.log(sum(10,20));
// var sum1=(a,b)=>a+b
// console.log(sum1(20,30))
// var s1=a=>a+10
// console.log(s1(5))
// for(let i=1;i<=5;i++)
// {
//     console.log("Number :",i)
// }
// for(let i=2;i<=20;i+=2)
// {
//     console.log("Even Number :",i)
// }
// let i=2
// while(i<=20)
// {
//     console.log("Even Number :",i)
//     i+=2
// }
// var arr=[15,"cat",true,8,'a']
// console.log(arr[2])
// console.log(arr.length)
// console.log("Array Elements")
// for(var j=0;j<arr.length;j++)
// {
//     console.log(arr[j])
// }
// console.log(arr)
// var nar=new Array(10)
// console.log(nar)
// var nar1=new Array(10,20)
// console.log(nar1)
// arr.push("Dog")
// console.log(arr)
// arr.unshift(10)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
//higher order functn
// function a(arg)
// {
//     arg()
//     console.log("Inside function A ")
// }
// function b()
// {
//     console.log("Inside function B ")
// }
// a(b)
// function a(arg,y)
// {
//     return arg+y;
// }
// function b(x,y)
// {
//     return x+y
// }
// console.log(a(b(5,15),20))
// function a(arg,x,y)
// {
//     console.log("Inside function A ",x)
//      arg(y)
// }
// function b(y)
// {
//     console.log("Inside function B ",y)
// }
// a(b,10,20)
// function multiplyBy(factor)
// {
//     return function(number)
//     {
//         return number*factor
//     }
// }
// const mulby2=multiplyBy(2);
// const mulby4=multiplyBy(4);
// console.log(mulby2(10))
// console.log(mulby4(20))
// const arr=[1,2,3,4,5]
// arr.forEach((ele) =>
// {
//     console.log("ele=> ",ele)
// })
const arr=[1,2,3,4,5]
var narr=[]
arr.forEach((ele)=>
{
    narr.push(ele*2)
}
)
console.log(narr)

var res=arr.map((ele)=>
{
    return ele*2
})
console.log(res)