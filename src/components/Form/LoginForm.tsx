import { useState } from "react";

function LoginForm() {
    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )

    // Actualizar los datos del usuario cada vez que este escribe
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
        switch(e.target.name){
            case "email":
                setUser({...user, email: e.target.value});
                break;
            case "password":
                setUser({...user, password: e.target.value});
                break;
            default:
        }
    }

    const handleSubmit = () => {
        // manejar el fetching de datos
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group form-group">
                    <input
                        type="text" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={(e) => onInputChange(e)}
                    /> 
                </div>
                <div className="input-group form-group">
                    <input 
                        type="password" 
                        className="form-control mb-3 border border-secondary" 
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="form-group d-flex flex-column align-items-center">
                    <input type="submit" value="Login" className="btn btn-dark login_btn"/>
                </div>
            </form>
        </>
    )
}

export default LoginForm