{
  // 对象类型

  // const obj:{
  //   name:string,
  //   age:number,
  //   gender:string,
  //   say:(content:string)=>void
  // }={
  //   name:'五五',
  //   age:22,
  //   gender:'女',
  //   say(content){
  //     console.log('西巴'+content);
      
  //   }
  // }
  // console.log(obj.name);
  // obj.say("丁禹锡")
  
  type person={
    name:string,
    gender:string,
    score:string,
    height:number,
    study:(content:string)=>void,
    play:(item:string)=>void
  }
  let obj:person={
    name:'小西八',
    gender:'',
    score:'',
    height:180,
    study(content){
      console.log('八嘎'+content);
    },
    play(item){
      console.log('真好玩'+item);
      
    }
  }
  console.log(obj.play('vuejs'));
  
}