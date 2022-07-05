import { useState } from 'react'
import GeneralDetail from './GeneralDetail'
import PersonalDetail from './PersonalDetail'
import Confirm from './Confirm'
import Success from './Success'

const User = () => {
  const [step, setStep] = useState(1)
  /* const [firstName, setFirstName] = useState('Pawan')
  const [lastName, setLastName] = useState('Patil')
  const [email, setEmail] = useState('pawanptl0@gmail.com')
  const [occupation, setOccupation] = useState('Farmer')
  const [city, setCity] = useState('Kolhapur')
  const [bio, setBio] = useState('patils') */

  const [ details, setDetails] = useState({firstName: 'Pawan', lastName: 'Patil', email: 'pawan@gmail.com', 
    occupation: 'Farmer', city:'Pune', bio: 'Patils'})
 
  const nextStep = () =>{
    setStep(step + 1)
  }

  const prevStep = () =>{
   setStep(step - 1)
  }

  const handleChange = input => e => {
    let newObj = {...details, [input]: e.target.value}
    setDetails(newObj)
  }
  
  switch(step) {
    case 1:
      return(<GeneralDetail values={ details } nextStep={ nextStep} handleChange={ handleChange} />)
    case 2:
        return (<PersonalDetail values={details} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange}
           />)
    case 3:
      return( <Confirm  values={ details } nextStep={ nextStep} prevStep ={ prevStep} />)
    default:
      return(
        <Success />
      )
  }
}

export default User
