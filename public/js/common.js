async function adoptAnimal(id){
    const response = await fetch(`/animals/${id}` , {
    method: 'PATCH',
        headers: {
        'Content-type': 'application/json'
    },
});
if (response.status === 401) {
    alert("Animal already adopted")
}
const resData = 'Made adoption';
location.reload()
return resData;
}

function deleteAnimal(id){
}

async function addSpecies(url) {
    let newSpecies = prompt("Please provide a new species.")
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: newSpecies
        })
    });
    if (!response.ok) {
        throw new Error('Failed to create species');
    }
    const resData = await response.json();
    location.reload()
    return resData;
}


function updateSpecies(id){
    newSpecies = prompt("Update species")

}

async function deleteSpecies(speciesId, url) {
    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            id: speciesId
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Species deleted...';
            location.reload()
            return Promise.resolve(resData);
        }
        return Promise.reject(response);
    })
        .catch((response) => {
            alert(response.statusText);
        });
}


async function addTemperament(url) {
    let newTemperament = prompt("Please provide a new species.")
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: newTemperament
        })
    });
    if (!response.ok) {
        throw new Error('Failed to create species');
    }
    const resData = await response.json();
    location.reload()
    return resData;
}

function updateTemperament(id){
    alterTemperament = prompt("Update temperament")
}

function deleteTemperament(id){
}


