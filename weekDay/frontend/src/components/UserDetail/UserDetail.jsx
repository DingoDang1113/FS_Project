import { useEffect } from 'react'
import { fetchUser } from '../../utils/userUtils'
import './UserDetail.css'
import {useDispatch, useSelector} from 'react-redux'


const UserDetail = ({ user }) => {
    const dispatch = useDispatch()
    const employee = useSelector(fetchUser(user.id))

    useEffect(() => {
        dispatch(fetchUser(user.id))
    })

    return (
        <form>
       

        </form>
    )
}