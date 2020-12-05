import React, { useState } from 'react';
import Alias from '../components/alias';
import { useForm } from "react-hook-form";
// import { SketchPicker } from "react-color";

const Writer = () => {

    const { register, handleSubmit } = useForm();

    const [loggedIn, setLoggedIn ] = useState(true);

    const user: any = {
        name: 'Ricardo Sacramento',
        email: 'ricardo.sacramento18@gmail.com',
        alias: [
            {
                letter: 'L',
                color: '#fabd2f',
                description: 'Some description about the alias L, and i need to make it bigger in oder to see the overflow effect.Some description about the alias L, and i need to make it bigger in oder to see the overflow effect.',
                posts: [
                    {
                        id:1,
                        title: 'Some Post Title',
                        subtitle: 'Some post subtitle and Some post subtitle and Some post subtitle',
                        content: '"<p style="text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown rinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th<strong>e release </strong>of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum<strong> is simply dum</strong>my text of the printing and typesetting industry. Lorem Ipsum has been the industry<strong>s standard</strong> dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p><ul><li style="text-align: center;">electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</li><li style="text-align: center;">containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including</li><li style="text-align: center;">versions of Lorem Ipsum.</li></ul>"',
                        date: '10/08/2020',
                    },
                    {
                        id:2,
                        title: 'Some Post Title 1',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    },
                    {
                        id:3,
                        title: 'Some Post Title 2',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    }
                ]
            },
            {
                letter: 'M',
                color: '#fb4934',
                description: 'Writing some texts related to the story of life',
                posts: [
                    {
                        id:4,
                        title: 'Some Post Title',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    },
                    {
                        id:5,
                        title: 'Some Post Title 1',
                        subtitle: 'Some post subtitle',
                        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        date: '10/08/2020',
                    },
                    {
                        id:6,
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
                <div className="section-subtitle">
                    <h2>pseudónimos</h2>
                </div>
                <div className="settings">
                    { user.alias.map((alias: any, index: number) => {
                        return (
                            <Alias key={index} alias={alias} />
                        )
                    })}
                    <div className="user">
                        <div className="section-subtitle">
                            <h2>detalhes de utilizador</h2>
                        </div>
                        <div className="user-name">
                            <label>username</label>
                            <span>{ user.name }</span>
                        </div>
                        <div className="user-email">
                            <label>email</label>
                            <span>{ user.email }</span>
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
