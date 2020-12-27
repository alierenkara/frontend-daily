import React from 'react'
import './assets/css/app.scss'

function Pricing() {
  return (
    <div className='component--prices'>
      <input type='checkbox' id='price-switch' />
      <div className='header'>
        <h3>Choose your plan</h3>
        <label for='price-switch'>
          <span>Monthly</span>
          <span>Yearly</span>
        </label>
      </div>
      <div className='packages'>
        <div className='package'>
          <h6>Starter</h6>
          <div className='price-info'>
            <div className='price'>
              <span data-monthly-price='$8.99' data-yearly-price='$5.99'></span>{' '}
              / month
            </div>
            <div className='description'>
              Billed{' '}
              <span
                data-monthly-text='monthly'
                data-yearly-text='yearly'
              ></span>
            </div>
          </div>
          <p>
            Pretium fusce id velit ut tortor pretium. Sit amet consectetur
            adipiscing elit ut. Condimentum mattis pellentesque id nibh. Euismod
            elementum.
          </p>
          <a href='#' className='button'>
            Get started
          </a>
        </div>

        <div className='package'>
          <h6>Professional</h6>
          <div className='price-info'>
            <div className='price'>
              <span
                data-monthly-price='$21.99'
                data-yearly-price='$16.99'
              ></span>{' '}
              / month
            </div>
            <div className='description'>
              Billed{' '}
              <span
                data-monthly-text='monthly'
                data-yearly-text='yearly'
              ></span>
            </div>
          </div>
          <p>
            Duis at consectetur lorem donec massa sapien faucibus. Ac placerat
            vestibulum lectus mauris.
          </p>
          <a href='#' className='button'>
            Get started
          </a>
        </div>
      </div>
    </div>
  )
}

export { Pricing }
