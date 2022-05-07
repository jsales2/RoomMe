const searchBar = document.getElementById("searchBar");
const dormBuildings = ["commonwealth", "dominion", "piedmont", "tidewater", "blueridge", "sandbridge",
                       "amherst", "brunswick", "essex", "dickenson", "carroll", "franklin", "grayson",
					   "adams", "harrison", "jackson", "jefferson", "kennedy", "lincoln", "madison",
					   "monroe", "roosevelt", "taylor", "truman", "washington", "wilson", "easternshore",
					   "hamptonroads", "libertysquare", "northernneck", "potomacheights", "rogers",
					   "townhouses", "whitetop", "angelcabrera"];

searchBar.addEventListener("keyup", displayResults);

function displayResults(e){
	const search = e.target.value.toLowerCase();
	if(search == ""){
		for(let i = 0; i < dormBuildings.length; i++){
			let x = document.getElementById(dormBuildings[i]);
			x.style.display = "block";
		}
	}else{
		for(let i = 0; i < dormBuildings.length; i++){
			let x = document.getElementById(dormBuildings[i]);
			if(dormBuildings[i].includes(search))
				x.style.display = "block";
			else
				x.style.display = "none";
		}
	}
}