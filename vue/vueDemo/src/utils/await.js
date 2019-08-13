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