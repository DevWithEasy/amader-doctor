import api_url from "../apiurl";

export default async function getData(url) {
    const randomParam = Math.random().toString(36).substring(7);
    const res = await fetch(`${api_url}/api/${url}?${randomParam}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}