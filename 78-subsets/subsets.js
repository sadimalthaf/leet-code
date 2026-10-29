/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
};

var subsets = function(nums) {
    let result = [[]];

    for (let num of nums) {
        let newSubsets = [];

        for (let subset of result) {
            newSubsets.push([...subset, num]);
        }

        result.push(...newSubsets);
    }

    return result;
};

