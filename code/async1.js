function fn1(data, cb) {
    if (data) {
        setTimeout(cb);
    } else {
        cb();
    }
}


console.log("before");
fn1({}, () => console.log("call"));
console.log("after");

/**
 * before
 * after
 * call
 */


console.log("before");
fn1(null, () => console.log("call"));
console.log("after");

/**
 * before
 * call
 * after
 */
