import {
    getOrganismData
}
from "./request"

export default async (field, id) => {
    let data = null;

    switch (field) {
        case 'organism':
            data = await getOrganismData(id);
            break
        default:
            break
    }

    return data;
}