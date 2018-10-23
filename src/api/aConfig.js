import { getUrl } from './getUrlConfig'
import request from '../utils/request'
const GETAPI = getUrl()
export function getA () {
    // console.log(GETAPI)
    return request(GETAPI.Amodel)
}