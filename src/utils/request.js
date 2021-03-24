import {
    axiosGet
} from "@/utils/http"

function getOrganismData(id) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: "/api/organisms/" + id + '/',
            data: {
                "id": id
            },
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

export {
    getOrganismData
}