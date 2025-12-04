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
// const arr=[1,2,3,4,5]
// var narr=[]
// arr.forEach((ele)=>
// {
//     narr.push(ele*2)
// }
// )
// console.log(narr)

// var res=arr.map((ele)=>
// {
//     return ele*2
// })
// console.log(res)
// const res1=arr.filter((ele)=>
// {
//     return ele%2==0
// })
// console.log(res1)
// const arr=[10,20,'J',30,'A','V','A']
// const r=arr.filter((ele)=>
// {
//     return typeof(ele)=='string'
// })
// console.log(r)
// //to print all elements
// const all=arr1.filter((e1) =>
// {
//   return true;
// })
// console.log("All Elements:",all);

// const arr2=[10,false,1.2,-0.7,null,'',undefined,'Hello',true];
// const value=arr2.filter((e1) =>
// {
//   return e1 ; 
// })
// console.log(value);

// //string
// const firstname="Mathu";
// const Lastname="Mitha";
// const fullname=firstname+' '+Lastname;
// console.log("Full Name:",fullname);
// const fullname2=`Full name is ${firstname}${Lastname}`;
// console.log(fullname2);

// const countwords=((str) =>
// {
//   return str.split(" ").length;
// })
// console.log(countwords("The quick brown fox"));
let person={
    name:"John",
    age:25,
    isStudent:true
};
console.log(person.name);
console.log(person["age"]);
var a1="age";
console.log(person[a1])
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
let marks={
    math:90,
    science:80,
    english:70
}
Object.keys(marks).forEach((key)=>
{
    console.log(key+"=>"+marks[key])
})

let std=[
    {
        name:"Jhon",age:20,grade:9
    },
     {
        name:"Emma",age:21,grade:8
    },
     {
        name:"Mike",age:18,grade:8.5
    }
];
std.forEach((student)=>
{
    console.log(student.name+" is "+student.age+" years old")
})
// std.forEach((stdnt)=>
// {
//     if(stdnt.grade>8)
//     {
//         console.log(stdnt.name)
//     }
// })
// const res=std.filter((stdnt)=>
// {
//     return stdnt.grade>8
// })
// const sname=res.map((stdnt)=>
// {
//     return stdnt.name
// })
// console.log(sname)
// console.log(`Students with grade greate than 8 is ${sname.join(' ')} `)
// console.log(`Students with grade greate than 8 is ${sname.toString()} `)

// const headingele=document.getElementById('heading')
// console.log(headingele)
// headingele.innerHTML="No heading"
// headingele.style.color='red';
// headingele.style.border='1px solid black'
// headingele.className="new-class"

// const buttonele=document.getElementById('btn')

// const containerEle=document.getElementsByClassName('container')
// console.log(containerEle[0])

// buttonele.addEventListener('click',()=>
// {
// headingele.innerHTML="New heading"
// headingele.style.color='blue';
// headingele.style.border='1px solid blue'
// })

btnele=document.getElementById('btn')
inpele=document.getElementById('name-input')
errele=document.getElementById('error')
errele1=document.getElementById('error1')
passele=document.getElementById('password')
btnele.addEventListener('click',(e)=>
{
    e.preventDefault()
    console.log(inpele.value)
    if(inpele.value.length<3)
    {
        errele.innerHTML="Name must be more than 3 characters"
    }
    else{
        ""
    }
    if(passele.value==inpele.value)
    {
        errele1.innerHTML="Both password and user name is same not secure change password "
    }
    else{
        errele1.innerHTML="you can login to your account"
    }
})

const arr=[1,2,3,4]
const arr2=[...arr]
console.log(arr)
console.log(arr2)
arr.push(1)
arr.push(3)
console.log(arr)
console.log(arr2)

var a1=[1,2,3,4]
var a2=a1
console.log(a1)
console.log(a2)
a1.push(1)
a1.push(3)
console.log(a1)
console.log(a2)
 
const obj={a:10,b:20}
obj.c=50
console.log(obj)

const user={name:"Kanishka",age:18}
console.log(JSON.stringify(user))

const usrstring=`{"name":"Kanishka","age":18}`
console.log(JSON.parse(usrstring))