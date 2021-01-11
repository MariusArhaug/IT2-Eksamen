window.onload = start;

function start() {

}
//funksjon som sender bruker gjem når de trykker på header
function home() {
	var div = document.getElementsByClassName("oppgave-container");
	for (var i = 0; i < div.length; i++) {
		div[i].style.display = "none";
	}
	displayButtons("flex");
	resetAll();

}

//avhengig av hva verdi index er, displey ulike sider
function displayContent(index) {
	var div = document.getElementsByClassName("oppgave-container");
	for (var i = 0; i < div.length; i++) {
		div[i].style.display = "none";
	}

	div[index].style.display = "block";
	displayButtons("none");
}

//samme for knapper
function displayButtons(styleName) {
	document.getElementsByClassName('menu-container')[0].style.display = styleName;
}


//sjekker hvilke element som skal resettes ettersom ikke alle oppgaver er "definert" samtidig //rakk ikke mer
function resetAll() {		
	if(document.getElementsByClassName('oppgave1-container')[0] != undefined) {
		//resetOppgave1();
	}
	
	if(document.getElementsByClassName('oppgave2-container')[0] != undefined) {
		//resetOppgave2();
	}

	if(document.getElementsByClassName('oppgave3-container')[0] != undefined) {
		//resetOppgave3();
	}
}

//----------------Oppgave 1----------------//

//ulik info om bilde
const pictureInfo = [];
	pictureInfo[0] = ['JPG, på grunn av det er det skarpeste bildetformatet som gir best bilder, i dette tilfellet er bildet fullstendig uredigert med f.eks naturen i bakgrunnen',''];
	pictureInfo[1] = ['PNG; på grunn av at vi ikke vil ha med det "rutede" mønsteret som er i bakgrunnen, når vi bruker PNG kan bildet legges over andre bakgrunner', ''];
	pictureInfo[2] = ['Vektor graff, på grunn av at det kan skaleres til enhver skala uten at den minste skarpet og blir uklar, i tilegg kan du legge det over andre bakgrunner',''];


function displayInnerContent(index) {	//har tre indre knapper som skal sjules og vises
	var divBtn = document.getElementsByClassName('inner-button'); 
	for (var i = 0; i < divBtn.length; i++) {
		divBtn[i].style.display = "none";
	}

	divBtn[index].style.display = "block";
	document.getElementsByClassName('reset-container')[0].style.display = "block";
	inserPictureInfo(index);
}


function resetInnerButtons() { //gjør alle knapper synlig igjen og tar vekk reset knapp
	let divBtn = document.getElementsByClassName('inner-button')
	for (var i = 0; i < divBtn.length; i++) {
		divBtn[i].style.display = "block"
	}
	document.getElementsByClassName('picture-subtext')[0].style.display = "none";
	document.getElementsByClassName('reset-container')[0].style.display = "none";
	return true;
}


function inserPictureInfo(index) {	//legger til info
	document.getElementsByClassName('picture-subtext')[0].style.display = "block";
	document.getElementById('filformat-info').innerHTML = pictureInfo[index][0];	
	document.getElementById('datagrafikk-info').innerHTML = pictureInfo[index][1];
} 


//-------------------------Oppgave 2-------------------------//

function addEvent() {
	document.getElementsByClassName('height')[0].addEventListener('keyup', e => {
	e.preventDefault();

	if(e.keyCode == 13) {
		document.getElementById('btn-oppgave2').click();
	}
	//gjør slik at når du presser enter på nederste input på oppgave 2 så kjører den funksjonen
	})
}


const rectanglePictures = ['staende.jpg','liggende.jpg','kvadratisk.jpg'];

function calculateArea() {	//henter verdier
	let widthSize = parseInt(document.getElementsByClassName('width')[0].value,10)
	let heightSize = parseInt(document.getElementsByClassName('height')[0].value,10)

	if (widthSize > 1920) { //maks bredde
		alert("Error, bredden du har valgt er for stor, den må være mindre eller lik 1920px!")
		return false;	//avslutt funksjon
	}

	let pixelArea = widthSize*heightSize;
	let MegapixelArea = pixelArea/1000000;

	//skriver ut
	document.getElementById('pixelInput').innerHTML = pixelArea;
	document.getElementById('MegaPixelInput').innerHTML = MegapixelArea;

	//velg riktig bilde
	selectCorrectPicture(widthSize,heightSize); 
}

	let source = 'comp/'; 	//dersom man skulle ha endret vedlegg mappe så trenger man bare å forandre denne
