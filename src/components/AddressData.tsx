import React, { Component } from 'react';
import './AddressData.css';
import * as types from './../types/addressData';

interface mapProps{
    addressData: types.addressData
}

export default class AddressData extends Component<mapProps, any>{

    render(){
        return (
            <div className="addressData-container border">
                <div className="addressData">
                    <span className="address-data-title">IP ADDRESS</span>
                    <br/>
                    <span className="address-data-content">{this.props.addressData.ip || ""}</span>
                    <div className="address-data-right-line right-line-1"></div>
                </div>
                <div className="addressData">
                    <span className="address-data-title">LOCATION</span>
                    <br/>
                    <span className="address-data-content">
                        {(this.props.addressData.location?.city || "") + ", " + (this.props.addressData.location?.region || "") + " " + (this.props.addressData.location?.geonameId || "")}
                    </span>
                    <div className="address-data-right-line right-line-2"></div>
                </div>
                <div className="addressData">
                    <span className="address-data-title">TIMEZONE</span>
                    <br/>
                    <span className="address-data-content">UTC {this.props.addressData.location?.timezone || ""}</span>
                    <div className="address-data-right-line right-line-3"></div>
                </div>
                <div className="addressData">
                    <span className="address-data-title">ISP</span>
                    <br/>
                    <span className="address-data-content right-line-4">{this.props.addressData.isp || ""}</span>
                </div>
            </div>
        );
    }
}