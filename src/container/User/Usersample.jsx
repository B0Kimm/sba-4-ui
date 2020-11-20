import React, {useState} from 'react'
import axios from 'axios'
import {User} from '../../templates'


const UserLogin = () => {
    const{userid, setUserid} = useState()
    const{userpassword, setUserPassword} = useState()
    // useState() = Redux를 사용

    const signup = e => {
        e.preventDefault()
        const userData = {
            userid, password
        }
        axios.post(`http:localhost:8080/user/register`, userData)
        .then(
            console.log(`signup Success`)
        )
        .error(
            console.log(`singup Fail`)
        ) 
    }
    // e.preventDefault() = action을 사용하지 않고 restful로 사용
    // axios.post(보낸다).then(성공할시 [promise]).error(실패할시) 

    return(<User>
        <table className='tab_layer'>
            <form> 
            {/* action=''을 사용하지 않고 form로 하나로 묶어주면 RESTful 방식이다
            action == 공인인증서 방식*/}
            <tr>
                <td>ID</td>
                <td><input type='text' onChange={e=> setUserid(e.target.value) }/></td>
            </tr>
            <tr>
                <td>PASSWORD</td>
                <td><input type='text' onChange = {e => setUserPassword(e.target.value)}/></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td><button onClick={signup}>확인</button></td>
                <td><button>취소</button></td>
            </tr>
            </form>
        </table>
        </User>)
}

export default UserLogin