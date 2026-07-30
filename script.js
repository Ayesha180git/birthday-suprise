// ==========================
// Floating Hearts
// ==========================

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,500);

// ==========================
// Screen Navigation
// ==========================

const screens=document.querySelectorAll(".screen");

let current=0;

function showScreen(index){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    screens[index].classList.add("active");

}

document.getElementById("startBtn").onclick=()=>{

    current=1;

    showScreen(current);

};

document.querySelectorAll(".nextBtn").forEach(btn=>{

    btn.onclick=()=>{

        current++;

        showScreen(current);

    };

});

document.getElementById("giftJourneyBtn").onclick=()=>{

    alert("🎁 Module 3 will open the Luxury Golden Door.");

};
// ==========================
// Golden Door
// ==========================

const giftJourneyBtn =
document.getElementById("giftJourneyBtn");

const goldDoor =
document.getElementById("goldDoor");

giftJourneyBtn.onclick=()=>{

    current=5;

    showScreen(current);

};

goldDoor.onclick=()=>{

    goldDoor.classList.add("door-open");

    setTimeout(()=>{

        current=6;

        showScreen(current);

    },1200);

};

document.getElementById("openGiftBtn").onclick=()=>{

    alert("🎁 Module 4 will begin the magical Bow & Arrow experience.");

};
// ==========================
// Open Bow Screen
// ==========================

const openGiftBtn =
document.getElementById("openGiftBtn");

openGiftBtn.onclick=()=>{

    current=7;

    showScreen(current);

};

// ==========================
// Bow Animation
// ==========================

const shootBtn=
document.getElementById("shootBtn");

const arrow=
document.getElementById("arrow");

const bow=
document.getElementById("bow");

shootBtn.onclick=()=>{

    bow.style.transform="translateX(-20px)";

    setTimeout(()=>{

        bow.style.transform="translateX(0)";

        arrow.style.left="82%";

    },500);

};
// ==========================
// Heart Hit
// ==========================

const heartTarget =
document.getElementById("heartTarget");

arrow.addEventListener("transitionend",()=>{

    heartTarget.style.transform="scale(1.4)";
    heartTarget.style.filter="drop-shadow(0 0 35px gold)";

    setTimeout(()=>{

        current = 8;

        showScreen(current);

    },1000);

});
// ==========================
// Open Letter
// ==========================

const revealBtn =
document.getElementById("revealBtn");

const letterContent =
document.getElementById("letterContent");

const galleryBtn =
document.getElementById("galleryBtn");

// Open Letter

envelope.onclick=()=>{

    current = 9;

    showScreen(current);

};

// Reveal Name

revealBtn.onclick=()=>{

    revealBtn.style.display="none";

    letterContent.style.display="block";

};

// Go To Gallery

galleryBtn.onclick=()=>{

    alert("📸 Module 7 will open the Photo Gallery.");

};
// ==========================
// Gallery
// ==========================

galleryBtn.onclick=()=>{

    current=10;

    showScreen(current);

    setTimeout(()=>{

        document
        .getElementById("photo1")
        .classList.add("showPhoto");

    },500);

    setTimeout(()=>{

        document
        .getElementById("photo2")
        .classList.add("showPhoto");

    },1500);

    setTimeout(()=>{

        document
        .getElementById("photo3")
        .classList.add("showPhoto");

    },2500);

};

// Celebration

celebrateBtn.onclick=()=>{

    alert("🎂 Module 8 will open the Birthday Celebration.");

};
// ==========================
// Celebration Screen
// ==========================

const celebrateBtn =
document.getElementById("celebrateBtn");

const replayBtn =
document.getElementById("replayBtn");

// Open Celebration

celebrateBtn.onclick=()=>{

current=11;

showScreen(current);

};

// Replay

replayBtn.onclick=()=>{

location.reload();

};
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔇 Stop Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Music";
    }
});

