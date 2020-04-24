import permission from './permission'
import _fetch from './request'


interface Module {
    name: string,

    [api: string]: Object | Function
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

interface LooseObject {
    [key: string]: any
}

const moduleListCopy: LooseObject = {}

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
        moduleListCopy[module.name] = {}
        for (let k in module) {
            if (k === 'name') {

            } else {
                // @ts-ignore
                moduleListCopy[module.name][k] = (params: {}) => {
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
export const Permission = moduleListCopy['permission']

