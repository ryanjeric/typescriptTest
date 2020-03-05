interface UserInterface{
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}

class User implements UserInterface{
    /* 
       public accessible
       private access only on this class
       protected access by inherits class
    */
    name:string;
    email:string;
    age:number;

    constructor(name:string,email:string,age:number){
        this.name = name;
        this.email = email;
        this.age  = age;
        console.log('USER CREATED '+ this.name);
    }
    register(){
        console.log(this.name + ' is now registerd');
    }

    payInvoice(){
        console.log(this.name + ' paid invoice');
    }
}

class Member extends User{
    id: number;
    constructor(id:number,name:string,email:string,age:number){
        super(name,email,age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice()
    }
}


/* let john = new User('Jhon Doe','jdoe@mail.cc',34);

john.register(); */

let mike: User = new Member(1,'Mike Smith','mike@mail.cc',33);

mike.payInvoice();