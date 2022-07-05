import React, { useState } from 'react'
import { useSpeechRecognition } from 'react-speech-kit';

const SpeechToText = () => {

  const [value, setValue] = useState('');
  const [listeningText, setListeningText] = useState(false);

  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const handleStart = () => {
    console.log('in start')
    setListeningText(true)
    listen()
  }

  const handleStop = () => {
    setListeningText(false)
    stop()
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-sm-8 col-md-8 col-lg-6 col-xl-6">
          <form>
            <div className="form-group">
              <textarea className="form-control" value={value} onChange={(event) => setValue(event.target.value)} />
              <button type="button" className="btn btn-primary" onClick={handleStart}>Start Recording</button>
              <button type="button" className="btn btn-primary" onClick={handleStop}>Stop Recording</button>
              {listeningText && <div>Go ahead I'm listening</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SpeechToText
