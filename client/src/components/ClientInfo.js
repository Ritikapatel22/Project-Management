import { FaEnvelope, FaPhone } from 'react-icons/fa';
import {RiShieldUserFill} from 'react-icons/ri'
export default function ClientInfo({client}) {
  return (
    <>
    <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <RiShieldUserFill className='icon' /> {client.name}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' /> {client.email}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.phone}
        </li>
      </ul>
    </>
  )
}
