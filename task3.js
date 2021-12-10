strings = [
['Hello', 'world'],
['Brad', 'came', 'to', 'dinner', 'with', 'us'],
['He', 'loves', 'tacos']
]

position = ['left', 'right', 'left']

function moveTo(str){
	if (pos == 'left') {str += ' '.repeat(16 - str.length)}
	else if (pos == 'right') {str = ' '.repeat(16 - str.length) + str}
	return str
}

function add_strings(str, row){
	for (let word = 0; word < str[row].length; word++){
		if ((string + str[row][word]).length <= 15){
			string += str[row][word] + ' '}
		else{
			text += '*' + moveTo(string.trim()) + '*' + '\n'
			string = str[row][word] + ' '}
	}
	return text += '*' + moveTo(string.trim()) + '*' + '\n'
}

function format_text(str, position){
	text = '******************\n'
	for (let row = 0; row < str.length; row++){
		string = ''
		pos = position[row]
		text = add_strings(str, row)
	}
	return text + '******************'
}

console.log(format_text(strings, position))