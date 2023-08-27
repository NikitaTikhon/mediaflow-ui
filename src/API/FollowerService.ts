import {FollowsInfoInf} from "../type/FollowsInfo";

const API_URL = import.meta.env.VITE_API_URL;

export default class FollowerService {

    static async isFollower(userReceiverId: string | undefined, token: string | undefined) {
        const response = await fetch(`${API_URL}/follower?userReceiverId=${userReceiverId}`, {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw (await response.json());
        }
        return response.json();
    }

    static async countFollows(username: string, token: string | undefined): Promise<FollowsInfoInf> {
        const response = await fetch(`${API_URL}/follower/${username}/count`, {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        });

        if (!response.ok) {
            throw (await response.json());
        }
        return response.json();
    }

    static async saveFollower(userReceiverId: string | undefined, token: string | undefined) {
        await fetch(`${API_URL}/follower?userReceiverId=${userReceiverId}`, {
            method: "POST",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
    }

    static async deleteFollower(userReceiverId: string | undefined, token: string | undefined) {
        await fetch(`${API_URL}/follower?userReceiverId=${userReceiverId}`, {
            method: "DELETE",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
    }

}
