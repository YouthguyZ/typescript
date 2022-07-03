{
  // 泛型 - 泛型约束
  // 需求 定义一个方法 getId 传入一个值 返回一个相同值
 

  // <T>   => 声明泛型
  // val:t => 使用泛型
  // function getId<T>(val:T){
  //   return val
  // }
  // console.log(getId<string>('abs'));
  // // 回调时可以不写 <类型> => 会类型推断出来值的类型
  // console.log(getId(996));
  
  // function getId<Type>(val:Type[]){
  //   console.log(val.length);
    
  //   return val
  // }
  // console.log(getId());
  

  // 定义接口
  interface Ilength{
    length:number
  }

  // Type extends ILength 添加泛型约束
  // 解释：表示传入的 类型 必须满足 ILength 接口的要求才行，也就是得有一个 number 类型的 length 属性
  // extends 继承
  function getId<Type extends Ilength>(val:Type):Type{
    console.log(val.length);
    
    return val
  }
  console.log(getId('123'));
  
}