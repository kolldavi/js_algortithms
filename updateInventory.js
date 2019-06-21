function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let total = {};

    //fill list object with first array
    for(let i=0;i<arr1.length;i++){
        total[arr1[i][1]] = arr1[i][0];
    }

    //fill list with second array and item already in object add amount
    for(let i=0;i< arr2.length;i++){
        if(!total[arr2[i][1]]){
            total[arr2[i][1]] = arr2[i][0];         
        }else{
            total[arr2[i][1]] =  total[arr2[i][1]] + arr2[i][0];
        }
    }

    let answer  = [];
    //convert object back to array
    for (let [key, value] of Object.entries(total)) {
        answer.push([value,key]);
      }
      //sort alphabetical
      answer.sort((a,b) => (a[1].toLowerCase() < b[1].toLowerCase() ? -1 : 1));
    return answer;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
