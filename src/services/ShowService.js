import { BASE_URL } from '../shared/constants'
import Show from '../models/Show'
import Cast from '../models/Cast'

class ShowService {
    fetchPopularShows() {
        const requestUrl = `${BASE_URL}/shows`

        const adaptShows = shows => {
            console.log(shows)
            return shows
                .filter(show => show.rating.average > 8)
                .map(show => new Show(show))
                .splice(0, 50)
                .sort((curr, next) => {
                    return next.rating - curr.rating
                })
        }

        return fetch(requestUrl)
            .then(response => response.json())
            .then(adaptShows)
    }

    fetchSingleShow(id) {
        const requestUrl = `${BASE_URL}/shows/${id}?embed[]=seasons&embed[]=cast`

        return fetch(requestUrl)
            .then(response => response.json())
            .then(showData => {
                const castList = showData._embedded.cast.map(({ person }) => {
                    return new Cast(person)
                })

                const show = new Show(showData)
                show.casts = castList
                return show
            })
    }
}

export const showService = new ShowService()
