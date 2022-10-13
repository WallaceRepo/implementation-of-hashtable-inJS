let log = console.log;
class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
     }
     getKey(){
         return this.key
     }
     getValue(){
         return this.value
     }
     setValue(value){
         this.value = value
     }
}
class Hashmap {
    
    constructor(){
        this.table = []
    }
    hashNumber(key) {
        let salt = 0;
        if(key.length == 0) return salt;
        for( let i = 0; i< key.length; i++) {
            let ch = key.charCodeAt(i)
            salt = (salt + ch) % 5;
         }
        return salt
    }
    put(key, value) {
        let hash = this.hashNumber(key);
      
       if(this.table[hash] == null) {
            this.table[hash] = new Entry(key, value)
        } else {
            return 'yes'
        }
    }
    get(key) {
        let hash = this.hashNumber(key, this.table.size);
          console.log(hash)
          console.log(hash)
        if(this.table[hash]) {
            return this.table[hash].getValue()
        }
        return null
    }
    isExist(key){
    
        return this.get(key) != null
    }
}
let mymap = new Hashmap();
  mymap.put('hello', 'me')
  console.log(mymap)
  console.log(mymap.get('hello'))
  console.log(mymap.isExist('hello')) 
  console.log(mymap.isExist('sun')) // This one returns 'true' because the hashNumber() calculates it to 2 and array[2] has a value. So it collides with previous data.
  // Now instead of creating simple object for array entry, let me try linked list. 
