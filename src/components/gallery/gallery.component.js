import React from 'react'
import './gallery.styles.css'

import CardList from '../../components/card-list/card-list.component'

import LeftArrow from './left arrow.png'
import RightArrow from './right arrow.png'

const Gallery = ({data}) =>{
    function handleLeftClick(){
        document.getElementsByClassName("clist")
    }

    return(
        <div className='gallery'>
            <div className='img-container left alive' onClick={handleLeftClick}>
                <img src={LeftArrow}/>
            </div>
            <div className='wrapper'>
                <div className='clist'>
                    <CardList data={data}/>
                </div>
            </div>
            <div className='img-container right alive'>
                <img src={RightArrow}/>
            </div>
        </div>
    )
}

export default Gallery;