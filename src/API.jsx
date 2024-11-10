export function getPosts(url) {
  return sendRequest('GET', url);
}

export function newPost(data) {
  return sendRequest('POST', '/posts', data);
}

export function deletePost(id) {
  return sendRequest('DELETE', '/posts/' + id)
}

export function updatePost(id, data) {
  return sendRequest('PUT', '/posts/' + id, data);
}

function sendRequest(method, url, data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = (e) => reject(new Error(e));
    xhr.open(method, 'http://localhost:7070' + url);
    xhr.send(data);
  });
}