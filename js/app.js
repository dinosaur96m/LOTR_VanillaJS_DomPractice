console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const section = document.createElement('section')
	section.id = "middle-earth"
	console.log(section)

	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++ ){
		
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement('article')

		//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.id = lands[i]
		//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement("h1")
		landName.textContent = lands[i]

		//we have an article, we have name, we tell our program to keep them togehter w/ appendChild
		landArticle.appendChild(landName)
		console.log(`name: ${landName} appended to article: ${landArticle}`)

		//   2d. appends each land to the middle-earth section
		section.appendChild(landArticle)

		
	}
	// 3. append the section to the body of the DOM.
	document.body.appendChild(section)
	
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

//WHY DOESNT THIS WORK!!!

function makeHobbits() {
	console.log('2: makeHobbits')

	// hint: get 'The-Shire' by using its id
	const theShire = document.getElementById('The-Shire')
	//we can also use querySelector!
	// hint: create a 'ul' outside the loop into which to append the 'li's
	const ulHobbits = document.createElement('ul')
	ulHobbits.id = 'hobbits'

	// display an `unordered list` of hobbits in the shire
	// give each hobbit a class of `hobbit`
	for (let i = 0; i < hobbits.length; i++) {
		//create li for each hobbit
		const liHobbit = document.createElement('li')
		//give each hoobbit a class of hobbit
		liHobbit.className = 'hobbit'
		liHobbit.textContent = hobbits[i]
		//append each hobbit li to hobbits ul
		ulHobbits.appendChild(liHobbit)
	}
	//attach hobbits you ul to the shire
	theShire.appendChild(ulHobbits)


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRingDiv = document.createElement('div')
		oneRingDiv.id = 'the-ring'

	// give the div a class of `'magic-imbued-jewelry'`
	oneRingDiv.className = 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
		//find the ul where frodo lives
		const ulHobbits = document.querySelector('ul')
		//figure out which li frodo is
		const liFrodo = ulHobbits.children[0]
		
		//attach the ring
		liFrodo.appendChild(oneRingDiv)
		
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const mordor = document.getElementById('Mordor')
	const ulBaddies = document.createElement('ul')
	ulBaddies.id = 'baddies'

	for (let i = 0; i < baddies.length; i++) {
		// give each of the baddies a class of "baddy"
		const liBaddy = document.createElement('li')
		liBaddy.className = 'baddy'
		liBaddy.textContent = baddies[i]
		ulBaddies.appendChild(liBaddy)

	}
		

	// remember to append them to Mordor
	mordor.appendChild(ulBaddies)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const rivendell = document.getElementById('Rivendell')
	const aside = document.createElement('aside')
	// insert your aside as a child element of `rivendell`
	rivendell.appendChild(aside)

	// put an `unordered list` of the `'buddies'` in the aside
	//const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']
	const ulBuddies = document.createElement('ul')
	ulBuddies.id = 'buddies'
	//append ul to aside
	aside.appendChild(ulBuddies)

	for (i = 0; i < buddies.length; i++) {
		// give each of the buddies a class of "buddy"
		const liBuddy = document.createElement('li')
		liBuddy.className = 'buddy'
		liBuddy.textContent = buddies[i]
		ulBuddies.appendChild(liBuddy)
	}

	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const hobbits = document.getElementById('hobbits')
	const shire = document.getElementById('The-Shire')
	const caravan = shire.removeChild(hobbits)
	document.getElementById('Rivendell').appendChild(caravan)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	const buddyList = document.getElementsByClassName('buddy')
	console.log(buddyList[3])
	buddyList[3].textContent = 'Aragorn'

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFellowship = document.createElement('div')
	theFellowship.id = 'the-fellowship'
	document.getElementById('Rivendell').appendChild(theFellowship)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const hobbits = document.getElementsByClassName('hobbit')
	for (i = 0; i < hobbits.length; i++) {
		theFellowship.appendChild(hobbits[i])
		alert(`${hobbits[i].textContent} has joined your party`)
	}
	const buddies = document.getElementsByClassName('buddy')
	for (i = 0; i < buddies.length; i++) {
		theFellowship.appendChild(buddies[i])
		alert(`${buddies[i].textContent} has joined your party`)
	}

	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const buds = document.getElementsByClassName('buddy')
	buds[2].textContent = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	buds[2].style.backgroundColor = 'white'
	buds[2].style.border = '3px solid grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The horn of Gondor has been blown!')
	// Boromir's been killed by the Uruk-hai!
	alert(`Boromir's been killed by the Uruk-hai`)
	// Remove `Boromir` from the Fellowship
	const buds = document.getElementsByClassName('buddy')
	const boromir = buds[3]
	document.getElementById('the-fellowship').removeChild(boromir)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const hobbits = document.getElementsByClassName('hobbit')
	frodo = hobbits[3]
	sam = hobbits[0]
	const frodoOnFoot = document.getElementById('the-fellowship').removeChild(frodo)
	const samOnFoot = document.getElementById('hobbits').removeChild(sam)
	document.getElementById('Mordor').appendChild(frodoOnFoot)
	document.getElementById('Mordor').appendChild(samOnFoot)

	
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(mountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div')
	gollum.id = 'gollum'
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(gollum)

	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.getElementById('the-ring')
	const hobbits = document.getElementsByClassName('hobbit')
	const thePrecious = hobbits[2].removeChild(theRing)
	gollum.appendChild(thePrecious)
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const gollum = document.getElementById('gollum')
	const theRing = document.getElementById('the-ring')
	const mordor = document.getElementById('Mordor')
	gollum.removeChild(theRing)
	mordor.removeChild(gollum)

	// Move all the `hobbits` back to `the shire`
	const hobbits = document.getElementsByClassName('hobbit')
	console.log(`${hobbits[0].textContent}, ${hobbits[1].textContent}, ${hobbits[2].textContent}, ${hobbits[3].textContent}`)
	const pippin = hobbits[0]
	const merry = hobbits[1]
	const frodo = hobbits[2]
	const sam = hobbits[3]
	const shire = document.getElementById('The-Shire')

	const pippinOnFoot = document.getElementById('hobbits').removeChild(pippin)
	shire.appendChild(pippinOnFoot)
	const merryOnFoot = document.getElementById('the-fellowship').removeChild(merry)
	shire.appendChild(merryOnFoot)
	const frodoOnFoot = mordor.removeChild(frodo)
	shire.appendChild(frodoOnFoot)
	const samOnFoot = mordor.removeChild(sam)
	shire.appendChild(samOnFoot)

	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
