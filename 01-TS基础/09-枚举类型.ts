{
  // 枚举类型
  

  // 字面量：所看到的就是字面量 1、'acb'、[]、{}
  // type direction='up'|'down'|'right'|'left'

  // 枚举 enum 
  enum Direction {
    up,
    down,
    left,
    right
  }
  function change(direction:Direction){
    console.log(direction);
  }
  change(Direction.down)
  console.log(Direction);
  
}