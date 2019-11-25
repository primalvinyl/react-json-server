import React from 'react';
import { Link } from 'react-router-dom';
import imageMissing from '../../assets/images/missing.jpg';

 const GamePage = (props) => {
    const slug = props.match.params.slug;
    const temp = {
        Name: '',
        TwitchGameId: '',
        CategorySections: [{ID: '', Name: ''}]
    };
    const game = props.games.length ? props.games.find(element => element.Slug === slug) : temp;
    const categoryElements = game.CategorySections.map(category =>
        <li key={category.ID}>{category.Name}</li>
    );
    const addDefaultSrc = (e) => e.target.src = imageMissing;

    return (
        <div className="game-page">
            <nav><Link to="/">Go To Game List</Link></nav>
            <article>
                <h1>{game.Name}</h1>
                <figure>
                    <img 
                        src={`https://twitch-gds-boxart-aws.s3-us-west-2.amazonaws.com/${encodeURIComponent(game.Name)}.jpg`}
                        onError={addDefaultSrc}
                    />
                </figure>
                <section>
                    <h3>Twitch ID</h3>
                    <p>{game.TwitchGameId}</p>
                </section>
                <section>
                    <h3>Categories</h3>
                    <ul>{categoryElements}</ul>
                </section>
            </article>
        </div>
    );
}

export default GamePage;
