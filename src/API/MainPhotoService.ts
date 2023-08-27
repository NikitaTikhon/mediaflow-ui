import {Photo} from "../type/Photo";

const API_URL = import.meta.env.VITE_API_URL;

export default class MainPhotoService {

    static async savePhoto(photo: File, token: string | undefined): Promise<Photo> {
        const formData = new FormData();
        formData.append("photo", photo);

        const response = await fetch(`${API_URL}/main/photo`, {
            method: "POST",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            throw (await response.json());
        }
        return response.json();
    }

    static async selectMainPhoto(publicId: string, token: string | undefined): Promise<Photo> {
        const response = await fetch(`${API_URL}/main/photo/${publicId}`, {
            method: "POST",
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

    static async fetchMainPhotoByUsername(username: string, token: string | undefined): Promise<Photo> {
        const response = await fetch(`${API_URL}/main/photo/user/${username}`, {
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


    static async deleteMainPhotoByPublicId(publicId: string, token: string | undefined) {
        await fetch(`${API_URL}/main/photo/${publicId}`, {
            method: "DELETE",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
    }

}