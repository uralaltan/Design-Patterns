class System1 {
    constructor() {}

    operation() {
        console.log("System1 operation");
    }
}

class System2 {
    constructor() {}

    operation() {
        console.log("System2 operation");
    }
}

class Facade {
    constructor() {
        this.system1 = new System1();
        this.System2 = new System2();
    }

    operation1() {
        this.system1.operation();
    }

    operation2() {
        this.System2.operation();
    }
}

const facade = new Facade();
facade.operation1();