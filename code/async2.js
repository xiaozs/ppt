//就好像使用co.js的函数要被thunk化一样
//将原有的使用回调的异步函数改为使用promise时
//也需要将其promise化
function promisify(fn, context = null) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            args.push(function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
            fn.apply(context, args);
        })
    }
}























function asyncFn(arg1, arg2, cb) {//条件一：回调放在参数列表的最后
    //条件二：特殊的回调调用规则
    if (error) {
        //如果出错了，异常了，不管怎么说反正就是失败了
        //要把Error对象作为第一个参数调用
        cb(error);
    } else {
        //成功了，则第一个参数为空，结果放后面
        cb(null, result);
    }
}

function callback(err, result) {
    if (err) {
        //异常处理
    }
    //正常流程
}
















//同时这个之所以叫做node式，那是因为node里面的回调写法全部都遵守这个规则
//所以node已经为我们准备好了这个方法
//具体的实现比我们这里实现的更完善
var promisify = require("utils").promisify;














// 以函数分解里面的例子为例

function getData(count) {
    get(`/sampleget?count=${count}`, data => {
        console.log(data);
    });
}

function queryDB(kw) {
    db.find(`select * from sample where kw = ${kw}`, (err, res) => {
        getData(res.length);
    });
}

function readFile(filepath) {
    fs.readFile(filepath, 'utf-8', (err, content) => {
        let keyword = content.substring(0, 5);
        queryDB(keyword);
    });
}

readFile('./sample.txt');







var readFile = promisify(fs.readFile);
var find = promisify(db.find);
var getP = promisify(get);

readFile('./sample.txt', 'utf-8')
    .then(content => {
        let keyword = content.substring(0, 5);
        return find(keyword);
    }).then(res => {
        return getP(res.length);
    }).then(data => {
        console.log(data);
    });















//上面的例子，用了promise可能有人觉得更加难看懂了
//在这里我们可以把这些promise化过的函数看成是同步函数
//以阅读同步函数的方式来阅读它
readFile('./sample.txt', 'utf-8')
    .then(content => {                              // var content = readFile('./sample.txt', 'utf-8');
        let keyword = content.substring(0, 5);      // let keyword = content.substring(0, 5);
        return find(keyword);
    }).then(res => {                                // var res = find(keyword);
        return getP(res.length);
    }).then(data => {                               // var data = getP(res.length);
        console.log(data);                          // console.log(data);
    });

//要诀就是把then中的 retrun promisifyFn(arg) 和下面一行的 then(res 看成一句
//var res = promisifyFn(arg)











//最后还有异常处理相关的问题
//在同步代码里面，我们会用try catch做异常处理

try {
    var content = readFile('./sample.txt');
    let keyword = content.substring(0, 5);
    var res = find(keyword);
    var data = getP(res.length);
    console.log(data);
} catch (e) {
    console.log(e.message);
}
































                                                    // try {
readFile('./sample.txt')
    .then(content => {                              // var content = readFile('./sample.txt');
        let keyword = content.substring(0, 5);      // let keyword = content.substring(0, 5);
        return find(keyword);
    }).then(res => {                                // var res = find(keyword);
        return getP(res.length);
    }).then(data => {                               // var data = getP(res.length);
        console.log(data);                          // console.log(data);
    })

    //而在promise里面处理异常的方法是在这个调用链的最后加一个.catch子句

    .catch(e => {                                   // } catch(e) {
        console.log(e.message);                     //   console.log(e.message);
    })                                              // }