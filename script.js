const texts = [
    "Web Developer",
    "Web Designer",
    "Game Developer",
    "Game Designer",
    "Graphics Programmer" 
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
        
}

window.onload = typeWriter

// Smooth Scroll Function
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Highlight the active link
        document.querySelectorAll('nav a').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

function selectProject(imageSrc, title, description) {
    document.getElementById('main-project-image').src = imageSrc;
    document.getElementById('main-project-title').textContent = title;
    document.getElementById('main-project-description').textContent = description;
  }

