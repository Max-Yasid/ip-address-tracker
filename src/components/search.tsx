import React, { Component } from 'react';
import './search.css';
import arrow from './../assets/images/icon-arrow.svg';
import * as types from './../types/addressData';

interface IProps{
    actions: { setAddressData: any };
  }

class Search extends Component<any, IProps>{
    
    ip: string = "";

    getInputValue = (e: any) => {
        this.ip = e.target.value; 
    }
    sendDataOnpressEnter = (e: any) => {
        if(e.keyCode === 13){
            this.sendData(e);
        }
    }
    sendData = (e: any) => {
        e.preventDefault();
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_PNPe115qT1R3ySoEc9ekW6ioP0Akn&ipAddress=${this.ip}`)
            .then((res: any) => res.json())
            .then((res: types.addressData) => {
                if(res.ip){
                    this.props.actions.setAddressData(res);
                }else{
                    alert('IP not found.');
                }
            });
    }
    render(){
        return (
            <form className="header-search-group text-left">
                <input onChange={this.getInputValue} onKeyDown={this.sendDataOnpressEnter} className="search-bar" type="text"/>
                <button onClick={this.sendData} type="submit" className="search-icon d-flex justify-content-center align-items-center">
                    <img src={arrow} alt=""/>
                </button>
            </form>
        );
    }
}
export default Search;