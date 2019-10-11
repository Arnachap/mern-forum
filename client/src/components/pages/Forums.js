import React from 'react';

const Forums = () => {
  return (
    <div>
      <a href='#' className='text-dark'>
        Accueil
      </a>

      <hr />

      <h2 className='title'>Forums</h2>

      <ul className='forums'>
        <li className='forum'>
          <div className='card'>
            <div className='card-header card-header-info'>
              <h3 className='card-title'>Général</h3>
            </div>

            <div className='row sub-forum'>
              <div className='col-1'>
                <i className='material-icons'>forum</i>
              </div>

              <div className='col-7'>
                <h4>Discussions générales</h4>
                <p>
                  Venez nous parler de tech ! Merci de regarder les autres
                  sous-forums avant de poster.
                </p>
              </div>

              <div className='col-1 posts-count'>
                <h4>2000</h4>
                <p>sujets</p>
              </div>

              <div className='col-3'>
                <img
                  src='./assets/img/default_avatar.png'
                  alt=''
                  className='img-thumbnail float-left'
                />

                <p>Bienvenue sur le forum !</p>
                <p>par Nono</p>
                <span>Il y a 2 minutes</span>
              </div>

              <div className='col-12'>
                <hr />
              </div>
            </div>

            <div className='row sub-forum'>
              <div className='col-1'>
                <i className='material-icons'>forum</i>
              </div>

              <div className='col-7'>
                <h4>Discussions générales</h4>
                <p>
                  Venez nous parler de tech ! Merci de regarder les autres
                  sous-forums avant de poster.
                </p>
              </div>

              <div className='col-1 posts-count'>
                <h4>2000</h4>
                <p>sujets</p>
              </div>

              <div className='col-3'>
                <img
                  src='./assets/img/default_avatar.png'
                  alt=''
                  className='img-thumbnail float-left'
                />

                <p>Bienvenue sur le forum !</p>
                <p>par Nono</p>
                <span>Il y a 2 minutes</span>
              </div>

              <div className='col-12'>
                <hr />
              </div>
            </div>

            <div className='row sub-forum'>
              <div className='col-1'>
                <i className='material-icons'>forum</i>
              </div>

              <div className='col-7'>
                <h4>Discussions générales</h4>
                <p>
                  Venez nous parler de tech ! Merci de regarder les autres
                  sous-forums avant de poster.
                </p>
              </div>

              <div className='col-1 posts-count'>
                <h4>2000</h4>
                <p>sujets</p>
              </div>

              <div className='col-3'>
                <img
                  src='./assets/img/default_avatar.png'
                  alt=''
                  className='img-thumbnail float-left'
                />

                <p>Bienvenue sur le forum !</p>
                <p>par Nono</p>
                <span>Il y a 2 minutes</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Forums;
