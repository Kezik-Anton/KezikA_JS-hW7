// // task 1

// console.log('Задание 1.')

let User = function() {
    this.name = 'NoName';
    this.Age = 0;
    this.canWalk = false;
    this.gender = 'free Gender';
};

let userAlex = new User(),
    userBob = new User(),
    userMike = new User();

userAlex.name = 'Alex';
userBob.name = 'Bobe';
userMike.name = 'Mike';


let Animal = function(name, walk) {
    this.name = name;
    this.canWalc = walk;
}

let cat = new Animal('Кот', true),
    dog = new Animal('Собака', true);

cat.canTalk = 'Meoe-meow';
dog.canTalk = 'Gaw-gaw!!';

console.log(cat);
console.log(dog);

let Calc = function() {

    this.get = function() {
        this.a = +prompt('Введите число А'); 
        this.b = +prompt('Введите число B');
        this.oper = prompt('Введите операцию: + - * /');

        this.operation();
    };

    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }

        this.show();
    };

    this.show = function() {

        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    };

};

let calc = new Calc();
calc.get();