import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {User} from '../../templates'

// useEffect : 자동으로 가져옴

const UserList = () => {
    const [data, setData] = useState([]) //('')는 값을 1개 ([])는 여러개
    useEffect(() => {
        axios.get(`http://localhost:8080/api/users`)
        .then(res => {
            alert(`List Success`)
            setData(res.data)
        }       )
        .catch(e => {
            alert(`List Fail`)
            throw(e)
        })
    }, []) //오버라이딩 없이 추가해 준다. 


    return (<User>
        
        <table>
            <h1>User List</h1>
            <tr>
                <th>userid</th>
                <th>name</th>
                <th>pclass</th>
                <th>gender</th>
                <th>age_group</th>
                <th>embarked</th>
                <th>rank</th>
            </tr>
            {data.map((i, index)=> (
                <tr key={index}>
                <td>{i.userid}</td>
                <td>{i.name}</td>
                <td>{i.pclass}</td>
                <td>{i.gender}</td>
                <td>{i.age_group}</td>
                <td>{i.embarked}</td>
                <td>{i.rank}</td>
            </tr>
            ))}
        </table>

    </User>)
}

export default UserList