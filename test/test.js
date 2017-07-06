/*jshint esversion:6*/
const expect = require('chai').expect;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('Hello!');
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  sayAge() {
    console.log(`I am ${this.age} years old`);
  }
}


describe('Person', function() {
  let p = new Person('Ben', 25);

  it('should have a name property, that is a string', function() {
    expect(p).to.have.a.property('name');
    expect(p.name).to.be.a('string');
  });

  it('should have an age property, that is a number', function() {
    expect(p).to.have.a.property('age');
    expect(p.age).to.be.a('number');
  });

  it("should have a sayHello() method that prints 'Hello!'",function() {
    expect(doesLogMessage(p.sayHello, 'Hello!')).to.be.true;
  });

  it("should have a sayName() method that prints the Person's name: 'My name is 'name'", function() {
    expect(doesLogMessage(p.sayName.bind(p), `My name is ${p.name}`)).to.be.true;
  });

  it("should have a sayAge() method that prints the Person's age: 'I am 'age' years old'", function() {
    expect(doesLogMessage(p.sayAge.bind(p), `I am ${p.age} years old`)).to.be.true;
  });
});

function doesLogMessage(f, message) {
  var oldLog = console.log,
    result = false;
  console.log = function(s) {
    if (s == message) {
      result = true;
    }
  };
  f();
  console.log = oldLog;
  return result;
}