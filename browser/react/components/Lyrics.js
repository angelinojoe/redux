import React from 'react';

const Lyrics = (props) => {

 const artistChange = (event) => {
     const val = event.target.value;
     props.setArtist(val);
 };
 const songChange = (event) => {
     const val = event.target.value;
     props.setSong(val);
 };
    return (
        <div id="lyrics">
            <form onSubmit={ props.handleSubmit }>
                <div>
                <input type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange} />
                <input type="text" value={props.songQuery} placeholder="Song" onChange={songChange} />
                </div>
                <pre>{props.text || 'Search above!'}</pre>
                <button type="submit">Search for Lyrics</button>
            </form>
        </div>
    );
};

export default Lyrics;
