(function () {
    var db = {
        "1": {
            name: "name1",
            age: 1
        },
        "2": {
            name: "name2",
            age: 2
        }
    }

    // 这里模仿了ajax，返回了promise，在3s之后有结果
    function getPeopleDataById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var data = db[id];
                if (data) {
                    resolve(db[id]);
                } else {
                    reject();
                }
            }, 3 * 1000);
        })
    }

    //这个东西之后应该会成为一个util方法
    function DataSource({ dataGetter, initData }) {
        var vm = new Vue({
            data() {
                return this._getDefaultData();
            },
            computed: {
                isLoading() {
                    return this.state === "loading";
                },
                isSuccessed() {
                    return this.state === "success";
                },
                isFailed() {
                    return this.state === "fail";
                }
            },
            methods: {
                reload() {
                    this._reset();
                    var promise = this._getPromise();
                    promise.then(
                        (data) => {
                            this._setData(data);
                            this.state = "success";
                        },
                        () => {
                            this.state = "fail";
                        }
                    )
                },
                _getDefaultData() {
                    return Object.assign({ state: "loading" }, initData || {});
                },
                _getPromise() {
                    return dataGetter();
                },
                _reset() {
                    var data = this._getDefaultData();
                    this._setData(data);
                },
                _setData(data) {
                    for (var key in data) {
                        this.$set(this, key, data[key]);
                    }
                }
            }
        });
        vm.reload();
        return vm;
    }

    new Vue({
        el: "#app",
        template: `
        <div>
            <button v-for="id in peopleIdList" @click="changePeople(id)">{{id}}</button><br>
            <div v-if="currentPeopleMsg.isLoading">
                loading...
            </div>
            <div v-else-if="currentPeopleMsg.isSuccessed">
                current People Msg:<br>
                name:{{currentPeopleMsg.name}}<br>
                age:{{currentPeopleMsg.age}}<br>
            </div>
            <div v-else>
                failed<br>
                <button @click="reload">reload</button>
            </div>
        </div>
        `,
        data: {
            peopleIdList: [1, 2, 3],
            currentPeopleId: 1
        },
        methods: {
            changePeople(id) {
                this.currentPeopleId = id;
            },
            reload() {
                this.currentPeopleMsg.reload();
            }
        },
        computed: {
            currentPeopleMsg() {
                return new DataSource({
                    dataGetter: () => getPeopleDataById(this.currentPeopleId),
                    initData: {
                        name: "",
                        age: ""
                    }
                })
            }
        }
    });
}());