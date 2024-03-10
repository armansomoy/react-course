import React from 'react';

const Sidebar = ({bookmark}) => {
    return (
        <div className='md:w-1/3 m-3 p-2 bg-white rounded'>
            <h2>BookMark Item: {bookmark.length}</h2>
        </div>
    );
};

export default Sidebar;