import React, { Component } from 'react'
import './assets/css/app.scss'

function Search2() {
  return (
    <div className='search__component'>
      <h2>How can we help?</h2>
      <div className='search__input'>
        <div className='icon'>
          <img src='imgs/day_3_search.svg' />
        </div>
        <input type='text' placeholder='Search help articles' />
      </div>
    </div>
  )
}

function Topics() {
  return (
    <div className='topics__component'>
      <h4>Popular Topics</h4>
      <ul>
        <li>
          <a href='#'>Account</a>
        </li>
        <li>
          <a href='#'>Billing</a>
        </li>
        <li>
          <a href='#'>Privacy</a>
        </li>
        <li>
          <a href='#'>Refunds</a>
        </li>
        <li>
          <a href='#'>Verification</a>
        </li>
        <li>
          <a href='#'>Integrations</a>
        </li>
      </ul>
      <hr />
      <div className='contact'>
        <h4>Contact support</h4>
        <p>24/ 7 help from our support staff</p>
        <button>Contact</button>
      </div>
    </div>
  )
}

function List() {
  return (
    <>
      <div className='list__component'>
        <div className='text'>
          <h4>Waiting period for first payout</h4>
          <p>
            With so many different ways today to find information online, it can
            sometimes be hard to know where to go to first.
          </p>
        </div>
        <div className='category'>Payment</div>
      </div>
      <div className='list__component'>
        <div className='text'>
          <h4>E Banks That Accept Us Casino Players</h4>
          <p>
            With so many different ways today to find information online, it can
            sometimes be hard to know where to go to first.
          </p>
        </div>
        <div className='category'>Privacy</div>
      </div>
      <div className='list__component'>
        <div className='text'>
          <h4>How To Protect Your Computer Very Useful Tips</h4>
          <p>
            With so many different ways today to find information online, it can
            sometimes be hard to know where to go to first.
          </p>
        </div>
        <div className='category'>API</div>
      </div>
    </>
  )
}

export { Search2, Topics, List }
