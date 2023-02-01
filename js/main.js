let obj={
	brand:"dell",
	color:"black",
	pockets:5
}
for(let i in obj){
    console.log(i);
}
//o/p
//brand
//color
//pockets
for(let i in obj){
    console.log(obj[i]);
}
//o/p
//dell
//black
//5
console.log(obj.brand);
console.log(obj["color"]="green");
//dell
//green
delete obj.brand;
for(let i in obj){
    console.log((i));
}
//color
//pockets
obj.name="reva";
for(let i in obj){
    console.log((i));
}
//color
//pockets
//name
let key=(obj)=>{
	obj.profile=obj.name;
	list={
		...obj,profile:"reva"
	}
	delete obj.name;
	console.log(list);
}
key(obj);
//color
//pockets
//profile
1.var a=5;
var b=10;
if(a<b){
  console.log(true);
}
else{
   console.log(false);
}
//true
2.var a=5;
var b=10;
if(a>b){
  console.log(false);
}
else if(a<b){
   console.log(true);
}
//true
3.var a=5;
var b=10;
if(a>b){
  console.log(false);
}
else if(a>=b){
   console.log(true);
}
else{
    console.log("hi");
}
//hi
var age=16;
var voterID="true";
if(voterID=="true" && age>=18){
    console.log("you are eligible put a vote");
}
else{
    console.log("you are not a eligible put a vote");
}

var age=16;
var licencetest="pass";
var licencetest="fail";
if(licencetest=="pass" && age>=18){
    console.log("you are get a licence");
}
else if(licencetest!=="fail"){
    console.log("you are fail.so not get a licesce");
}
else{
    console.log("you are not get a licence");
}

