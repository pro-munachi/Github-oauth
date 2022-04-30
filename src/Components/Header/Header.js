import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div class='hamburger'>
          <div class='tog'>
            <div class='hidden-ham'>
              <label for='toggle'>&#9776</label>
            </div>
            <div class='hidden-git-icon'>
              <i class='fab fa-github' id='git' aria-hidden='true'></i>
            </div>
            <div class='hidden-bell'>
              <i class='far fa-bell' id='bell' aria-hidden='true'></i>
            </div>
          </div>
          <input type='checkbox' id='toggle' />
          <div class='hidden-nav'>
            <div class='hidden-container'>
              <div class='hidden-form'>
                <input
                  type='search'
                  placeholder='Search or jump to...'
                  class='hidden-search'
                />
              </div>
              <div class='hidden-ul'>
                <li class='hidden-li'>Dashboard</li>
                <li class='hidden-li'>Pull requests</li>
                <li class='hidden-li'>Issues</li>
                <li class='hidden-li'>Codespaces</li>
                <li class='hidden-li'>Marketplace</li>
                <li class='hidden-li'>Explore</li>
              </div>
              <div>
                <li class='hidden-lis'>
                  <img src='./images/muna.jpg' class='li-img' alt='muna' />{' '}
                  <span>pro-munachi</span>
                </li>
              </div>
              <div>
                <li class='hidden-liss'>
                  <svg
                    class='octicon octicon-sign-out v-align-middle'
                    viewBox='0 0 16 16'
                    version='1.1'
                    width='16'
                    height='16'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z'
                    ></path>
                  </svg>
                  <span>Sign-out</span>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class='contain'>
          <div class='head'>
            <div style='font-size: 30px; margin: auto;' class='git'>
              <i class='fab fa-github' aria-hidden='true'></i>
            </div>
            <div style='margin: auto;'>
              <input
                type='search'
                placeholder='Search or jump to...'
                class='search'
              />
            </div>
            <div class='ul'>
              <li class='li'>Pull requests</li>
              <li class='li'>Issues</li>
              <li class='li'>Codespaces</li>
              <li class='li'>Marketplace</li>
              <li class='li'>Explore</li>
            </div>
          </div>
          <div style='flex: 1;' class='flex'></div>
          <div class='icons'>
            <div class='bell'>
              <i class='far fa-bell' aria-hidden='true'></i>
            </div>
            <div style='margin: 0 10px;' class='plus'>
              +<i class='fa fa-caret-down' aria-hidden='true'></i>
            </div>
            <div class='header-image'>
              <img src='./images/muna.jpg' class='header-img' alt='muna' />
              <i class='fa fa-caret-down' aria-hidden='true'></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
