import { SET_ADDRESS_DATA } from '../constants/addressData';
import * as actionsTypes from './../types/actions';

function addressData(state = {}, action: actionsTypes.IActionAdressData) {
    switch(action.type){
        case SET_ADDRESS_DATA:
            return action.addressData;
        default:
            return state;
    }
}

export default addressData;