function callback(cb) {
    cb();
}


console.log("before");
callback(function () {
    console.log("回调");
})
console.log("after");

/**
 * 
 * before
 * 回调
 * after
 * 
 */

console.log("before");
setTimeout(function () {
    console.log("异步");
})
console.log("after");

/**
 * 
 * before
 * after
 * 异步
 * 
 */