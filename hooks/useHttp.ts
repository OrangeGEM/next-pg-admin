import axios, { AxiosRequestConfig } from "axios"

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_HOST
});

export const useRequest = async ({
    url,
    method,
    data,
    headers,
    params
}: AxiosRequestConfig) => {
    try {
        const response = await instance({ url, method, data, headers, params });
        console.log(response);

    } catch (e) {
        console.log(e);
        throw e;
    }
}
