import React, { Component } from 'react';
import style from '../Glass/styleGlass.css' 
import TryGlass from './TryGlass';
import background from '../Glass/background.jpg'

export default class MainGlass extends Component {
    render() {
        return (
            <div className="Glass" style={{  
                backgroundImage: 'url(' + background + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="text-center title p-3">
                    <h2>TRY GLASSES APP ONLINE</h2>
                </div>
                <div>
                    <TryGlass/>
                </div>
            </div>
        )
    }
}
