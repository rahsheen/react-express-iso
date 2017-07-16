export default {
  get: url => new Promise(
    (success, error) =>
      fetch(url)
        .then(success)
        .catch(error)
  ),
  post: (url, data) => new Promise(
    (success, error) =>
      fetch(url, {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
      })
        .then(success)
        .catch(error)
  )
}