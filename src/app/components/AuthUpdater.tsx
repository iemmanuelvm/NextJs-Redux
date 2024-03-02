import { setAuthState } from "../slice/authSlice";
import { useAppDispatch } from "../store/store";
export const AuthUpdater = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => dispatch(setAuthState(true))}>Log in</button>
            <button onClick={() => dispatch(setAuthState(false))}>Log out</button>
        </div>
    );
};