import { BASE_URL } from './constants'

export const apiService = {
    get(path) {
        return fetch(BASE_URL + path).then(res => res.json())
    }
}
