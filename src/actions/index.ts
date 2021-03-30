import * as types from './../constants/addressData';
import * as addressDataTypes from './../types/addressData';

export const set_address_data = (addressData: addressDataTypes.addressData) => ({
    type: types.SET_ADDRESS_DATA,
    addressData,
});