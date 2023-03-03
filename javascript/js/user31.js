export default class User {
    constructor(email,name){
        this._id = email;
        this._name = name;//private property
    }
    greeting(){
        return `Hi, my name is  ${this._name}`;      
    }
} 