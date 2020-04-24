class Storage {

    static setSession<T>(key: string, value: T): void {
        if (typeof value === 'string') {
            sessionStorage.setItem(key, value)
        } else {
            sessionStorage.setItem(key, JSON.stringify(value))
        }
    }

    static getSession = (key: string): void => {
        let ret = sessionStorage.getItem(key)
        if (ret) {
            try {
                return JSON.parse(ret)
            } catch (e) {
                throw e
            }
        }
    }

    static setLocal<T>(key: string, value: T): void {
        if (typeof value === 'string') {
            localStorage.setItem(key, value)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }

    static getLocal = (key: string): void => {
        let ret = localStorage.getItem(key)
        if (ret) {
            try {
                return JSON.parse(ret)
            } catch (e) {
                throw e
            }
        }
    }

    static clearSession(key: string | undefined) {
        if (key) {
            sessionStorage.removeItem(key)
        } else {
            sessionStorage.clear()
        }
    }

    static clearLocal(key: string | undefined) {
        if (key) {
            localStorage.removeItem(key)
        } else {
            localStorage.clear()
        }
    }


}

export default Storage
