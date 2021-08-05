import React, { Component } from 'react'

export default class ListOfGlass extends Component {
    state = {
        imgName:'v1.png',
    }

    handleChangeGlass = (imgName) => {
        this.setState({
            imgName,
        })
    }

    render() {
        const {imgName} = this.state;
        return (
            <div class="container mt-5">
                <div class="row">
                    <div class="col col-lg-2"></div>
                    <div class="col-md-auto">
                        <div class="row justify-content-center">
                            <div class="col-4 wearGlass">
                                <img src="./image/model.jpg" className="model" alt="" />
                                <img src="./image/v1.png" className="glassModel" alt="" /> 
                            </div>
                            <div class="col-4"></div>
                            <div class="col-4">
                                <img src="./image/model.jpg" className="model" alt="" />
                                <img src={`./image/${imgName}`} className="glassModel" alt="" /> 
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-2"></div>
                </div>

                <div class="row justify-content-center">

                    <div className="col mt-5 d-flex justify-content-center">
                        <div className="card-deck p-5 ">
                            <div className="card" onClick={()=>this.handleChangeGlass('v1.png')}>
                                <img src="./image/v1.png" className="card-img-top w-100" alt="" /> 
                            </div>
                            <div className="card" onClick={()=>this.handleChangeGlass('v2.png')}>
                                <img src="./image/v2.png" className="card-img-top w-100" alt="" />  
                            </div>
                            <div className="card" onClick={()=>this.handleChangeGlass('v3.png')}>
                                <img src="./image/v3.png" className="card-img-top w-100" alt="" />
                            </div>
                            <div className="card" onClick={()=>this.handleChangeGlass('v4.png')}>
                                <img src="./image/v4.png" className="card-img-top w-100" alt="" /> 
                            </div>
                            <div className="card" onClick={()=>this.handleChangeGlass('v5.png')}>
                                <img src="./image/v5.png" className="card-img-top w-100" alt="" />  
                            </div>
                            <div className="card" onClick={()=>this.handleChangeGlass('v6.png')}>
                                <img src="./image/v6.png" className="card-img-top w-100" alt="" />
                            </div>
                            <div className="card" onClick={()=>this.handleChangeGlass('v7.png')}>
                                <img src="./image/v7.png" className="card-img-top w-100" alt="" /> 
                            </div>
                            <div className="card" onClick={()=>this.handleChangeGlass('v8.png')}>
                                <img src="./image/v8.png" className="card-img-top w-100" alt="" />  
                            </div>
                            <div className="card" onClick={()=>this.handleChangeGlass('v9.png')}>
                                <img src="./image/v9.png" className="card-img-top" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
