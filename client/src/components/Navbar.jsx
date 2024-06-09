import React, { useContext } from 'react'
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';

const Navbar = () => {

    const navigate = useNavigate();
    const usertype = localStorage.getItem('userType');

    const {logout} = useContext(GeneralContext);

  return (
    <>
        <div className="navbar">

        {!usertype ? 
        
            <>
                <h3 >RK RailRover</h3>

                <div className="nav-options" >
                    <p onClick={()=>navigate('/')}>Home</p>
                    <p onClick={()=>navigate('/auth')}>Login | SignUp</p>
                </div>
            
            </>
        :
        
        <>
        {usertype === 'customer' ? 
        
        <>
            <h3 >RK RailRover</h3>

            <div className="nav-options" >

                <p onClick={()=>navigate('/')}>Home</p>
                <p onClick={()=>navigate('/bookings')}>Bookings</p>
                <p onClick={logout}>Logout</p>

            </div>
        </>
            :  usertype === 'admin' ?

                    <>
                        <h3 >RK RailRover (Admin)</h3>
                        <div className="nav-options" >

                            <p onClick={()=>navigate('/admin')}>Home</p>
                            <p onClick={()=>navigate('/all-users')}>Users</p>
                            <p onClick={()=>navigate('/all-bookings')}>Bookings</p>
                            <p onClick={()=>navigate('/all-trains')}>Trains</p>
                            <p onClick={()=>navigate('/new-train')}>Add Train</p>
                            <p onClick={logout}>Logout</p>
                        </div> 
                    </>
            
                :

                    ""

        }
        </>
        }
        </div>
    
    </>
  )
}

export default Navbar