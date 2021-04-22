
function contiguous(str) {
	let switched = 0;
    let i = 1;
	while (i < str.length) {
		if (str[i] !== str[i - 1]) switched++;
    i ++;
    }
    return switched === 1;
}

// helper condition function 2
function balanced(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '0') {
			count++;
		} else if (str[i] === '1') {
			count--;
		}
	}

	return count === 0;
}

function getSubstringCount(s) {
	// zeros have to be together
		// 
	// ones have to be together
		// 
	// zeros must balance out 1s
		// helper function (balanced)

	// find substrings through nested loop
		// for each substring, check for three conditions above
		// if passes, then increment count (return value) by 1;
		// else continue;
    let counter = 0;
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let substring = s.slice(i, j + 1);
            console.log(substring);
            if (contiguous(substring) && balanced(substring)) {
                console.log(contiguous(substring) && balanced(substring));
                counter++;
            } 
        }
    }
    return counter;
}

console.log(getSubstringCount('001100011'));