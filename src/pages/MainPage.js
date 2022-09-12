import React from 'react'


import './main.css'
import Table from '../components/table/Table';

const MainPage = () => {
  return (
    <div className='main__wrapper'>
        <div className='main__top'>
            <div className='balance'>3467 ₽</div>
            <div className='user'>
                <div className='user__logo'/>
                <h4 className='username'>username</h4>
            </div>
            <div className='exit'>Выйти</div>
        </div>
        <Table/>
    </div>
  )
}

export default MainPage