// 生成一个Promise
new Promise(function (resolve, reject) {
    // 成功时调用resolve
    // 类似于return data;
    resolve(data);

    // 失败时调用reject
    // 类似于throw error;
    reject(error);
})

// 快捷方法

// 成功
Promise.resolve(data);
// 失败
Promise.reject(error);





// 串行执行
let promise = new Promise(function (resolve, reject) {
    // todo
});

promise.then(function (data) {
    // 成功后的回调
}, function (error) {
    // 失败后的回调
})

// 或者
promise
    .then(function (data) {
        // 成功后的回调
    })
    .catch(function (error) {
        // 失败后的回调
    });



// 并行执行
let promise1;
let promise2;
let promise3;


// 将多个promise合并成一个大的promise，
// 当所有小promise成功时，大promise也跟着成功
// 当有一个小promise成功时，大promise也会跟着失败
let bigPromise = Promise.all([
    promise1,
    promise2,
    promise3
])
bigPromise
    .then(function (data1, data2, data3) {
        // data1,data2,data3 分别为 
        // promise1,promise2,promise3 的返回
    })
    .catch(function (error) {

    })


// 将多个promise合并成一个大的promise，
// 当有一个小promise成功时，大promise也跟着成功
// 当所有小promise失败时，大promise也跟着失败
let bigPromise = Promise.race([
    promise1,
    promise2,
    promise3
]);
bigPromise
    .then(function (data) {
        // data 为 第一个返回的promise的返回
    })
    .catch(function (error) {

    })