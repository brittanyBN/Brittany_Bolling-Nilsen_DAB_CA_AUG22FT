async function adoptAnimal(animalId, userId, adopted, url) {
    const response = await fetch(`${url}/${animalId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId,
            adopted: true
        })
    });

    if (response.ok) {
        location.reload();
    } else {
        console.log('Failed to update adoption status');
    }
}


function deleteAnimal(id){
}

function updateSpecies(id){
    newSpecies = prompt("Update species")

}

function deleteSpecies(id){
}

function updateTemperament(id){
    newTemperament = prompt("Update temperament")
}

function deleteTemperament(id){
}