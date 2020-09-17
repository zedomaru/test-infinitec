const { test1, test2 } = require('./test');

const Test1 = () => {
    const arr = []
    for(const key in test1){
        const objTest1 = {}
        objTest1.field = key
        const operator = key.split('_')
        let operatorResult = ''
        if(operator.length > 1) {
            operatorResult = operator[1]
        } else {
            operatorResult = 'cont'
        }
        objTest1.operator = operatorResult
        objTest1.value = test1[key]
        arr.push(objTest1)
    }
    
    const result = arr.filter(el => el.value !== null && el.value !== '')

    return result
}


const Test2 = () => {
    const objTest2 = {}
    test2.forEach(el => {
        objTest2[el.property] = []
        for(const key in el.constraints) {
            const element = el.constraints[key]
            objTest2[el.property].push(element)
        }
    })
    return objTest2
}

console.log('======== SOAL 1 ===========')
console.log(Test1())
console.log('======== SOAL 2 ===========')
console.log(Test2())