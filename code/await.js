// 还是我们之前看过的例子
readFile('./sample.txt')
    .then(content => {                              // let content = readFile('./sample.txt');
        let keyword = content.substring(0, 5);      // let keyword = content.substring(0, 5);
        return find(keyword);
    }).then(res => {                                // var res = find(keyword);
        return getP(res.length);
    }).then(data => {                               // var data = getP(res.length);
        console.log(data);                          // console.log(data);
    })

    //而在promise里面处理异常的方法是在这个调用链的最后加一个.catch子句
    .catch(e => {
        console.log(e.message);
    })


// await关键字比较麻烦，必须写在async函数里面
async function fn() {
    try {
        let content = await readFile('./sample.txt');
        let keyword = content.substring(0, 5);
        let res = await find(keyword);
        let data = await getP(res.length);
        console.log(data);
    } catch (e) {
        console.log(e.message);
    }
}

// await 关键字，作用在promise上时会解开promise
let promise = Promise.resolve(1);
await promise // 1

// 作用在 promiseLike 上会解开 promiseLike
// promiseLike 就是有一个then方法的对象
let promiseLike = { then(cb) { cb(1); } };
await promiseLike // 1

// 作用在 其他对象上会返回原对象
await 1 // 1;


// async 函数返回的是promise
async function test() { }
test() // promise<void>

async function test() {
    return 1;
}
test() // promise<1>


async function test() {
    throw 1;
}

test().catch(error => console.log(error)) // 1