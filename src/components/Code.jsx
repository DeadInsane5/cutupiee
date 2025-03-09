import React from 'react';
import { Link } from 'react-router-dom';
import "./Code.css";
import Pattern from './Pattern';

const Code = () => {
  return (
    <>
      <Pattern />
      <div className='code'>
        <h1 className='m-2'>Code Puzzle</h1>
        <p className='text-4xl m-2'>·−·/·/·−−/·−/·−·/−··//··/···//·−−/·−/··/···/−//−·−/··/···/···/·/···</p>
        <h2 className='text-2xl m-2'>Instructions</h2>
        <p>
          <ol>
            <li className='m-2'>1. Solve the above code for a reward</li>
            <li className='m-2'>2. Solve within time limit of 6 hours</li>
            <li className='m-2'>3. "/" separates letters, "//" separates words</li>
          </ol>
        </p>
        <Link to="/" className="next-page-button">Next Page</Link>
      </div>
    </>
  );
}

export default Code;