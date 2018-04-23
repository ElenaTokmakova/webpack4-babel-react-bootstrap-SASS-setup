import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = (props) => {
     
    return (
      <footer>                  
          <ul>
            <li><a className="personal-website" href="http://elenatokmakova.com" title="My Personal Website" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="website" className="fa fa-fw fa-globe"/></a>
            </li>
            <li><a className="linkedin" href="https://www.linkedin.com/in/elena-tokmakova" title="My LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="linkedin" className="fa fa-fw fa-linkedin"/></a>
            </li>
            <li><a className="github" href="https://github.com/ElenaTokmakova" title="My Github" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="github" className="fa fa-fw fa-github"/></a>
            </li>
            <li><a className="facebook" href="https://www.facebook.com/ElenaTokmakova101" title="My Facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="facebook" className="fa fa-fw fa-facebook"/></a>
            </li>
            <li><a className="codepen" href="https://codepen.io/ElenaTokmakova" title="My Codepen" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="codepen" className="fa fa-codepen"/></a>
            </li>
            <li><a className="freecodecamp" href="https://www.freecodecamp.com/elenatokmakova" title="My Free Code Camp" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="freecodecamp" className="fa fa-free-code-camp"/></a>
            </li>
        </ul>    
      </footer>
  	); 
  
}

export default Footer;