function getRandomDegree() {
    return (Math.random()-0.5) * 50;
}

function getRandomValue(){
    return (Math.random()-0.5) * 50
}

function title(){
    let name = "SUBEEN REGMI"
    for(let i=0; i<12; i++){
        if(name[i] == ' '){
            continue;
        }
        const D = document.createElement("div");
        const H = document.createElement("h1");
        H.addEventListener('mouseenter', function(){
            const r1 = getRandomValue();
            const r2 = getRandomValue();
            const d = getRandomDegree();
            H.style.transform = `translate(${r1}px, ${r2}px) rotate(${d}deg)`;
        });
        H.addEventListener('mouseleave', function(){
            H.style.transform = "none";
        });
        H.innerHTML = name[i];
        D.appendChild(H);
        document.body.appendChild(D);
    }
}
