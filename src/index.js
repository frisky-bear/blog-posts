import React from 'react';
import ReactDOM from 'react-dom';
import SingleComments from './SingleComments.js';
import profileOne from './profileLinkOne.jpg';
import profileTwo from './profileLinkTwo.jpg';
import profileThree from './profileLinkThree.jpg';
import UserCard from './UserCard.js';

const App = () => {
    return(
        <div className='ui comment'>
            <UserCard>
                <SingleComments 
                    name="vassil"
                    date='Today at 5:00pm'
                    text='amazing comment section'
                    pictures={profileOne}     
                />
            </UserCard>
            <UserCard>
            <SingleComments 
                name="alex" 
                date='Today at 6:00pm' 
                text='amazing comment section'
                pictures={profileTwo}
                />
            </UserCard>
            <UserCard>
            <SingleComments 
                name="chip"
                date='Today at 7:00pm' 
                text='amazing comment section'
                pictures={profileThree}
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)