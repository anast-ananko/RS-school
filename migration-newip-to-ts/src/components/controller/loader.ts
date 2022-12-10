import { Endpoints } from '../controller/controller';

type Options = {
    [key: string]: string;
};

interface IParamsResp {
    endpoint: Endpoints;
    options: Options;
}

interface IUrl {
    readonly baseLink: string;
    readonly options: Options;
}

class Loader implements IUrl {
    constructor(readonly baseLink: string, readonly options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp<T>(
        { endpoint, options = {} }: Partial<IParamsResp>,
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load<T>('GET', endpoint, callback, options);
    }

    protected errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    protected makeUrl(options: Options, endpoint: Endpoints | undefined): string {
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    protected load<T>(
        method: string,
        endpoint: Endpoints | undefined,
        callback: (data: T) => void,
        options: Options = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<T> => res.json())
            .then((data: T) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
