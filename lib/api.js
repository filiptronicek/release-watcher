export default async function timeSync() {
    const url = "https://trnck.dev/time";
    const response = await fetch(url);
    const resObj = await response.json();
    return resObj.result.unix
}