var mark1=35;
var mark2=45;
var mark3=60;
var mark4=80;
var mark5=90;
var mark=mark1+mark2+mark3+mark4+mark5;
var avg=mark/5;
console.log(mark);
console.log(avg);
if(avg>35){
    console.log("Your grade is F");
}
else if(avg<=45){
   console.log("Your grade is E"); 
}
else if(avg<=50){
    console.log("Your grade is D");
}
else if(avg<=60){
    console.log("Your grade is C");
}
else if(avg<=80){
     console.log("Your grade is B");
}
else if(avg<=90){
     console.log("Your grade is A");
}
else{
    console.log("Your grade is A+");
}
//Descending order
var a=1;
var b=2;
var c=3;
var d=4;
if(a>b&&a>c&&a>d){
    if(b>c&&b>d){
        if(c>d){
            console.log(a,b,c,d);
        }
        else{
            console.log(a,b,d,c);
        }
    }
    else if(c>d&&c>b){
        if(b>d){
            console.log(a,c,b,d);
        }
        else{
            console.log(a,c,d,b);
        }
    }
    else if(d>c&&d>b){
        if(c>b){
            console.log(a,d,c,b);
        }
        else{
            console.log(a,d,b,c);
        }
    }
}
else if(b>a&&b>c&&b>d){
    if(a>c&&a>d){
        if(c>d){
            console.log(b,a,c,d);
        }
        else{
            console.log(b,a,d,c);
        }
    }
    else if(c>a&&c>d){
        if(a>d){
            console.log(b,c,a,d);
        }
        else{
            console.log(b,c,d,a);
        }
    }
	else if(d>c&&d>a){
		if(c>a){
			console.log(b,d,c,a);
		}
		else{
			console.log(b,d,a,c);
		}
	}
}
else if(c>a&&c>b&&c>d){
    if(a>b&&a>d){
        if(b>d){
            console.log(c,a,b,d);
        }
        else{
            console.log(c,a,d,b);
        }
    }
    else if(b>a&&b>d){
        if(a>d){
            console.log(c,b,a,d);
        }
        else{
            console.log(c,b,d,a);
        }
    }
	else if(d>a&&d>b){
		if(a>b){
			console.log(c,d,a,b);
		}
		else{
			console.log(c,d,b,a);
		}	
	}
}
else if(d>a&&d>b&&d>c){
    if(a>b&&a>c){
        if(b>c){
            console.log(d,a,b,c);
        } 
        else{
            console.log(d,a,c,b);
        }
    }
    else if(b>c&&b>a){
        if(c>a){
            console.log(d,b,c,a);
        }
        else{
            console.log(d,b,a,c);
        }
    }
	else if(c>b&&c>a){
		if(b>a){
			console.log(d,c,b,a);
		}
		else{
			console.log(d,c,a,b);
		}
	}
}
//8976 7854 6732 4506
// Ascending order
var a=5644;
var b=8457;
var c=7938;
var d=9679;
if(a<b&&a<c&&a<d){
    if(b<c&&b<d){
        if(c<d){
            console.log(a,b,c,d);
        }
        else{
            console.log(a,b,d,c);
        }
    }
    else if(c<d&&c<b){
        if(b<d){
            console.log(a,c,b,d);
        }
        else{
            console.log(a,c,d,b);
        }
    }
    else if(d<c&&d<b){
        if(c<b){
            console.log(a,b,c,d);
        }
        else{
            console.log(a,b,d,c);
        }
    }
}
else if(b<a&&b<c&&b<d){
    if(a<c&&a<d){
        if(c<d){
            console.log(b,a,c,d);
        }
        else{
            console.log(b,a,d,c);
        }
    }
    else if(c<a&&c<d){
        if(a<d){
            console.log(b,c,a,d);
        }
        else{
            console.log(b,c,d,a);
        }
    }
}
else if(c<a&&c<b&&c<d){
    if(a<b&&a<d){
        if(b<d){
            console.log(c,a,b,d);
        }
        else{
            console.log(c,a,d,b);
        }
    }
    else if(b<a&&b<d){
        if(a<d){
            console.log(c,b,a,d);
        }
        else{
            console.log(c,b,d,a);
        }
    }
}
else if(d<a&&d<b&&d<c){
    if(a<b&&a<c){
        if(b<c){
            console.log(d,a,b,c);
        } 
        else{
            console.log(d,a,c,b);
        }
    }
    else if(b<c&&b<a){
        if(c<a){
            console.log(d,b,c,a);
        }
        else{
            console.log(d,b,a,c);
        }
    }
}
//5644 7938 8457 9679
for(i=0;i<=4;i++){
    console.log(i);
}
//0
//1
//2
//3
//4
let i=1;
while(i<4){
    console.log(i);
    i++;
}
//1
//2
//3
let i=0;
do{
  console.log(i);
  i++;  
}while(i<3);
//0
//1
//2
let arr=[2,6,8,9,13];
for(let x of arr){
    console.log(x);
}
//2
//6
//8
//9
//13
let arr=[2,6,8,9,13];
for(let x in arr){
    console.log(arr[x]);
}
//2
//6
//8
//9
//13
let obj={
    brand:"skybags",
    color:"blue",
    pockets:5
}
for(let x in obj){
    console.log(x);
}
//brand
//color
//pockets
let obj={
    brand:"skybags",
    color:"blue",
    pockets:5
}
for(let x in obj){
    console.log(obj[x]);
}
//skybags
//blue
//5
for(i=500;i>450;i--){
   if(i%2==0){
    console.log(i);
   }
}
let i=500;
while(i>450){
    //if(i%2==0){
        console.log(i);
    
    i=i-2;
}
var a=45;
var b=65;
var c=75;
if(a>b&&a>c){
    if(b>c){
        console.log(a,b,c);
    }
    else{
        console.log(a,c,b);
    }
}
else if(b>a&&b>c){
    if(c>a){
        console.log(b,c,a);
    }
    else{
        console.log(b,a,c);
    }
}
else if(c>a&&c>b){
    if(a>b){
        console.log(c,a,b);
    }
    else{
        console.log(c,b,a);
    }
}

1.var input=4689;
var sum=0;
while(input>0){
    var remainder=input%10;
    input=(input-remainder)/10;
    sum=(sum*10)+remainder;
}
console.log(sum)
2.var input=567;
var sum=0;
while(input>0){
    var remainder=input%10;
    input=(input-remainder)/10;
    sum=sum+remainder;
}
console.log(sum)
3.var input=2345;
var sum=0;
while(input>0){
    var remainder=input%10;
    input=(input-remainder)/10;
    if(remainder%2==0){
      sum=sum+remainder;   
    }
}
console.log(sum)

class car{
	constructor(brand,color,price,model){
		this.brand=brand;
		this.color=color;
		this.price=price;
		this.model=model;
	}
	get rate(){
		return this.price;
	}
	set newrate(rupee){
		this.price=rupee;
	}
}
var car1=new car("Tesla","white","2lakh","BMW");
var car2=new car("kia","black","4lakh","Kia Forte");
var car3=new car("Honda","red","3lakh","Honda Odyssey");
var arr=[car1,car2,car3];
var express="newrate";
car1 [express]="5lakh";
car2 [express]="7lakh";
car3 [express]="6lakh";
console.log(arr);



