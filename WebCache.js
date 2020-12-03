export class WebCache {
  constructor() {
    this.name = `TRF_CACHE`;
  }

  async get(url) {
    let cache = await caches.open(this.name);
    return await cache.match(url).then((response) => {
      let fetchPromise = fetch(url).then(function (networkResponse) {
        cache.put(url, networkResponse.clone());
        console.log("got new");
        return networkResponse;
      });
      console.log("return old");
      return response.json() || fetchPromise;
    });
  }
}
