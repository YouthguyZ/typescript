{
  // 字面量类型
  let str='hello world'
  const str1='hello world'

  // 字面量：所看到的就是字面量 1、'acb'、[]、{}
  type direction='up'|'down'|'right'|'left'
  function change(direction:direction){
    console.log(direction);
    
  }
  change('left')


}