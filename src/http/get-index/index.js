exports.handler = async function http() {
  let form = `<form action=/oh method=post>
  <button>oh!</button>
</form>`
  let html = `<!doctype html>
<html><body>${ form }</body></html>`
  return { 
    statusCode: 200, 
    headers: { 'content-type': 'text/html' },
    body: html
  }
}
