
import instance from "./instance";

export const getListUsers = () => {
    return instance.get('/users');
}
export const signup = (user: any) => {
    return instance.post("/signup", user)   
}
export const signin = (user: any) => {
    return instance.post("/signin", user)   
}
