module.exports = function(array, hasher){
    var results = {};

    array.forEach(function(item){
        var hash = hasher(item);
        results[hash] = results[hash] || [];
        results[hash].push(item);
    });

    return results;
};