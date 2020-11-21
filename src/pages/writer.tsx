import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Writer = () => {

    const { register, handleSubmit } = useForm();

    const [loggedIn, setLoggedIn ] = useState(false);

    const onSubmit = (data : any) => {
        alert(JSON.stringify(data));
        setLoggedIn(true);
    }

    if ( loggedIn ) {
        return (
            <div className="writer">
                <h1>área de escritor</h1>
                <div className="settings">
                    <div className="user">
                        <div>
                            <label>Nome</label>
                            <span>Ricardo Sacramento</span>
                        </div>
                        <div>
                            <label>email</label>
                            <span>ricardo.sacramento18@gmail.com</span>
                        </div>
                    </div>
                    <div className="alias">
                        <div>
                            <label>Letra</label>
                            <span>R</span>
                        </div>
                        <div>
                            <label>Cor</label>
                            <span>Yellow</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="writer">
            <h1>área de escritor</h1>
            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div> 
                        <label>username</label>
                        <input type="text" name="username" ref={register} placeholder="username" />
                    </div>
                    <div> 
                        <label>password</label>
                        <input type="password" name="password" ref={register} placeholder="password" />
                    </div>

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Writer;
