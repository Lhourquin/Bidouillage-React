import React from 'react';

const Avatar = () => 
     
        <img alt='Lucas' src="https://www.wikichat.fr/wp-content/uploads/sites/2/Fotolia_99789679_S.jpg"/>;

const UserName = () => <h4>lucas</h4>;

const Bio = () => <p>
    <strong>Bio :</strong>
    le plu bg des chat
</p>;

const UserProfile = () => 
<div>
    <Avatar/>
    <UserName />
    <Bio/>
</div>;





    

    


export default UserProfile;