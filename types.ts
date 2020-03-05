/*  VARIABLES */
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = 'Hello'+'World';
myNum = 5+5;
myBool = false;
myVar = 'sad';
console.log(myVar);

/* ARRAY */
/* let strArr: string[];
let numArr: number[];
let boolArr: boolean[]; */
let strArr:Array<string>;
let numArr:Array<number>;
let boolArr:Array<boolean>;

let strNumTuple: [string,number];

strArr = ['Hello','World'];
numArr = [1,2,3];
boolArr = [true,false,true];
strNumTuple = ['Hello',3];

let myVoid: void = null; // undefined
let myNull: null = undefined;
let myUndefined: undefined = null;

console.log(myVoid);