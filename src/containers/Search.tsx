import { connect } from 'react-redux';
import Search from './../components/search';
import * as actionsToDispatch from './../actions/index';
import * as types from './../types/addressData';

function mapDispatchToProps(dispatch: Function, props: {}){
    const actions = {
        setAddressData: (data: types.addressData): any => dispatch(actionsToDispatch.set_address_data(data)),
    }
    return { actions };
}
export default connect(null, mapDispatchToProps)(Search);