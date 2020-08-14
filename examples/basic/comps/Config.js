import { JSONEditor } from 'react-json-editor-viewer'
import { useEffect, useState } from 'react'
import axios from './axios'

const Config = () => {

  let [config, setConfig] = useState({})

  useEffect(() => {
    axios.get('/api/config').then(res => setConfig(removeId(res.data)))
    let es = new EventSource('/api/config/change-stream');

    es.onmessage = function (event) {
      setConfig(removeId(JSON.parse(event.data)))
    }
  }, [])

  return (<JSONEditor
    data={config}
    collapsible
    onChange={(key, value, parent, data) => axios.put('/api/config', data)}
  />)
}

export default Config

function removeId(data) {
  let t = { ...data }
  if (t._id) delete t._id
  return t
}