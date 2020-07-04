//Task-1

function show(num) {
	document.getElementById("result").value += num;
	return 0;
}

function clr() {
	document.getElementById("result").value = '';
	return 0;
}

function dot() {
	document.getElementById("result").value += '.';
	return 0;
}

function sqrt() {
	let x = document.getElementById("result").value;
	return document.getElementById("result").value = Math.sqrt(x).toFixed(3);

}

function abs() {
	let x = document.getElementById("result").value;
	return document.getElementById("result").value = Math.abs(x);
}

function per() {
	document.getElementById("result").value += '*100/';
	return 0;
}

function equalto() {
	let a = document.getElementById("result").value;
	let b = eval(a);
	return document.getElementById("result").value = b;
}
//Task-2

function check() {

	let name = document.getElementById("name").value;
	var nameCheck = /[^A-Za-z]/;
	var first = name.charAt(0);
	let number = document.getElementById("number").value;
	var numberCheck = /[^0-9]/;
	if (first.match(nameCheck)) {
		alert("Name should start only with alphabets");
	} else if (number.match(numberCheck)) {
		alert("Enter a valid phone number");
	} else if (number.length != 10) {
		alert("Enter a valid phone number");
	} else {
		return alert("Submited successfully");
	}

}

//Task-3

function palindrome() {
	var str = document.getElementById("palindrome").value;
	if (str === "") {
		alert("Enter input");
	} else {
		var lc_str = str.toLowerCase().replace(/[^A-Za-z0-9]/, '');
		//changed all alphabets to lowercase and removed symbols
		var rev_str = lc_str.split('').reverse().join('');
		if (rev_str === lc_str) {
			document.getElementById("result1").value = "Given string is a palindrome.";
			return true;
		} else {
			document.getElementById("result1").value = "Given string is not a palindrome.";
			return false;
		}
	}
}

function anagram() {
	var str1 = document.getElementById("anagram1").value;
	var str2 = document.getElementById("anagram2").value;
	if (str1 === "" || str2 === "") {
		alert("Enter input");
	} else {
		var lc_str1 = str1.toLowerCase().replace(/\s/, '');
		var lc_str2 = str2.toLowerCase().replace(/\s/, '');
		if (lc_str1.length !== lc_str2.length) {
			document.getElementById("result2").value = "Given strings are not a pair of anagram.";
			return false;
		} else {

			var stra = lc_str1.split('');
			var strb = lc_str2.split('');
			var sort1 = stra.sort().join('');
			var sort2 = strb.sort().join('');
			if (sort1 === sort2) {
				document.getElementById("result2").value = "Given strings are a pair of anagram.";
				return true;
			} else {
				document.getElementById("result2").value = "Given strings are not a pair of anagram.";
				return false;
			}
		}
	}
}

//Task - 4

/*Human=0; Cockroach=1; Nuclearbomb=2*/
function play() {
	var a = Math.floor(Math.random() * 1001);
	var x = a % 3;
	document.getElementById("input1").value = x;
	var b = Math.floor(Math.random() * 1001);
	var y = b % 3;
	document.getElementById("input2").value = y;
	if ((x === 0 && y === 0) || (x === 1 && y === 1)||(x===2&&y===2)) {
		document.getElementById("winner").value = "TIE";
		return 0;
	}
	if ((x === 0 && y === 1) || (x === 1 && y === 0)) {
		document.getElementById("winner").value = "Human";
		return 0;
	}
	if ((x === 0 && y === 2) || (x === 2 && y === 0)) {
		document.getElementById("winner").value = "Nuclear Bomb";
		return 0;
	}
	if ((x === 1 && y === 2) || (x === 2 && y === 1)) {
		document.getElementById("winner").value = "Cockroach";
		return 0;
	}
}