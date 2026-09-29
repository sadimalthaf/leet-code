/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
};var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2];

    arr.sort((a, b) => a - b);

    let mid = Math.floor(arr.length / 2);

    if (arr.length % 2 !== 0) {
        return arr[mid];
    } else {
        return (arr[mid - 1] + arr[mid]) / 2;
    }
};