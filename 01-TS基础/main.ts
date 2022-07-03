{
  // 泛型 - 泛型约束
  // 需求 定义一个方法 getId 传入一个值 返回一个相同值
  // 多种泛型
  function getProp<O,K extends keyof O>(obj:O, key: K){
    return obj[key]
  }

  let person = { name: 'jack', age: 18 }
  getProp(person, 'name')
}