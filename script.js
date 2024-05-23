const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 const result = [];
    let currentSubarray = [];
    let sum = 0;

    arr.forEach(num => {
        if (sum + num <= n) {
            currentSubarray.push(num);
            sum += num;
        } else {
            result.push(currentSubarray);
            currentSubarray = [num];
            sum = num;
        }
    });

    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
