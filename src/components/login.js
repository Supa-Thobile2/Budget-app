import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Login(){

    const btn ={
        width: '150px',
        height: '30px',
        marginTop: '3%'
    }

    let history = useHistory()

    const Login = (()=>{
        history.push('/home')
    })
    return(
      
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Enter your email"/><br/><br/>
            <input type="password" placeholder="Enter your email"/>
            <button style={btn} onClick={Login}>Login</button>

            <span>Do not have an account?</span>{""}
            <span><Link to="/signup"> Create Account</Link></span>
        </div>
    )
}

export default Login