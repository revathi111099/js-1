var descend;
let oneIn=document.getElementById("one");
let secondIn=document.getElementById("two");
let threeIn=document.getElementById("three");
let subIn=document.getElementById("sub");
subIn.addEventListener("click",function(){
	let a=parseInt(oneIn.value);
	let b=parseInt(secondIn.value);
	let c=parseInt(threeIn.value);
	
if(a>b&&a>c){
    if(b>c){
        console.log(a,b,c);
		descend=a+" "+b+" "+c;
    }
    else{
        console.log(a,c,b);
		descend=a+" "+c+" "+b;
    }
}
else if(b>a&&b>c){
    if(c>a){
        console.log(b,c,a);
		descend=b+" "+c+" "+a;
    }
    else{
        console.log(b,a,c);
		descend=b+" "+a+" "+c;
    }
}
else if(c>a&&c>b){
    if(a>b){
        console.log(c,a,b);
		descend=c+" "+a+" "+b;
    }
    else{
        console.log(c,b,a);
		descend=c+" "+b+" "+a;
    }
}
document.getElementById("ask").innerText= descend;
console.log(descend);
})
