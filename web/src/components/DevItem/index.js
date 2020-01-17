import React, {useState, useEffect} from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import api from '../../services/api'

function DevItem(props) {

  const { dev } = props;

  
  return (

    <li key={dev.github_username} className="dev-item">

      <header>

        <div className="separatorDiv">
          <img src={dev.avatar_url} alt={dev.name}></img>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </div>
      </header>

      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil do Github</a>

    </li>

  )
}

export default DevItem;