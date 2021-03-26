export async function watcherFetcher() {
    const url = "https://release-watcher-api.filiptronicek.workers.dev/";
    const response = await fetch(url);
    const resObj = await response.json();
    return resObj;
}
