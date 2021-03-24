import axios from "axios"

function axiosGet(options) {
    axios(options.url)
        .then((res) => {
            options.success(res.data)
        })
        .catch((err) => {
            options.error(err)
        })
}

export {
    axiosGet
}