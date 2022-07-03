{
  // 泛型 - 泛型约束
  // 需求 定义一个方法 getId 传入一个值 返回一个相同值
  
  // <T>   => 声明泛型
  // val:t => 使用泛型
  function getId<T>(val:T){
    console.log();
    
    return val
  }
  console.log(getId<string>('abs'));
  // 回调时可以不写 <类型> => 会类型推断出来值的类型
  console.log(getId(996));
  
}