import * as addressDataTypes from './addressData';
export interface IActionAdressData {
    type: string,
    addressData?: addressDataTypes.addressData;
}