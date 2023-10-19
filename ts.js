const users = [
    { name: 'Ahmad', age: 30 },
    { name: 'Yasser', age: 28 },
    { name: 'Jarle', age: 35 },
    { name: 'Svein', age: 61 },
  ];


let arr= [] ;

const funct=(item)=>{


    if (item.age>28){
      arr.push(item.name) ;
        console.log(item.name);
    }
}

users.forEach(funct) ;
console.log (arr);




