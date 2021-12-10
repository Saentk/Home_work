arr = [1, 7, 5, 7, 4, 5, 5]

function fitsTheCondition(arr){
	result_arr = []
	for (let x = 0; x < (arr.length - 2); x++){
		result_arr.push(((arr[x] < arr[x+1]) & (arr[x+1] > arr[x+2]) 
	                  || (arr[x] > arr[x+1]) & (arr[x+1] < arr[x+2])))
	}
	return result_arr
}

console.log(fitsTheCondition(arr))