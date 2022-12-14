import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_CLIENT } from '../Mutation/ClientMutation'
import { GET_CLIENTS } from '../Queries/ClientQuery'

export default function AddClientModal() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] }
            })
        }
    })

    const onSumbit = (e) => {
        e.preventDefault();
        addClient(name, email, phone)
        setName('')
        setEmail('')
        setPhone('')
    }

    return (
        <>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <AiOutlinePlus />
                Add Client
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSumbit}>
                                <div className='mb-3'>
                                    <label className='form-label'>Name</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Phone</label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='phone'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    data-bs-dismiss='modal'
                                    className='btn btn-secondary'
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
