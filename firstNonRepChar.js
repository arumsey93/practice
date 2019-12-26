function firstNonRepeatingLetter(str) {
	
	let obj = {};
	for(let i = 0; i < str.length; i++){
		obj[str[i].toLowerCase()]= obj[str[i].toLowerCase()] +1 || 1
	}
	console.log(obj);
	console.log(str);
	for(let k in obj){
		if(obj[k] === 1){
		  console.log(str.toLowerCase().indexOf(k));
			return str[str.toLowerCase().indexOf(k)]
		}
	}
	return "";
	
}
firstNonRepeatingLetter('MoOnmEn')