{
  // 对象类型
  // interface

  interface IPerson {
    name: string
    age: number
    sayHi(): void
  }
  
  
  let person: IPerson = {
    name: 'jack',
    age: 19,
    sayHi() {}
  }
  person.sayHi()
  
}