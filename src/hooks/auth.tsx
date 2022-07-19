import { getListUsers, signin, signup } from "../api/auth";
import useSWR, { useSWRConfig } from "swr"

export const useAuth = () => {

    const { data, error, mutate } = useSWR("/users");
    // get list user
    // const fetcher = async () => {
    //     const { data } = await getListUsers()
    //     console.log(data);
    //     return data
    // };

    // signup
    const signUp = async (user) => {
        const { data: userRegister } = await signup(user);
        return {...data, userRegister}
        // mutate([...data, userRegister]);
    };

    // signin
    const signIn = async (user) => {
        const { data: userList } = await getListUsers();    
        userList.map(async (userData) => {
            if (user.email === userData.email) {
                const { data: userLogin } = await signin(user);
                localStorage.setItem("User", JSON.stringify(userData));
                console.log("Signin successfully");
            }
        })
    };

    // // logout
    // const logOut = () => {
    //     const data = localStorage.getItem("User");
    //     mutate("/logout", async() =>{
    //         if(!data){
    //             return <div>Error acount</div>
    //         } 
    //         localStorage.removeItem("User");
    //         return <div>Logout Success</div>
    //     })
    // }
    return {
        data,
        error,
        signUp,
        signIn
    }
}