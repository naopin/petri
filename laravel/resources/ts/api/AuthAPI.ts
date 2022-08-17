import axios from "axios";
import { RegisterUser } from "../types/RegisterUser";
import { User } from "../types/User";

const getUser = async () => {
    const { data } = await axios.get<Array<User>>("api/user");
    return data;
};

const login = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    await axios.get("/sanctum/csrf-cookie", { withCredentials: true });
    const { data } = await axios.post<User>(`api/login`, { email, password });
    return data;
};

const logout = async () => {
    const { data } = await axios.post<User>(`api/logout`);
    return data;
};

const register = async ({
    email,
    name,
    password,
}: {
    name: string;
    email: string;
    password: string;
}) => {
    const { data } = await axios.post<RegisterUser>(`api/register`, {
        name,
        email,
        password,
    });

    return data;
};

export { getUser, login, logout, register };
