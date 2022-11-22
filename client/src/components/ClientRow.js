
import {FaTrash} from 'react-icons/fa'
import {DELETE_CLIENT} from '../Mutation/ClientMutation'
import { GET_CLIENTS } from '../Queries/ClientQuery'
import {useMutation} from '@apollo/client'

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
      variables:{id : client.id},
      refetchQueries : [{query : GET_CLIENTS}]
  })
    return (
      <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          <button className='btn btn-danger btn-sm' onClick={deleteClient}>
              <FaTrash />
          </button>
        </td>
      </tr>
    );
  }
  