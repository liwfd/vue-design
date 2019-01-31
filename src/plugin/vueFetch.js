import { Message } from 'element-ui';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function timeout(to) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject('timeout');
    }, to);
  });
}

function getUrl(url, data) {
  let q = Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
  })
    .join('&');

  return q.length > 0 ? url + '?' + q : url;
}

//fixme improve code
function getBodyData(data) {
  let q = Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
  })
    .join('&');
  return q;
}

function getOpts(opts) {
  let _opts = Object.assign({}, initOpts());
  for (let k in opts) {
    _opts[k] = opts[k];
  }
  return _opts;
}

function initOpts() {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    timeout: 100000,
    method: 'GET',
    // mode: 'no-cors',
    credentials: 'include',
    cache: 'no-cache'
  };
}

class VueFetch {
  constructor() {
  }

  install(Vue) {
    Object.assign(Vue, {
      $fetch: {
        get: this.get,
        post: this.post,
      }
    });

    Object.assign(Vue.prototype, {
      $fetch: {
        get: this.get,
        post: this.post,
        openApi: this.openApi
      }
    });
  }

  //get请求
  get(url, data = {}, opts = {}) {
    let _opts = getOpts(opts);
    _opts.method = 'GET';
    let _url = getUrl(url, data);
    return Promise.race([
      fetch(_url, _opts),
      timeout(_opts.timeout)
    ]).then(checkStatus).catch(err => {
        Message.error(err);
      }
    );
  }

  //post请求
  post(url, data = {}, opts = {}) {
    let _opts = getOpts(opts);
    let _data = JSON.stringify(data);
    _opts.method = 'POST';
    _opts.body = _data;

    return Promise.race([
      fetch(url, _opts),
      timeout(_opts.timeout)
    ]).then(checkStatus);
  }

}

export default new VueFetch();
