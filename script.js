const start = async () => {
    const output = await fetch('https://dog.ceo/api/breeds/list/all');
    const data  = await output.json();
    createBreedList(data.message);
}

start(); 

const sel = document.getElementById('sel');
function createBreedList(breed){
    sel.innerHTML = `<select onchange='getBreed(this.value)'>
    <option>Select a Dog Breed</option>
    ${Object.keys(breed).map(bre=>{

        return `<option>${bre}</option>`
    }).join('')}
    </select>`
}
async function getBreed(breed) {
    if (breed != 'Select a Dog Breed'){
        const rsult = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await rsult.json();

        const slide = document.getElementById('img');
        slide.src= data.message[0];
        console.log(data.message);
    }
}
