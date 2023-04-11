/* a minimal implementation of observer pattern */
class Observable {
    constructor() {
        this._observers = [];
    }

    addObserver(observer) {
        this._observers.push(observer);

        return () => {
            this._observers = this._observers.filter(o => o !== observer);
        };
    }

    notifyObservers(...args) {
        this._observers.forEach(observer => {
            observer(...args);
        });
    }
}


/* applying a use-case for observer pattern */

class UserActions extends Observable {
    constructor() {
        super();
    }

    registerUser(user) {
        console.log('registering new user to our shop');
        /* 
            additionally we want to save it on the DB and when we are done,
            we will notify a new user has been registered 
        */
        this.notifyObservers(user);
    }
}

// this code is controlled by marketing team
const sendWelcomeEmail = (user) => {
    console.log(`sending email to ${user.email}`);
};

// this code is controlled by comercial team
const applyDiscountsOnFirstBuy = (user) => {
    console.log(`creating special discount to ${user.name}`);
};

// our main registering process
const startUserRegisterAction = () => {
    // the user that we will use for this example
    const user = {
        name: 'John Doe',
        email: 'john.doe.user@mailinator.com'
    };

    const userActions = new UserActions();
    
    // here we are setting the modules from the other teams as observers from our action
    userActions.addObserver(applyDiscountsOnFirstBuy);
    userActions.addObserver(sendWelcomeEmail);

    userActions.registerUser(user);
};

startUserRegisterAction();