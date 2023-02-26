async function adoptAnimal(animalId, url) {
    let adoptionStatus = true;
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            adopted: adoptionStatus,
            id: animalId
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Animal updated...';
            location.reload()
            return Promise.resolve(resData);
        }
        return Promise.reject(response);
    })
        .catch((response) => {
            alert(response.statusText);
        });
}

async function deleteAnimal(animalId, url) {
    let returnAdoptionStatus = false;
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            adopted: returnAdoptionStatus,
            id: animalId
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Animal updated...';
            location.reload()
            return Promise.resolve(resData);
        }
        return Promise.reject(response);
    })
        .catch((response) => {
            alert(response.statusText);
        });
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
    }).then((response) => {
        if (response.ok) {
            const resData = 'New species added...';
            location.reload()
            return Promise.resolve(resData);
        }
        return Promise.reject(response);
    })
        .catch((response) => {
            alert(response.statusText);
        });


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
}

    async function updateSpecies(speciesId, url) {
        let alterSpecies = prompt("Update temperament");
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: alterSpecies,
                id: speciesId
            })
        }).then((response) => {
            if (response.ok) {
                const resData = 'Species updated...';
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
        }).then((response) => {
            if (response.ok) {
                const resData = 'Temperament added...';
                location.reload()
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
            .catch((response) => {
                alert(response.statusText);
            });
    }

    async function updateTemperament(tempId, url) {
        let alterTemperament = prompt("Update temperament");
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: alterTemperament,
                id: tempId
            })
        }).then((response) => {
            if (response.ok) {
                const resData = 'Temperament updated...';
                location.reload()
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
            .catch((response) => {
                alert(response.statusText);
            });
    }

    async function deleteTemperament(tempId, url) {
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: tempId
            })
        }).then((response) => {
            if (response.ok) {
                const resData = 'Temperament deleted...';
                location.reload()
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
            .catch((response) => {
                alert(response.statusText);
            });
    }


