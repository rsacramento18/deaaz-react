import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Writer = () => {

    const { register, handleSubmit } = useForm();

    const [loggedIn, setLoggedIn ] = useState(false);

    const user = {
        name: 'Ricardo Sacramento',
        email: 'ricardo.sacramento18@gmail.com',
        alias: [
            {
                letter: 'L',
                description: 'Some description about the alias L',
                posts: [
                    {
                        title: 'Some Post Title',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    },
                    {
                        title: 'Some Post Title 1',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    },
                    {
                        title: 'Some Post Title 2',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    }
                ]
            },
            {
                letter: 'M',
                description: 'Writing some texts related to the story of life',
                posts: [
                    {
                        title: 'Some Post Title',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    },
                    {
                        title: 'Some Post Title 1',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    },
                    {
                        title: 'Some Post Title 2',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    }
                ]
            }
        ]
    }

    const onSubmit = (data : any) => {
        alert(JSON.stringify(data));
        setLoggedIn(true);
    }

    if ( loggedIn ) {
        return (
            <div className="writer">
                <div className="section-title">
                    <h1>área de escritor</h1>
                </div>
                <div className="settings">
                    <div className="alias">
                        <div className="alias-letter">
                            <span>L</span>
                        </div>
                        <div className="alias-description">
                            <span>Some description for the alias</span>
                        </div>
                        <div className="alias-posts">
                            <input type="button" value="+"/>
                        </div>
                        <div className="alias-delete">
                            <input type="button" value="delete"/>
                        </div>
                    </div>
                    <div className="alias-posts">
                        <div className="alias-post-title">
                            <span>Some post title</span>
                        </div>
                        <div className="alias-date">
                            <span>18/05/2020</span>
                        </div>
                        <div className="alias-posts">
                            <input type="button" value="+"/>
                        </div>
                        <div className="alias-delete">
                            <input type="button" value="delete"/>
                        </div>
                    </div>
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
            <div className="section-title">
                <h1>área de escritor</h1>
            </div>
            <div className="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div> 
                        <input type="text" name="username" ref={register} placeholder="username" />
                    </div>
                    <div> 
                        <input type="password" name="password" ref={register} placeholder="password" />
                    </div>

                    <input type="submit" value="entrar"/>
                </form>
            </div>
        </div>
    );
}

export default Writer;
