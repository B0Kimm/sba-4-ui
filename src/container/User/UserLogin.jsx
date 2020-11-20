import React, {useState} from "react"
import axios from "axios"
import {User} from "../../templates"

const UserLogin = () => {
    const [userid, setUserid] = useState('')
    const [userpassword, setUserpassword] = useState('')
    // const userData = {
    //     userid,
    //     password
    // }
    // 'userid' : userid => userid: userid => userid ; 키와 값이 같다
    // 직접 post에 집어넣음
    const history = useHistory();
    const login = e => {
        e.preventDefault()
        // alert(`로그인 아이디 : ${userid}, 비밀번호 ${userpassword}`)
        // ''에는 플라스크에서 작동하는 API가 들어감
        .then(res => {
            alert(`Welcome ! ${res.data["name"]}.  ${res.data["userid"]}'s connection is successful. ! `)

            sessionStorage.setItem("sessionUser", res.data['userid']);
            window.location.reload()
            history.push("/home");
            
        })
        .catch(error => {
            alert("Please check your ID or password.");
            window.location.reload();
        })

}
        //post(send) then(success) catch(fail)

    const cancel = e => {
        e.preventDefault()
    }
 
    return (<>
    <h1>Signin Form</h1> <form>
    <table  className='tab_layer'>
       
        <tr>
            <td>ID : </td>
            <td><input type="text" onChange={e => setUserid(`${e.target.value}`)}/></td>
        </tr>
        <tr>
            <td> PW : </td>
            <td> <input type="text" onChange={e => setPassword(`${e.target.value}`)}/> </td>
        </tr>
        <tr>
            <td colspan={2}>
                <input type="button" value="LOGIN" onClick= {login}/>
                <input type="button" value="CANCEL" onClick= {cancel}/>
            </td>
        </tr>
       
    </table> </form>
    </>)
    }
export default UserLogin

//tr = table row,  td = table cell
// colSpan = 두개의 셀을 합쳐라
// json = {}, 객체  function도 객체 ==> 함수도 객체다
// class declaration // method define

//const 안쪽 memory= 휘발성, 바깥 disk=영속성
// without const login => dummy components, with const login => smart components
// event 