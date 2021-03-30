import { connect } from 'react-redux';
import * as actionsToDispatch from './../actions/index';
import * as types from './../types/addressData';

import App from './../components/App';

function mapDispatchToProps(dispatch: Function, props: {}){
    const actions = {
        setAddressData: (userIP: types.addressData): any => dispatch(actionsToDispatch.set_address_data(userIP)),
    }
    return { actions };
}

export default connect(null, mapDispatchToProps)(App);