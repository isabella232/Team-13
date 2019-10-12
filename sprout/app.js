function menu(){
	window.location.href = "cropchooser.html";
}

function load(){
	var country = "India";

	var mydata = JSON.parse(data);
	var acres = Number(document.getElementById('acres').value);
	var revenue = Number(document.getElementById('revenue').value);
	var noWorkers = Number(document.getElementById('noWorkers').value);
	
	var expense;
	var income;
	if(country == "Brazil"){
		expense = (29 * acres) + (10.3 * acres) + (440 * noWorkers) + 1130;
		income = 0.16 * acres * 345 + .63 * expense + 700;
	}else if(country == "Malawai"){
		expense = (.13 * acres) + (10.3 * acres) + (86 * noWorkers) + 1130;
		income = .24 * acres * 100 + 0.66 * expense + 700;
	}else if(country == "India"){
		expense = (15 * acres) + (10.3 * acres) + (217 * noWorkers) + 1130;
		income = 0.16 * acres * 1850 + .58 * expense + 700;
	}
	var newRevenue = income - expense;

	document.getElementById("expenseId").innerHTML = "Expenses: " + expense;
	document.getElementById("incomeId").innerHTML = "Income: " + income;
	document.getElementById("revenueId").innerHTML = "Possible Revenue: " + newRevenue;
	document.getElementById("revenueGainId").innerHTML = "Revenue Gain: " + (newRevenue - revenue);
	console.log(acres + revenue);
}
function clickBanana(){
	console.log('the banana was clicked');
	document.getElementById("selected").innerHTML = "Selected: Banana";
}
function clickMaize(){
	console.log('the maize was clicked');
	document.getElementById("selected").innerHTML = "Selected: Maize";
}
function clickRice(){
	console.log('the rice was clicked');
	document.getElementById("selected").innerHTML = "Selected: Rice";
}
function clickCotton(){
	console.log('the cotton was clicked');
	document.getElementById("selected").innerHTML = "Selected: Cotton";
}
function clickWheat(){
	console.log('the wheat was clicked');
	document.getElementById("selected").innerHTML = "Selected: Wheat";
}
var globalCountry;
function changeCountry(){
	globalCountry = document.getElementById('country').value;
	console.log(globalCountry);
}
