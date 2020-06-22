import React from 'react'
import './loading-animation.styles.css'

const LoadingAnimation = () => (
    <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span>Loading Content</span>
    </div>
)

export default LoadingAnimation;