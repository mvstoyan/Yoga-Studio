
/*we will open soon*/
function studioCountdown() {
    const studioDate = new Date ('November 11, 2022 10:00');
    const now = new Date();
    const diff = studioDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('#days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('#hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('#minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('#seconds').textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector('#days').textContent = 0;
        document.querySelector('#hours').textContent = 0;
        document.querySelector('#minutes').textContent = 0;
        document.querySelector('#seconds').textContent = 0;
        clearInterval(timerID);
        studioYoga();
    }
}

let timerID = setInterval(studioCountdown, 1000);

function studioYoga() {
    const heading = document.querySelector('h2');
    heading.textContent = 'We are open';
    heading.classList.add('color');
}

const button = document.querySelector('#btn-studio');
button.addEventListener('click', function() {
    document.querySelector('#myAudio-studio').play();
})


/*Slide*/
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["1.webp", "2.webp", "3.webp", "4.webp"]

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector("#pictures").src = photos [i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector("#pictures").src = photos [i]
})

/*classes*/

const items = document.querySelectorAll('.item');


items.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        console.log("CLICKED!!!");
        removeFocus();
        item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})


//go to back

const myButton = document.querySelector("#myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
    } 
    else {
    myButton.style.display = "none";
    }
}

myButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})



/*test*/

const image = document.querySelector('#myImage');
const text = document.querySelector('#h2');

const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');
const buttonThree = document.querySelector('#three');

buttonOne.addEventListener("click", myLife);
buttonTwo.addEventListener("click", solid);
buttonThree.addEventListener("click", beginner);

/* It's my life */

function myLife() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/threejpeg.jpeg?v=1649990051943");
    text.textContent = "Do you want to sweat?";
    buttonOne.textContent = "Not really";
    buttonTwo.textContent = "Definitely";
    buttonThree.textContent = "No";

    buttonTwo.removeEventListener("click", solid);
    buttonOne.removeEventListener("click", myLife);
    buttonThree.removeEventListener("click", beginner);

    buttonOne.addEventListener('click', notReally);
    buttonTwo.addEventListener('click', definitely);
    buttonThree.addEventListener('click', no);

    console.log('Do you want to sweat?');
}


function notReally() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/thirteen.jpeg?v=1649990046677");
    text.textContent = "How does yoga fit your overall workout routine?";
    buttonOne.textContent = "Active recovery";
    buttonTwo.textContent = "Cross training";
    buttonThree.style = "display: none";

    buttonTwo.removeEventListener('click', definitely);
    buttonOne.removeEventListener('click', notReally);

    buttonOne.addEventListener('click', activeRecovery);
    buttonTwo.addEventListener('click', crossTraining);

    console.log('How does yoga fit your overall workout routine?');

}

function activeRecovery() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/ten.jpeg?v=1649990039256");
    text.textContent = "What sort of speed do you like?";
    buttonOne.textContent = "Holding each pose";
    buttonTwo.textContent = "I like to keep moving";
    buttonThree.style = "display: none";

    buttonOne.removeEventListener('click', activeRecovery);
    buttonTwo.removeEventListener('click', crossTraining);

    buttonOne.addEventListener('click', holdingEachPose);
    buttonTwo.addEventListener('click', keepMoving);

    console.log('What sort of speed do you like?');
}

function holdingEachPose() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/seven.jpeg?v=1649990011661");
    text.textContent = "Hatha - can be considered an umbrella term to describe many of the most common forms of yoga. With this type of yoga, you move your body slowly and deliberately into different poses that challenge your strength and flexibility, while at the same time focusing on relaxation and mindfulness.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Hatha');

}

function keepMoving() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/sixteen.jpeg?v=1649990031642");
    text.textContent = "Where do you like practicing?";
    buttonOne.textContent = "In a studio";
    buttonTwo.textContent = "Anywhere";
    buttonThree.style = "display: none";

    buttonOne.removeEventListener('click', holdingEachPose);
    buttonTwo.removeEventListener('click', keepMoving);

    buttonOne.addEventListener('click', studio);
    buttonTwo.addEventListener('click', anywhere);

    console.log('Where do you like practicing?');
}

function studio() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/six.jpeg?v=1649990024516");
    text.textContent = "Vinyasa - is a style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath. Commonly referred to as “flow” yoga, it is sometimes confused with “power yoga“. Vinyasa classes offer a variety of postures and no two classes are ever alike.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Vinyasa');
}

function anywhere() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/seventeen.jpeg?v=1649990018609");
    text.textContent = "Alternative yoga - to break away from your regular routine with a workout that's fun while still being plenty challenging, tri AcroYoga, aerial yoga or stand-up paddleboard yoga.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Alternative yoga');
}

