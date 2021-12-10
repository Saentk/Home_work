matrix = [
	[4, 5, 6, 1, 2, 3],
	[1, 2, 3, 4, 5, 6],
	[9, 8, 7, 7, 8, 9]
];

function isRange(matrix){
	resultArray = []
	for (let x = 0; x < (matrix[1].length - 2); x++){
		arrToCheck = []
		for (let y = 0; y < 3; y++){
			arrToCheck.push(matrix[y][x], 
				matrix[y][x+1], matrix[y][x+2])
		}
		resultArray.push(JSON.stringify(arrToCheck.sort())
						==JSON.stringify([1,2,3,4,5,6,7,8,9]))
	}
	return resultArray
}

console.log(isRange(matrix))