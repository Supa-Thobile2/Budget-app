import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'



function SignUp(){
    const btn ={
        width: '150px',
        height: '30px',
        marginTop: '3%'
    }

    let history = useHistory()

    const Register = (()=>{
        history.push('/home')
    })


    return(
       
        <div className="container">
            <h1>Register Account</h1>
            <input type="email" placeholder="Enter you email"/>
            <input type="password" placeholde="Enter you email"/>
            <button  onClick= {Register}>Sign Up</button>
            <span><Link to="/login"> Already have an Account</Link></span>
        </div>
    )
}

export default SignUp