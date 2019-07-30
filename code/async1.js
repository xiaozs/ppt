function fn1(cb) {
    let isAsync = true;
    if (isAsync) {
        setTimeout(cb);
    } else {
        cb();
    }
}

fn1(() => console.log("fn1 runned"));
console.log("-------");