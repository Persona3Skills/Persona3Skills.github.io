window.onload= function() {
	listSkills(filterSkills(""));
	document.getElementById('skill_input').addEventListener("input", function() {
		listSkills(
			filterSkills(document.getElementById('skill_input').value.toLowerCase())
		);
	});
};

function filterSkills(namePrefix) {
	return Object.entries(skills).filter(function(element) {
		return element[0].toLowerCase().startsWith(namePrefix);
	});
}

function listSkills(skills) {
	list = document.getElementById('skill_list');
	removeChildren(list);
	skills.forEach( function(element) {
		p = document.createElement('p');
		p.innerHTML = "<b>" + element[0] + "</b> - " + element[1];
		list.appendChild(p);
	});
}

function removeChildren(node) {
	while (node.firstChild) {
	    node.removeChild(node.firstChild);
	}
}
