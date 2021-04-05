import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Designs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={'images/9.jpg'}   
              text='Explore the awesome view      '
              label='Design1'
              path='/services'
            />
            <CardItem
              src='images/2.jpg'
              text='Explore the constract match   '
              label='Design2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/6.jpg'
              text='Explore the black             '
              label='Design3'
              path='/services'
            />
            <CardItem
              src='images/4.jpg'
              text='Experience luxury             '
              label='Design4'
              path='/designs'
            />
            <CardItem
              src='images/8.jpg'
              text='Explore the white             '
              label='Design5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;