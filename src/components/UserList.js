import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../store/index.js";
import {addUser} from '../store/index.js';
import {useThunk} from "../store/hooks/useThunk.js";


function UserList() {
    const [doFetchUsers, isLoadingUser, loadingUserError] = useThunk(fetchUsers);
    const[doCreateUser,isCreatingUser,creatingUserError] = useThunk(addUser);
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.users);
    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers]);

    if(isLoadingUser) {
        return 'Loading...';
    }
    if(loadingUserError){
        return <div>Error: While Fetching the data</div>;
    }
    const handleAddUser = () =>{
        doCreateUser();
    }
    const renderUsers = data.map((user) => {
        return (
            <div className="mb-2 border rounded" key={user.id}>
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        );
    })
    return <>
        <div className="flex flex-row justify-between m-3">
            <h1>Users</h1>
            { isCreatingUser ? 'Creating User....' :<button onClick={handleAddUser}>+ Add User</button> }
            {creatingUserError && 'Error Occurred...'}
        </div>
        {renderUsers}
    </>
};

export default UserList;