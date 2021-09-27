import React from 'react';
import './index.css';
export const Modal = ({ onPress }) => {

    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');

    const onSubmit = () => {
        alert(email)
        onPress()
    }

    return (
        <div className="modal" >
            <div className="modal-form"> 
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" type="email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" type="text"/>
                <input className="form-control btn" type="submit" onClick={onSubmit}/>
            </div>

            <div className="modal-close" onClick={onPress}>
                close
            </div>
            
        </div>
    )
}