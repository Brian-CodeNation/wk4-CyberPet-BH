// creating global variables for pet and the interval
let pet = null;
let interval = null;
let imgs = document.querySelectorAll('.imgs')

// this is the generic cyberpet class that has properties and methods that can be
// applied to any animal
class cyberPet {
    constructor(name) {
        this.name = name;
        this.hunger = 100;
        this.thirsty = 100;
        this.health = 100;
    }


    eat() {
        this.hunger = (this.hunger + 10 >= 100) ? 100 : this.hunger + 10; //ternary oporator
        this.thirsty -= 7;
        this.health = (this.health + 15 >= 100) ? 100 : this.health + 15;

    }

    drink() {
        this.health = (this.health + 10 >= 100) ? 100 : this.health + 10;
        this.thirsty = (this.thirsty + 15 >= 100) ? 100 : this.thirsty + 15;
    }

}
// using the cyberpet class as a foundation the Dog class adds more specific
// methods on top of what the cyberpet class has made
class Dog extends cyberPet {
    constructor(name) {
        // the super method gets all the properties from the cyberpet class and
        // brings them into the dog class e.g. health, hunger, thirsty etc...
        super(name)
        this.happy = 100;
    }


    playFetch() {
        this.happy += 20;
        this.thirsty -= 10;
        this.hunger -= 10;
    }
}

// let newPet = new Dog("Doug")
// newPet.playFetch();
// newPet.drink()

// console.log(newPet)

// cat builds from the cyberpet again adding more relevant data for a cat as well
// as the properties from the cyberpet class
class Cat extends cyberPet {
    constructor(name) {
        super(name)
        this.lazy = 100;
    }

    groom() {
        this.lazy += 10;
        this.hunger -= 5;
        this.thirsty -= 5;
    }
}

class Rabbit extends cyberPet {
    constructor(name) {
        super(name)
        this.digging = 100;
    }

    adventuring() {
        this.digging += 10;
        this.hunger -= 5;
        this.thirsty -= 5;
    }
}
// create a new Cat class whilst passing it it's names
// let newwPet = new Cat("Whiskers")
// create a new Cat class whilst passing it it's names
// newwPet.groom()
// newwPet.drink()
// logging the variable with the cat class to see it's new stats
// console.log(newwPet)


// function to update stats
const updateStats = () => {
    document.getElementById('hungerStat').textContent = `Hunger: ${pet.hunger}`;
    document.getElementById('thirstyStat').textContent = `Thirsty: ${pet.thirsty}`;
    document.getElementById('healthStat').textContent = `Health: ${pet.health}`;
    document.getElementById('hunger').value = pet.hunger
    document.getElementById('thirst').value = pet.thirsty
    document.getElementById('health').value = pet.health
}


// when feed button is clicked run the eat method from the pet class and update stats
document.querySelector('#feedBtn').addEventListener('click', () => {
    pet.eat();
    updateStats();
})

document.querySelector('#drinkBtn').addEventListener('click', () => {
    pet.drink();
    updateStats();
})

document.querySelectorAll('.choice').forEach((element) => { //checking each option, cat dog rabbit. //element means one html element at a time
    element.addEventListener('change', () => { //adding event listneer for each individual option

        document.querySelectorAll('.choice').forEach((element) => { //checking and changing all of the images
            const animalImgs = document.getElementById(element.value)
            animalImgs.style.display = 'none'

            if (element.checked) {
                animalImgs.style.display = 'block'
            }
            //             let cat = document.getElementById('cat')
            //             if (element.checked == cat) {
            //                 animalImgs.style.
            // }

        })

    })
})

// gets the form and adds the event listener to it that runs on the forms submit
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault() //stops the form directing to another page 
    let chosenPet = '';
    // console.log(chosenPet)
    // checking the radio buttons to see what the user selected and store 
    // selected value in chosenPet variable
    document.querySelectorAll('.choice').forEach((element) => {
        if (element.checked) {
            // storing the users choice in variable
            chosenPet = element.value
        }
    })

    // get the input name value
    let petName = document.getElementById('petName').value;

    // create dog or cat based on user choice and pass typed name to class
    if (chosenPet === 'dog') {
        //create dog
        pet = new Dog(petName)
    } else if (chosenPet === 'cat') {
        //create cat
        pet = new Cat(petName)
    } else if (chosenPet === 'rabbit') {
        //create rabbit
        pet = new Rabbit(petName)
    }
    // console.log(petName)


    // display pet name
    document.getElementById('displayPetName').textContent = pet.name;

    // start the interval to reduce stats every second
    interval = setInterval(() => {
        pet.thirsty -= 10;
        pet.hunger -= 10;
        pet.health -= 20;

        // runs function which updates stats using JS DOM
        updateStats();

        // if stat hits 0 stop the interval and display message
        if (pet.health <= 0 || pet.hunger <= 0 || pet.thirsty <= 0) {
            clearInterval(interval)
            document.getElementById('displayPetName').textContent = `${pet.name} died`;
            displayPetName.style.color = 'red'
            document.getElementById('resetBtn').addEventListener('click', () => {
                window.location.reload()
            })
            resetBtn.style.display = 'block'


        }
    }, 1000);

    // hide the form and show the pet information section
    document.getElementById('petChoiceWrapper').style.display = 'none';
    document.getElementById('statsWrapper').style.display = 'flex';



});//closing bracket for function for dumbasses that cant see

// if (chosenPet === Cat && pet.heaalth <= 90) {
//     imgs.src = "CyberPet/petGifs/catsad.gif"
// }




// const igs = getElementById("awa")

// function statChanges() {
//     if (Cat.health <= 50) {
//         igs.src = "CyberPet/petGifs/catsad.gif"
//         statChanges()
//     }

// }
// statChanges()

// submitBtn.addEventListener('click', () => {
//     console.log('clicked')
//     document.querySelectorAll('.choice').forEach((element) => {
//         console.log(element.checked) //this then would console log the different elements
//     }) //this would return an array of all the classes with choice in it

// })//the checked property checks if the radio buttons have been checked

//ENTER KEY
// document.addEventListener('keypress', (event) => {
//     if (event.code === "Enter") {
//         //handle pet choice
//     }
//     console.log(event.code)
//})