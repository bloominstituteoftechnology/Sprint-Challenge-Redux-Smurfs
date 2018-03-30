import './win98.css';
import React from 'react';

const Window = () => {
    return (
            <div class="block-centered">
      <div class="menu">
        <div class="menu-sidebar">
          <div class="headline">
            <strong>Windows</strong> 98
          </div>
        </div>
        <ul class="menu-content">
          <li class="item folder">
            <img class="icon" src="./icons/programs.gif" alt="none"/>
            Programs
            <ul class="menu-content">
              <li class="item">
                <img class="icon" src="./icons/exe.gif" alt="none"/>
                Internet Explorer
              </li>
              <li class="item">
                <img class="icon" src="./icons/exe.gif" alt="none"/>
                Microsoft Word
              </li>
              <li class="item">
                <img class="icon" src="./icons/exe.gif" alt="none"/>
                Microsoft Excel
              </li>
              <li class="item">
                <img class="icon" src="./icons/exe.gif" alt="none"/>
                Microsoft Powerpoint
              </li>
              <li class="item">
                <img class="icon" src="./icons/exe.gif" alt="none"/>
                Microsoft Access
              </li>
            </ul>
          </li>
          <li class="item folder">
            <img class="icon" src="./icons/favourites.gif" alt="none"/>
            Favorites
            <ul class="menu-content">
              <li class="item">
                <img class="icon" src="./icons/documents.gif" alt="none"/>
                Channels
              </li>
              <li class="item">
                <img class="icon" src="./icons/documents.gif" alt="none"/>
                Links
              </li>
              <li class="item">
                <img class="icon" src="./icons/documents.gif" alt="none"/>
                Software Updates
              </li>
            </ul>
          </li>
          <li class="item folder">
            <img class="icon" src="./icons/documents.gif" alt="none"/>
            Documents
            <ul class="menu-content">
              <li class="item">
                <img class="icon" src="./icons/txt.gif" alt="none"/>
                Hot grills.txt
              </li>
              <li class="item">
                <img class="icon" src="./icons/txt.gif" alt="none"/>
                Passwords.txt
              </li>
            </ul>
          </li>
          <li class="item folder">
            <img class="icon" src="./icons/settings.gif" alt="none"/>
            Settings
          </li>
          <li class="item folder">
            <img class="icon" src="./icons/find.gif" alt="none"/>
            Find
          </li>
          <li class="item">
            <img class="icon" src="./icons/help.gif" alt="none"/>
            Help
          </li>
          <li class="item">
            <img class="icon" src="./icons/run.gif" alt="none"/>
            Run...
          </li>
          <li class="divider"></li>
          <li class="item">
            <img class="icon" src="./icons/logoff.gif" alt="none"/>
            Log Off Win98...
          </li>
          <li class="item">
            <img class="icon" src="./icons/shutdown.gif" alt="none"/>
            Shut Down...
          </li>
        </ul>
      </div>
    </div>
                    )};

export default Window;