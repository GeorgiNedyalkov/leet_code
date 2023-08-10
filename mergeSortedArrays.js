const numbers1 = [1, 2, 3, 0, 0, 0];
const numbers2 = [2, 5, 6];
const m = 3;
const n = 3;

function mergeSortedArrays(nums1, m, nums2, n) {
    for (let i = 0; i < m; i++) {
        nums1.push(nums2[i]);
    }

    nums1.sort().splice(0, n);
}

mergeSortedArrays(numbers1, m, numbers2, n);

console.log(numbers1);
