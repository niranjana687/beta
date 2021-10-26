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
            <h3>Team</h3>
            <Profile name="Niranjana" position="President" url="https://avatars.githubusercontent.com/u/42086667?v=4"/>
            <Profile name="Alan Antony" position="Vice-President" url="https://media-exp1.licdn.com/dms/image/C4E03AQHj7JdOJJss0A/profile-displayphoto-shrink_400_400/0/1616914790767?e=1640822400&v=beta&t=I0rSVWcA-4Hy2lU3wcnwYS0uggN0qLuz-w13JHI4aQ8"/>
            <Profile name="Sandra Sam" position="Secretary" url="https://media-exp1.licdn.com/dms/image/C4E03AQGPIjz_KKRG5w/profile-displayphoto-shrink_400_400/0/1622537067298?e=1640822400&v=beta&t=AUAWssuB3j6PFryFNPortY-WsIe0P0CbVSWBqPhk298" />
            <Profile name="Adil Rafeek" position="Head of Design & Finance" url="https://media-exp1.licdn.com/dms/image/C4D03AQEzdu205Hb8Uw/profile-displayphoto-shrink_800_800/0/1631267967298?e=1640822400&v=beta&t=FXnCpvpbH8j2-5Xs9ytwfsmqrat7j0xu_knloPMXSAA"/>
            <Profile name="Malavika Rajesh Vikraman" position="Head of Publicity and Outreach" url="https://media-exp1.licdn.com/dms/image/C4E03AQHKbFzgQob-nw/profile-displayphoto-shrink_400_400/0/1557983032143?e=1640822400&v=beta&t=efBt3MGlTDExXjaNb1NuPeGa3405hSVZxwtkuFK6jz0"/>
            <Profile name="Denil Geo Daise" position="Head of Marketing" url="https://media-exp1.licdn.com/dms/image/C5603AQHtflyDGHwMZw/profile-displayphoto-shrink_400_400/0/1630162214373?e=1640822400&v=beta&t=7HARIaV_TXYWxtf5EqCNR0qleKx-Tisv05HjBYpuML0"/>
            <Profile name="Aswathy S Menon" position="Head of Contect" url="https://media-exp1.licdn.com/dms/image/C5603AQEC9hbfip7_Xg/profile-displayphoto-shrink_400_400/0/1622300825651?e=1640822400&v=beta&t=2tW6P-SythxnhheE83SJWBwcnhNgCL6r8QLzpIvB4PA"/>
            <Profile name="Sangeeth" position="Cheif Editor, Munner's Daily" url="https://media-exp1.licdn.com/dms/image/C4D03AQEqy3EdaiEtCA/profile-displayphoto-shrink_400_400/0/1594644535712?e=1640822400&v=beta&t=qVDWHI4Mnc3nCn6YL0gEodVWSQkvZgFIpCb_c3V9sOI"/>
        </section>
    );

}