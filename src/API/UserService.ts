import {UserMinInfo} from "../type/UserMinInfo";
import {User} from "../type/User";

const API_URL = import.meta.env.VITE_API_URL;

export default class UserService {

    static async fetchUserByUsername(username: string, token: string | undefined): Promise<User> {

        const response = await fetch(`${API_URL}/user/${username}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw (await response.json());
        }
        return response.json();
    }

    static async fetchUsersByUsername(username: string, page: number, token: string | undefined): Promise<UserMinInfo[]> {
        const response = await fetch(`${API_URL}/users?username=${username}&page=${page}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw (await response.json());
        }
        return response.json();
    }

    static async fetchUserFollows(username: string = "", page: number, token: string | undefined): Promise<UserMinInfo[]> {
        const response = await fetch(`${API_URL}/follows?username=${username}&page=${page}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw (await response.json());
        }
        return response.json();
    }
}
