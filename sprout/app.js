function menu(){
	window.location.href = "menu.html";
}

var globalCountry;
function load(){
	var country = "India";
	globalCountry = localStorage.getItem("globalCountryStorage");
	console.log("GLobal country is " + globalCountry);
	if(globalCountry == "Brazil" || globalCountry == "Malawai" || globalCountry == "India"){
		country = globalCountry;
	} 

	var mydata = JSON.parse(data);
	var acres = Number(document.getElementById('acres').value);
	var revenue = Number(document.getElementById('revenue').value);
	var noWorkers = Number(document.getElementById('noWorkers').value);
	
	var expense;
	var income;
	var fp;
	if(country == "Brazil"){
		fp = .16;
		expense = (29 * acres) + (10.3 * acres) + (440 * noWorkers) + 1130;
		income = fp * acres * 345 + .63 * expense + 700;
	}else if(country == "Malawai"){
		fp = .24;
		expense = (.13 * acres) + (10.3 * acres) + (86 * noWorkers) + 1130;
		income = fp * acres * 100 + 0.66 * expense + 700;
	}else if(country == "India"){
		fp = .16;
		expense = (15 * acres) + (10.3 * acres) + (217 * noWorkers) + 1130;
		income = fp * acres * 1850 + .58 * expense + 700;
	}
	var newRevenue = income - expense;

	document.getElementById("pricePerLb").innerHTML = "Fair Price: " + fp.toFixed(2) + "/lb";
	document.getElementById("expenseId").innerHTML = "Expenses: " + expense.toFixed(2);
	document.getElementById("incomeId").innerHTML = "Income: " + income.toFixed(2);
	document.getElementById("revenueId").innerHTML = "Possible Revenue: " + newRevenue.toFixed(2);
	document.getElementById("revenueGainId").innerHTML = "Revenue Gain: " + (newRevenue - revenue).toFixed(2);
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
function changeCountry(){
	globalCountry = document.getElementById('country').value;
	localStorage.setItem("globalCountryStorage", globalCountry);
	console.log(globalCountry);
}
