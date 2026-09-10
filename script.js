/* =================================
   START SURPRISE
================================= */

function startSurprise() {

    document.getElementById("welcomeScreen").style.display = "none";

    document.getElementById("countdownScreen").style.display = "block";

    let count = 3;

    const countdown =
        document.getElementById("countdown");


    const timer = setInterval(function () {

        count--;

        if (count > 0) {

            countdown.innerText = count;

        } else {

            clearInterval(timer);

            document.getElementById("countdownScreen").style.display = "none";

            document.getElementById("birthdayScreen").style.display = "block";

        }

    }, 1000);
}


/* =================================
   BIRTHDAY → PHOTO
================================= */

function nextSurprise() {

    document.getElementById("birthdayScreen").style.display = "none";

    document.getElementById("photoScreen").style.display = "block";

}


/* =================================
   PHOTO → MESSAGE
================================= */

function showMessage() {

    document.getElementById("photoScreen").style.display = "none";

    document.getElementById("messageScreen").style.display = "block";


    const message =
        "Happy Birthday! ❤️ I hope your day is filled with happiness, laughter and beautiful moments. You deserve all the wonderful things in the world. Keep smiling and enjoy your special day! 🎂✨";


    let i = 0;

    const text =
        document.getElementById("typedMessage");


    text.innerHTML = "";


    function typeWriter() {

        if (i < message.length) {

            text.innerHTML += message.charAt(i);

            i++;

            setTimeout(typeWriter, 45);

        }

    }


    typeWriter();

}


/* =================================
   MESSAGE → FIVE PHOTOS
================================= */

function showMemories() {

    document.getElementById("messageScreen").style.display = "none";

    document.getElementById("memoriesScreen").style.display = "block";

}


/* =================================
   FIVE PHOTO GALLERY
================================= */

let currentMemory = 1;


const memoryCaptions = [

    "It's the little things that make you special. ❤️",

    "Some moments just make me smile. 😊",

    "Not every special moment needs a picture of us. ✨",

    "Sometimes a simple moment is enough. 🤍",

    "And somehow, all these little things remind me of you. 💕"

];


function nextMemory() {

    currentMemory++;


    if (currentMemory <= 5) {

        const image =
            document.getElementById("memoryImage");


        const number =
            document.getElementById("memoryNumber");


        const caption =
            document.getElementById("memoryCaption");


        image.style.opacity = "0";


        setTimeout(function () {

            image.src =
                "memory" +
                currentMemory +
                ".jpg";


            number.innerText =
                currentMemory;


            caption.innerText =
                memoryCaptions[currentMemory - 1];


            image.style.opacity = "1";

        }, 250);


    } else {

        document.getElementById("memoriesScreen").style.display = "none";

        document.getElementById("finalScreen").style.display = "block";

    }

}


/* =================================
   OPEN FINAL GIFT
================================= */

function openGift() {

    const gift =
        document.querySelector(".gift-box");


    gift.innerHTML = "🎉";


    gift.classList.add("gift-open");


    setTimeout(function () {

        document
            .getElementById("finalMessage")
            .classList.remove("hidden");


        createHearts();

    }, 600);

}


/* =================================
   FLOATING HEARTS
================================= */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        heart.innerHTML =
            "❤️";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 4000);

    }

}


/* =================================
   REPLAY SURPRISE
================================= */

function restartSurprise() {

    location.reload();

}