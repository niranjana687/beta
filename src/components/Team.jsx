import React from "react";
//import pictures

function Profile({name, position, url}) {
    return (
            <div>
                <img 
                src={url}
                alt={name}
                className='avatar'
            />
            <p className='avatar'>{name}</p>
            <p className='avatar'>{position}</p>
            </div>
    );
}

export default function Team() {
    return (
        <section>
            <Profile name="Niranjana" position="President" url="https://avatars.githubusercontent.com/u/42086667?v=4"/>
            <Profile name="Alan Antony" position="Vice-President" url=""/>
            <Profile name="Sandra Sam" position="Secretary" url="" />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
        </section>
    );

}