import permission from './permission'
import _fetch from './request'

interface Module {
    name: string,

    [api: string]: any
}

interface ApiParam {
    path?: Array<string>,
    query?: Object,
    data?: Object,
    headers?: Object
}


const moduleList: Array<Module> = [
    permission
]

const getApiUrl = (url: string, apiParam: ApiParam) => {
    const {path, query} = apiParam
    let result = url
    if (path && path.length > 0) {
        result = url + path.join('/')
    }
    if (query && Object.keys(query).length > 0) {
        let arr = [], queryStr = '';
        for (let k in query) {
            if (k) {
                // @ts-ignore
                arr.push(`${k}=${query[k]}`);
            }
        }
        if (arr.length > 0) {
            queryStr = '?' + arr.join('&')
        }
        result = result + queryStr
    }
    return result
}
const createApiFoo = () => {
    moduleList.map((module: Module) => {
        for (let k in module) {
            if (k === 'name') {

            } else {
                module[k] = (params: any) => {
                    return _fetch({
                        // @ts-ignore
                        url: getApiUrl(module[k].url, params)
                    })
                }
            }
        }
    })
}
createApiFoo()
export const Permission = permission

