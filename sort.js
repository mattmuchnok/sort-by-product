// const sortArr = (arr) => {
//     let product
//     let results = []
//     results.push(arr[0])
//     for (let i = 1; i < arr.length; i++) {
//         product = arr[i] * i
//         results.push(product) 
//     }
//     return console.log(results.sort(function(a, b){return a-b}))
// }
// sortArr([23, 2, 3, 4, 5])

// function sortByProduct(...numbers) {
//     const result = {};
//     const totals = [];

//     for(let i = 1; i <= numbers.length; i++) {
//         const total = i * numbers[i-1];
//         totals.push(total)
//         result[i] = {
//             total,
//             number: numbers[i-1]
//         };
//     }

//     return numbers.sort((a, b) => {
//         return result[numbers.indexOf(a) + 1].total - result[numbers.indexOf(b) + 1].total;
//     });
// }

// console.log(sortByProduct(23,2,3,4,5));


const sortByProduct = (arr) => {
    let sortedArr = [arr[0]];
    let values = [arr[0] * 1];
  
    arr.forEach((ele, ind) => {
      sortedArr.forEach((sortEle, sortInd) => {
        if (ele * (ind + 1) < values[sortInd]) {
          sortedArr.splice(sortInd, 0, ele);
          values.splice(sortInd, 0, ele * (ind + 1));
        } else if (ind === arr.length - 1 && sortInd === sortedArr.length - 1) {
          sortedArr.push(ele);
          values.push(ele * (ind + 1));
        }
      });
    });
    console.log(sortedArr);
  };
  
  let arr = [23, 2, 3, 4, 5];
  
  sortByProduct(arr);