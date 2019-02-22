import React from 'react';

const SearchBox = ({searchfiled, search}) => {

    return (
        <input type='search' placeholder="Search some thing" onChange={search}/>
    );
}


export default SearchBox;