function selectCorrectPicture(width,height) { //sjekker forhold mellom bredde og lengde
	var img = document.getElementById('areaPicture');

	if (height > width) {  //stående
		img.src = source + rectanglePictures[0];
	}

	if (width > height) {  //liggende
		img.src = source + rectanglePictures[1];
	}

	if (height == width) { //kvadrat
		img.src = source + rectanglePictures[2]
	}

	img.style.display = "block";
}


//------------------------------Oppgave 3--------------------//



//array laget lik som tabellen for å holde orden
const hytteInfo = [];
	hytteInfo[0] = ['Velg hytte' ,'Gjendesheim','Glitterheim','Memurubu','Gjendebu','Leirvassbu','Spiterstulen','Olavsbu'];
	hytteInfo[1] = ['Gjendesheim', '-'		  , 22			, 14	   , '-'	  , '-'		   , '-'		  ,'-'		];
	hytteInfo[2] = ['Glitterheim', 22		  , '-'			, 18	   , '-'	  , '-'		   , 17			  ,'-'		];
	hytteInfo[3] = ['Memurubu'   , 14		  , 18			, '-'	   , 10		  , '-'		   , '-'		  ,'-'		];
	hytteInfo[4] = ['Gjendebu'   , '-'		  , '-'			, 10	   , '-'	  , 19		   , 24			  ,16		];
	hytteInfo[5] = ['Leirvassbu' , '-'		  , '-'			, '-'	   , 19		  , '-'		   , 15			  ,11		];
	hytteInfo[6] = ['Spiterstulen','-'		  , 17			, '-'	   , 24		  , 15		   , '-'		  ,'-'		];
	hytteInfo[7] = ['Olavsbu'    ,'-'		  , '-'			, '-'      , 16		  , 11		   , '-'		  ,'-'		];
	
console.table(hytteInfo); //fin måte å logge tabellen direekte



function updateTable(selectId,array) {		//legger til verdi i tabell og select når oppgave 2 knappen er trykket
	createTableHeader('table',array[0]);

	for (let i = 1; i < array.length; i++) {
		createTableRow('table', array[i]);

	}
	updateOptions(selectId, array);
}

function updateOptions(selectId, array) {
	createOptions(selectId,array);
}

//lager tabell overskrift

function createTableHeader(idName,innerArray) {
	let table = document.getElementById(idName);
	var row = document.createElement('tr');

	for (var i = 0; i < innerArray.length; i++) {
		var th = document.createElement('th')
		th.innerHTML = innerArray[i]
		row.appendChild(th);
	}
	table.appendChild(row);
}

//lager tabell

function createTableRow(idName,innerArray) {
	let table = document.getElementById(idName);
	var row = document.createElement('tr');

	for (var i = 0; i < innerArray.length; i++) {
		var td = document.createElement('td');
		td.className = 'tableIndex';
		td.innerHTML = innerArray[i];
		row.appendChild(td);
	}

	table.appendChild(row);
}

//lager option tags
function createOptions(idName, array) {
	let selectTag = document.getElementById(idName); 
	for (var i = 0; i < array.length; i++) {
		option = document.createElement("option");
		option.value = i;
		option.innerHTML = array[i][0];
		selectTag.appendChild(option);
	}
}

//fjerner option tags
function removeOptions(idName) {
	let selectTag = document.getElementById(idName);

	selectTag.innerHTML = '';
}

