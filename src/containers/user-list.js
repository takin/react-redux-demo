import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserList extends Component {

    render() {
        return(
            this.props.users.map(user => {
                return(
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                    </div>
                );
            })
        );
    }

}

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(UserList);