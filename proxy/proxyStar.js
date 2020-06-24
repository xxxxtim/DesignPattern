// star
let star = {
    name: 'chris',
    age: 24,
    phone: '123456'
};


// proxy
let agent = new Proxy(star, {
    // get :讀取資料
    get(target, key) {
        if (key === 'phone') {
            // 詢問手機的話 返回經紀人手機
            return '999999'
        }
        if (key === 'price') {
            // 詢問價格的話 由經紀人返回報價
            return 10000;

        }
        return target[key];
    },
    // set:修改資料
    set(target, key, value) {

        // 如果報的價格太低，回報價格太低
        if (key === 'customPrice') {
            if (value < 100) {
                console.log(`價格太低`);
                return false;
            }
            // 報的價格>底標，將價格存取起來
            else {
                target[key] = value;
                return true;
            }
        }

    },



})
// test 
// get
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

// set 
agent.customPrice = 50;
console.log(agent.customPrice);

agent.customPrice = 1000;
console.log(`客戶報價：${agent.customPrice}`);

agent.customPrice = 500;
console.log(`客戶報價：${agent.customPrice}`);