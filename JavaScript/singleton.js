class Singleton {

    static instance = null;

    constructor() {}

    static getInstance() {
        if(!Singleton.instance)
        {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

var s1 = Singleton.getInstance();
var s2 = Singleton.getInstance();
var s3 = new Singleton();
var s4 = new Singleton();

if (s1 === s2) {
    console.log("Singleton");
}

if (s3 === s4) {
    console.log("Normal Method");
}

