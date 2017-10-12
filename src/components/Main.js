import React, {Component} from 'react';

import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';

class Main extends Component {
    render() {
        return(
            <div>
                <h3>List Uf Users</h3>
                <UserList />
                <h3>Selected User</h3>
                {/* <UserDetails /> */}
            </div>
        );
    }
}

export default Main;