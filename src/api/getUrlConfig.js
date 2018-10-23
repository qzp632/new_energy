import { DEVAPI } from './interface'
import { MOCKAPI } from '../mock/mockdata'

export function getUrl () {
    let open = 'mock'//mock、dev
    if (open === 'dev') {
        return MOCKAPI
    } else {
        return DEVAPI
    }
}