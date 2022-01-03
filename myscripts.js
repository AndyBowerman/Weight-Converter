let input = document.getElementById('input');
const convert = document.getElementById('convert');
const inputUnit = document.getElementById('input-unit');
const outputUnit = document.getElementById('output-unit');
let output = document.getElementById('output');
const clear = document.getElementById('clear');


convert.addEventListener('click', converter);

function converter() {
	if(inputUnit.value == "" || outputUnit.value == "") {
		alert('Please Enter Measurement Unit');
	} else if(inputUnit.value === 'Kilograms' && outputUnit.value === 'Kilograms'){
		output.value = input.value;
	} else if(inputUnit.value === 'Kilograms' && outputUnit.value === 'Stone') {
		output.value = kgToStone(input.value);
	} else if(inputUnit.value === 'Kilograms' && outputUnit.value === 'Pounds') {
		output.value = kgToPounds(input.value);
	} else if(inputUnit.value === 'Kilograms' && outputUnit.value === 'Metric-Tonnes') {
		output.value = kgToTonnes(input.value);
	} else if(inputUnit.value === 'Stone' && outputUnit.value === 'Stone'){
		output.value = input.value;
	} else if(inputUnit.value === 'Stone' && outputUnit.value === 'Kilograms') {
		output.value = stoneToKg(input.value);
	} else if(inputUnit.value === 'Stone' && outputUnit.value === 'Pounds') {
		output.value = stoneToPounds(input.value);
	} else if(inputUnit.value === 'Stone' && outputUnit.value === 'Metric-Tonnes') {
		output.value = stoneToTonnes(input.value);
	} else if(inputUnit.value === 'Pounds' && outputUnit.value === 'Pounds'){
		output.value = input.value;
	} else if(inputUnit.value === 'Pounds' && outputUnit.value === 'Kilograms') {
		output.value = poundsToKg(input.value);
	} else if(inputUnit.value === 'Pounds' && outputUnit.value === 'Stone') {
		output.value = poundsToStone(input.value);
	} else if(inputUnit.value === 'Pounds' && outputUnit.value === 'Metric-Tonnes') {
		output.value = poundsToTonnes(input.value);
	} else if(inputUnit.value === 'Metric-Tonnes' && outputUnit.value === 'Metric-Tonnes'){
		output.value = input.value;
	} else if(inputUnit.value === 'Metric-Tonnes' && outputUnit.value === 'Kilograms') {
		output.value = tonnesToKg(input.value);
	} else if(inputUnit.value === 'Metric-Tonnes' && outputUnit.value === 'Stone') {
		output.value = tonnesToStone(input.value);
	} else if(inputUnit.value === 'Metric-Tonnes' && outputUnit.value === 'Pounds') {
		output.value = tonnesToPounds(input.value);
	}
}

//Conversion Functions

function kgToStone(val) {
	return val*0.157;
}

function kgToPounds(val) {
	return val*2.205;
}

function kgToTonnes(val) {
	return val*0.001;
}

function stoneToKg(val) {
	return val/0.157;
}

function stoneToPounds(val) {
	return val*14;
}

function stoneToTonnes(val) {
	return val/157;
}

function poundsToKg(val) {
	return val/2.205;
}

function poundsToStone(val) {
	return val/14;
}

function poundsToTonnes(val) {
	return val/2205;
}

function tonnesToKg(val) {
	return val*1000;
}

function tonnesToStone(val) {
	return val*157;
}

function tonnesToPounds(val) {
	return val*2205
}

//Clear Button

clear.addEventListener('click', () => {
	input.value = "";
	output.value = "";
})
