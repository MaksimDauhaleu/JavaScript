￼function a(){
    return 4;
}
console.log(a()+a());
undefined
function a(){

    return 4;
}
console.log(a()+a());

VM57:4 8
undefined
function a(b){
    return b;
}
console.log(a(2)+a(4));

VM62:4 6
undefined
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

VM68:2 3
VM68:5 9
undefined
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

VM73:2 3
VM73:5 9
undefined
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

VM78:5 40
undefined
function a(b){
	console.log(b)
}
undefined
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

VM201:10 4
undefined
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}


undefined
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

VM216:4 10 3
VM216:5 30
undefined
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

VM221:7 3
VM221:8 4
undefined
function a(b){
    for(var i=0; i<10; i++){
    }
    return i;
}
console.log(3);
console.log(4);

VM230:6 3
VM230:7 4
undefined
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

    }
}
console.log(3);
console.log(4);

VM243:15 3
VM243:16 4
undefined
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
}
console.log(3);
console.log(4);

VM252:6 3
VM252:7 4
undefined
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
			return i;
    }
}
console.log(3);
console.log(4);
VM277:7 3
VM277:8 4
undefined
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
}
console.log(i);
console.log(4);
VM295:6 Uncaught ReferenceError: i is not defined
    at <anonymous>:6:13
(anonymous) @ VM295:6
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

VM300:4 2
VM300:4 5
VM300:4 8
VM300:4 11
undefined
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

VM305:3 0
VM305:3 1
VM305:3 2
VM305:3 3
VM305:3 4
VM305:3 5
VM305:3 6
VM305:3 7
VM305:3 8
VM305:3 9
VM305:3 0
VM305:3 1
VM305:3 2
VM305:3 3
VM305:3 4
VM305:3 5
VM305:3 6
VM305:3 7
VM305:3 8
VM305:3 9
VM305:8 0
undefined
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

undefined
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

undefined
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

VM320:6 10
undefined
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
VM325:4 15
VM325:7 10
undefined
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
VM330:4 15
VM330:8 15
undefined
function a(){
    var z = 15;
    console.log(z);
    return z;
}
a();
VM355:3 15
15
function a(){
    var z = 15;
    console.log(z);
    return z;
	return z;
}
a();
VM386:3 15
15
function a(){
    var z = 15;
    console.log(z);
	console.log(z);
    return z;
}
a();
VM438:3 15
VM438:4 15
15