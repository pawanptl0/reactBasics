import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = () => {
  let initialValue = `Sambhaji Bhosale (14 May 1657 – 11 March 1689) was the second ruler of the Maratha kingdom. He was the eldest son of Shivaji, the founder of the Maratha Empire and his first wife Saibai. He was successor of the realm after his father's death, and ruled it for nine years. Sambhaji's rule was largely shaped by the ongoing wars between the Maratha kingdom and Mughal Empire as well as other neighbouring powers such as the Siddis, Mysore and the Portuguese in Goa. In 1689, Sambhaji was captured, tortured and executed by the Mughals. He was succeeded by his brother Rajaram I.`
  const [value, setValue] = useState(initialValue);
  const { speak } = useSpeechSynthesis();
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col col-sm-8 col-md-8 col-lg-6 col-xl-6">
          <form>
            <div className="form-group">
              <textarea className="form-control" value={value} onChange={(event) => setValue(event.target.value)} />
              <button type="button" className="btn btn-primary" onClick={() => speak({ text: value })}>Speak</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TextToSpeech
