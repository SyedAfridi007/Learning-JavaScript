console.log('Me first');
console.log('CSS');
console.log('React JS');
console.log('Node JS');
console.log('Rust');
console.log('JavaScript');

// 1000ms = 1 second// try 0 instead of 1000, result will be same
setTimeout(() => {
  console.log('Will be shown last');
}, 1000);

const arr = ['javaScript', 'python', 'Rust'];
console.log(arr[2]);

arr.forEach(element => {
  console.log(element);
});

for (let i = 0; i < 2000; i++) {
  console.log('long running loop');
}

console.log('Express JS');
console.log('MongoDB');
console.log('Local Storage');
console.log('MySQL');
console.log('PHP');
console.log('Golang');