function crossTraining() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/fifteen.jpeg?v=1649989958241");
    text.textContent = "Vinyasa - is a style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath. Commonly referred to as “flow” yoga, it is sometimes confused with “power yoga“. Vinyasa classes offer a variety of postures and no two classes are ever alike.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Vinyasa');
}


/*definitely*/

function definitely() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/one.webp?v=1649990005850");
    text.textContent = "Bikram - yoga is a type of hot yoga in which practitioners perform 26 asanas (poses) and two Pranayama breathing exercises in a room heated to at least 104 degrees Fahrenheit. The Bikram method is considered the original hot yoga practice, invented in the 1970s by yoga teacher Bikram Choudhury.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Bikram');

}

/*no */

function no() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/nine.jpeg?v=1649989990348");
    text.textContent = "What do you want to get from yoga?";
    buttonOne.textContent = "A ripped body";
    buttonTwo.textContent = "Balance mind and body";
    buttonThree.style = "display: none";

    buttonOne.removeEventListener('click', notReally);
    buttonTwo.removeEventListener('click', definitely);

    buttonOne.addEventListener('click', rippedBody);
    buttonTwo.addEventListener('click', balance);

    console.log('What do you want to get from yoga?');
}

function rippedBody() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/nineteen.jpeg?v=1649989998663");
    text.textContent = "Vinyasa - is a style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath. Commonly referred to as “flow” yoga, it is sometimes confused with “power yoga“. Vinyasa classes offer a variety of postures and no two classes are ever alike.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Vinyasa');
}

function balance() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/fourteen.webp?v=1649989983119");
    text.textContent = "How do you feel about gravity?";
    buttonOne.textContent = "Open to tricked-out stuff";
    buttonTwo.textContent = "On the ground, please";
    buttonThree.style = "display: none";

    buttonOne.removeEventListener('click', rippedBody);
    buttonTwo.removeEventListener('click', balance);

    buttonOne.addEventListener('click', trickedOut);
    buttonTwo.addEventListener('click', onTheGround);

    console.log('How do you feel about gravity?');
}

function trickedOut() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/four.jpeg?v=1649989976013");
    text.textContent = "Alternative yoga - to break away from your regular routine with a workout that's fun while still being plenty challenging, tri AcroYoga, aerial yoga or stand-up paddleboard yoga.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Alternative yoga');
}

function onTheGround() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/five.jpeg?v=1649989967318");
    text.textContent = "Yin - Yin Yoga is a slow-paced style of yoga as exercise, incorporating principles of traditional Chinese medicine, with asanas (postures) that are held for longer periods of time than in other styles. Advanced practitioners may stay in one asana for five minutes or more.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Yin');
}


/*Beginner*/
function beginner() {
image.setAttribute('src', 'https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/eleven.jpeg?v=1649989950017');
text.textContent = "What's your workout personality?";
buttonOne.textContent = "Pushing limits";
buttonTwo.textContent = "Pretty chill";
buttonThree.style = "display: none";

buttonTwo.removeEventListener("click", solid);
buttonOne.removeEventListener("click", myLife);

buttonOne.addEventListener('click', pushingLimits);
buttonTwo.addEventListener('click', prettyChill);

console.log("What's your workout personality?");

}



function pushingLimits() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/eighteen.jpeg?v=1649989941250");
    text.textContent = "Bikram - yoga is a type of hot yoga in which practitioners perform 26 asanas (poses) and two Pranayama breathing exercises in a room heated to at least 104 degrees Fahrenheit. The Bikram method is considered the original hot yoga practice, invented in the 1970s by yoga teacher Bikram Choudhury.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Bikram');
}


function prettyChill() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/eight.jpeg?v=1649989932155");
    text.textContent = "Yin - Yin Yoga is a slow-paced style of yoga as exercise, incorporating principles of traditional Chinese medicine, with asanas (postures) that are held for longer periods of time than in other styles. Advanced practitioners may stay in one asana for five minutes or more.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";

    console.log('Yin');
}

/* Solid */

function solid() {
    image.setAttribute("src", "https://cdn.glitch.global/424d3bfd-687b-4491-82aa-952cd2d0d4e0/twelve.jpeg?v=1649990059457");
    text.textContent = "Do you want to sweat?";
    buttonOne.textContent = "Not really";
    buttonTwo.textContent = "Definitely";
    buttonThree.style = "display: none";

    buttonTwo.removeEventListener("click", solid);
    buttonOne.removeEventListener("click", myLife);

    buttonOne.addEventListener('click', notReally);
    buttonTwo.addEventListener('click', definitely);

    console.log('Do you want to sweat?');

}





