import React from 'react';
import '../styles/styles.css';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <> 
            <div className='container'>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>
                <div className='links'>
                        <h1>Link</h1>
                        <h1>Pricing</h1>
                        <h1>Review</h1>
                        {/* <ul>
                            <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                            <li><Link to="/pricing" style={{ textDecoration: 'none', color: 'black' }}>Pricing</Link></li>
                            <li><Link to="/review" style={{ textDecoration: 'none', color: 'black' }}>Review</Link></li>
                        </ul> */}
                </div>
                <div className='triangle'>

                </div>
            </div>
            
        </>
    )
}
export default Header