var itemList = [
  { no: 1, todo: "두부", done: false },
  { no: 2, todo: "계란", done: false },
  { no: 3, todo: "라면", done: false },
];

var newItemList = itemList;

// 얕은 복사
var newItemList = [...itemList];

// 깊은 복사
newItemList[1] = { ...itemList[1] };

newItemList[1].done = true;
console.log(itemList, newItemList);
console.log(newItemList === itemList);
