function Stack() {
    this._size = 0;
    this._storage = {};
}

//push the data
Stack.prototype.push = function(data) {
    // increases the size of our storage
    var size = this._size++;
 
    // assigns size as a key of storage
    // assigns data as the value of this key
    this._storage[size] = data;
};

//pop the data

Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    deletedData = this._storage[size];
 
    delete this._storage[size];
    this.size--;
 
    return deletedData;
};