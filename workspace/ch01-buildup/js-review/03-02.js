var item = { no: 1, todo: "두부", done: true };

var newItem = item;

var newItem = Object.assign(item, { delete: true });
var newItem = Object.assign({}, item, { delete: true });

var newItem = { ...item, done: false };

// newItem.done = false;
console.log(item, newItem);
console.log("같은 객체인가?", item === newItem);
