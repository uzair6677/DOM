// console.log('element selector');
// single element selector
// 1. document.getElementById();

// let  x = document.getElementById('demo');
// x.style.color='green';
// x.innerText='<b>heading1</b>';
// x.innerHTML='<b>heading1</b>';
// x=x.className;

// console.log(x);
// let a=document.getElementById('test');
// a=a.childNodes;
// console.log(a);
// let b=document.getElementsByClassName('.test');
// b=b.childNodes;
// console.log(a);

//query selector() call by id by using # ,class by . and by tag name
// let x = document.querySelector('h1');

// x.style.color = 'red';


//multi element selector 

//queryselectorall()

let b=document.querySelectorAll('div');
console.log(b);

//getelementbytagname()

let article=document.getElementsByTagName('article')

console.log(article);
for (let i = 0; i < article.length; i++) {
    article[i].style.border='2px solid black';
    
}

