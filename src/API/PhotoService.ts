import {Photo} from "../type/Photo";

const API_URL = import.meta.env.VITE_API_URL;

export default class PhotoService {

    static async savePhoto(photo: File, token: string | undefined): Promise<Photo> {
        const formData = new FormData();
        formData.append("photo", photo);

        const response = await fetch(`${API_URL}/photo`, {
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

    static async fetchPhotosByUsername(username: string, page: number, token: string | undefined): Promise<Photo[]> {
        const response = await fetch(`${API_URL}/photo/user/${username}?page=${page}`, {
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

    static async deletePhotoByPublicId(publicId: string, token: string | undefined) {
        await fetch(`${API_URL}/photo/${publicId}`, {
            method: "DELETE",
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
    }

}