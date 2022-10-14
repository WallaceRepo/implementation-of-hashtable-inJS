// With Hash

class ListNode {
    constructor(key, val, next) {
        this.key = key
        this.val = val
        this.next = next
    }
}
class MyHashMap {
    constructor() {
        this.size = 19997
        this.mult = 12582917
        this.data = []
    }
    hash(key) {
        return key * this.mult % this.size
    }
    put(key, val) {
        this.remove(key)
        let h = this.hash(key)
        let node = new ListNode(key, val, this.data[h])
        this.data[h] = node
    }
    get(key) {
        let h = this.hash(key), node = this.data[h]
        for (; node; node = node.next)
            if (node.key === key) return node.val
        return -1
    }
    remove(key) {
        let h = this.hash(key), node = this.data[h]
        if (!node) return
        if (node.key === key) this.data[h] = node.next
        else for (; node.next; node = node.next)
            if (node.next.key === key) {
                node.next = node.next.next
                return
            }
    }
};
let log = console.log
const sun = new MyHashMap();

sun.put('hello', 'howya');
sun.put('sun', 'day');
sun.put('moon', 'sky');
log(sun.remove('sun'))
log(sun.get('sun'))

// With Array

class MyHashMap {
    constructor() {
        this.data = []
    }
    put(key, val) {
        this.data[key] = val
    }
    get(key) {
        let val = this.data[key]
        return val !== undefined ? val : -1
    }
    remove(key) {
        delete this.data[key]
    }
};
let log = console.log
const sun = new MyHashMap();

sun.put('hello', 'howya');
sun.put('sun', 'day');
sun.put('moon', 'sky');
log(sun)   
//MyHashMap { data: [ hello: 'howya', sun: 'day', moon: 'sky' ] }
log(sun.get('sun'))   // day

let obj = {}
obj.name = []
console.log(obj)   // { name: [] }
obj.name.push('hello', 'kkk', {days: 'bright'})
log(obj) // { name: [ 'hello', 'kkk', { days: 'bright' } ] }

let key = 'sweet day' 
obj.name[key] = 'bla'
log(obj) // { name: [ 'hello', 'kkk', { days: 'bright' }, 'sweet day': 'bla' ] }
obj.name[key] = 'cute apples'
log(obj) // { name: [ 'hello', 'kkk', { days: 'bright' }, 'sweet day': 'cute apples' ] }
obj.name.pop()
obj.name.pop()
obj.name.pop()
obj.name.pop() // pops removes only the array member incerted with push(), from its last 
log(obj) // { name: [ 'sweet day': 'cute apples' ] }
delete(obj.name['sweet day']) // delete removes the weird one
log(obj) // { name: [] }

