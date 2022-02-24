const searchBar = document.getElementById("searchBar");
const dormBuildings = ["commonwealth", "dominion", "piedmont", "tidewater", "blue ridge", "sandbridge",
                       "amherst", "brunswick", "essex", "dickenson", "carroll", "franklin", "grayson",
					   "adams", "harrison", "jackson", "jefferson", "kennedy", "lincoln", "madison",
					   "monroe", "roosevelt", "taylor", "truman", "washington", "wilson", "eastern shore",
					   "hampton roads", "liberty square", "northern neck", "potomac heights", "rogers",
					   "townhouses", "whitetop", "angel cabrera"];

searchBar.addEventListener("keyup", displayResults);

function displayResults(e){
	const search = e.target.value.toLowerCase();
	if(search === ""){
		for(let i = 0; i < dormBuildings.length; i++){
			let x = document.getElementById(dormBuildings[i]);
			x.style.display = "none";
		}
	}else{
		for(let i = 0; i < dormBuildings.length; i++){
			let x = document.getElementById(dormBuildings[i]);
			if(dormBuildings[i].includes(search))
				x.style.display = "none";
			else
				x.style.display = "block";
		}
	}
}