let timer;
const slide = document.getElementById('slide');

    const start = async () => {

        try{
        const output = await fetch('https://dog.ceo/api/breeds/list/all');
        const data  = await output.json();
        createBreedList(data.message);
   
} catch (error) {
    console.log(error);
    slide.innerHTML = `<h1 style="color:white;">Sorry check your internet connection</h1>`
}

    }

     start(); 


const sel = document.getElementById('sel');
function createBreedList(breed){
    sel.innerHTML = `<select onchange='getBreed(this.value)' class="selec">
    <option>Select a Dog Breed</option>
    ${Object.keys(breed).map(bre=>{

        return `<option>${bre}</option>`
    }).join('')}
    </select>`
}
let target = 0;
async function getBreed(breed) {
    if (breed != 'Select a Dog Breed'){
        const rsult = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await rsult.json();

        if(timer){
            stopSlide();
        }
       
        changeImage(data);
        
        console.log(data.message);
    }
}

function changeImage(gre){
    timer = setInterval(() => {
        if(target > gre.message.length){
            target = 0;
        }else{
            slide.style.backgroundImage= `url(${gre.message[target]})`;
            target++;
        }
    }, 3000);
}


function stopSlide() {
    clearInterval(timer)
}