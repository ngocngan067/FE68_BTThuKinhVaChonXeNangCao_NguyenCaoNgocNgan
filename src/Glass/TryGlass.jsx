import React, { Component } from 'react'
import {listGlass} from '../Glass/listGlass'

export default class ListOfGlass extends Component {
    state = {
        url:'./glassesImage/v1.png',
        glassName:'GUCCI G8850U',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ',
    }

    ChangeGlass = (url) => {       
        const find = listGlass.find((item) => item.url === url)
        // console.log(find.url);
        this.setState({
            url: find.url,
            glassName:find.name,
            desc: find.desc,
        })
    }

    render() {

        const {url, glassName, desc} = this.state;
        return (
            <div class="container mt-5">
                <div class="row">
                    <div class="col col-lg-2"></div>
                    <div class="col-md-auto">
                        <div class="row justify-content-center">
                            <div class="col-4 wearGlass">
                                <img src="./glassesImage/model.jpg" className="model" alt="" />
                                {/* <img src="./glassesImage/v1.png" className="glassModel" alt="" />  */}
                                <img src={url} className="glassModel" alt="" />
                            </div>
                            <div className="intro" id="hinhvuong">
                                <h4 className="text-left">{glassName}</h4>
                                <p className="text-left">{desc}</p>
                            </div>
                            <div class="col-4"></div>
                            <div class="col-4">
                                <img src="./glassesImage/model.jpg" className="model" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-2"></div>
                </div>

                <div class="row justify-content-center">

                    <div className="col mt-5 d-flex justify-content-center">
                        <div className="card-deck p-5  bg-light m-5">
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v1.png')}>
                                <img src="./glassesImage/v1.png" className="card-img-top w-100" alt="" /> 
                            </div>
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v2.png')}>
                                <img src="./glassesImage/v2.png" className="card-img-top w-100" alt="" />  
                            </div>
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v3.png')}>
                                <img src="./glassesImage/v3.png" className="card-img-top w-100" alt="" />
                            </div>
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v4.png')}>
                                <img src="./glassesImage/v4.png" className="card-img-top w-100" alt="" /> 
                            </div>
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v5.png')}>
                                <img src="./glassesImage/v5.png" className="card-img-top w-100" alt="" />  
                            </div>
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v6.png')}>
                                <img src="./glassesImage/v6.png" className="card-img-top w-100" alt="" />
                            </div>
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v7.png')}>
                                <img src="./glassesImage/v7.png" className="card-img-top w-100" alt="" /> 
                            </div>
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v8.png')}>
                                <img src="./glassesImage/v8.png" className="card-img-top w-100" alt="" />  
                            </div>
                            <div className="card" onClick={()=>this.ChangeGlass('./glassesImage/v9.png')}>
                                <img src="./glassesImage/v9.png" className="card-img-top" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
