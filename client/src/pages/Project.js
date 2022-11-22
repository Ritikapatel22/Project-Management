import { useQuery } from "@apollo/client"
import { Link,useParams } from 'react-router-dom';
import { GET_PROJECT } from '../Queries/ProjectQuery'
import ClientInfo from "../components/ClientInfo";
import EditProjectForm from "../components/EditProjectForm";
import DeleteProjectButton from "../components/DeleteProjectButton";
export default function Project() {
    const { id } = useParams()
    const { loading, err, data } = useQuery(GET_PROJECT, { variables: { id } });

    if (loading) return <p>Loading</p>
    if (err) return console.log(err)
    return (
        <>
            {!loading && !err && (
                <div className='mx-auto w-75 card p-5'>
                    <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
                        Back
                    </Link>

                    <h1>{data.project.name}</h1>
                    <p>{data.project.description}</p>

                    <h5 className='mt-3'>Project Status</h5>
                    <p className='lead'>{data.project.status}</p>

                    <ClientInfo client={data.project.client} />

                    <EditProjectForm project={data.project} />

                    <DeleteProjectButton projectId={data.project.id} />
                </div>
            )}
        </>
    )
}
