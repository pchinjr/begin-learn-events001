let arc = require('@architect/functions')

async function oh() {
  await arc.events.publish({
    name: 'oh', 
    payload: { 
      message: 'hello oh',
      timestamp: new Date(Date.now()).toISOString()
    }
  })
  return { location: '/' }
}

exports.handler = arc.http.async(oh)