//bytter select optin avhengig av hva brukeren har valgt i sin selectTag
function displayCabins(index) {
	removeOptions('otherCabins');

	// array loop method 
	hytteInfo.forEach((innerArray, i) => {	//looper igjennom indre array til hytteinfo og i som øker for hver loop
		
		let selectTag = document.getElementById('otherCabins'); 
		
		let option = document.createElement('option'); 
		option.value = i;
		option.className = 'otherOptions';
		option.innerHTML = innerArray[0];
		selectTag.appendChild(option);
		
	});
	
	let option = document.getElementsByClassName('otherOptions');
	
	for (var i = 0; i < option.length; i++) {
		if(option[i].innerHTML == hytteInfo[index][0]) {
			option[i].innerHTML = "--------"
			option[i].value = -1;
		}
	}
}

function updateCurrentCabin(index) {
	removeOptions('homeCabin');
	displayCabins(index)

	let selectTag = document.getElementById('homeCabin');

	let option = document.createElement('option');
	option.value = index;
	option.innerHTML = hytteInfo[index][0]

	selectTag.appendChild(option);
}

	//array som holder på alle avstander
	const distance = [];
function addDestination() {
	let startCabinIndex = document.getElementById('homeCabin').value
	let endCabinIndex = document.getElementById('otherCabins').value
	//sjekker ulike sikkerhetsverdier
	if(startCabinIndex == 0) {
		alert('Du må velge din egen hytte!');
		return false;
	}startCabinIndex

	if (endCabinIndex <= 0) {
		alert('Du må velge en annen hytte!');
		return false;
	}
	//finner distansen mellom
	let distanceBetween = hytteInfo[startCabinIndex][endCabinIndex];

	//sjekker om det finnes en vei eller ikke
	if (distanceBetween == '-') {
		alert(`Det finnes ingen vei fra ${hytteInfo[startCabinIndex][0]} og ${hytteInfo[endCabinIndex][0]}!`);
		return false;
	}
	//om funksjonen ikke er stoppet ennå betyr det at dataen er brukbar
	distance.push(distanceBetween);

	//forvandler om til tekst 
	let string = `${hytteInfo[startCabinIndex][0]} --- ${hytteInfo[endCabinIndex][0]}`;
	createList(string)
	updateCurrentCabin(endCabinIndex);
	showUndoContainer();
}

	//regner ut totale avstand
	let unit = 'km';
function totalLength() {
	let total = distance.reduce((ttl, distance) =>  ttl += distance);
	document.getElementById('totalLenghtOutput').innerHTML = total + unit;
}

	//lager en liste med alle turene fra starthytte til sluthytte
function createList(string) {
	let ol = document.getElementById('cabinList');
	let li = document.createElement('li');
	li.innerHTML = string;
	li.className = 'listTags';

	ol.appendChild(li);
}

	//når brukeren har langt inn første li i listen, hvis angre skjemaet. 
function showUndoContainer() {
	document.getElementsByClassName('inner-form-container')[1].style.visibility = "visible";
	addDirectionChanges();
}

//legger til options i bytt-select feltet
function addDirectionChanges() {
	let listIndex = document.getElementById('listSelect');
	removeOptions('listSelect');
	let numberOfTrips = document.getElementsByClassName('listTags');
	for (var i = 0; i < numberOfTrips.length; i++) {
		option = document.createElement('option');
		option.value = i;
		option.innerHTML = i+1; //dataen teller fra 0,1,2, mens vi mennesker teller fra 1,2,3.. :)

		listIndex.appendChild(option);
	}	
}

	//fjerner fra ol listen
function removeSelectedList() {
	let listValue = document.getElementById('listSelect').value;
	console.log(listValue);
	var li = document.getElementsByClassName('listTags');
	
	let lastLocation = li[listValue].innerHTML.split('---')[0];
	console.log(lastLocation);
	//fjerner alle listtags som kommer etter den brukeren hadde lyst å forandre
	for (var i = listValue; i < distance.length; i++) {
		
		li[i].remove();			
	} 
	//fjerner også disse distansene, siden de ikke er med lengre
	distance.splice(listValue,li.length);
	addDirectionChanges();
	removeOptions('homeCabin');

	let selectTag = document.getElementById('homeCabin');
	let option = document.createElement('option');
		option.innerHTML = lastLocation;
		option.value = listValue+1;

	selectTag.appendChild(option);
	//resetter avstanden
	document.getElementById('totalLenghtOutput').innerHTML = "";

}

