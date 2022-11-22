import React from 'react'
import ClientRow from './ClientRow'
import {GET_CLIENTS} from '../Queries/ClientQuery'
import { gql, useQuery } from '@apollo/client'

export default function Client() {
  const {loading,error,data} = useQuery(GET_CLIENTS)

  if(loading) return <p>loading</p>
  if(error) return console.log(error)
  return (
    <>
    {!loading && !error && (
      <table className='table table-hover mt-3'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    )}
  </>
  )
}