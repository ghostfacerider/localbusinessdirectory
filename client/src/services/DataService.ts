import { AxiosResponse, AxiosError } from 'axios';
import axiosInstance from './axiosInstance'
import * as authService from '../services/UserService';
import * as businessTypes from '../config/business-types'

// // Get all players
// export const getPlayers = async (callback: (error: AxiosError | null) => void): Promise<void> => {
//     axios
//         .get(`${process.env.REACT_APP_API_URL}/players`)
//         .then((response: AxiosResponse) => {
//             console.log(response.data);
//             callback(response.data);
//         })
//         .catch((error: AxiosError) => {
//             console.error(error);
//             callback(null, error.response);
//         });
// };

// Get a single player by ID
export const getOnePlayer = async (id: string,
    callback: (data: businessTypes.Player | null, error: AxiosError | null) => void): Promise<void> => {
    try {
        const response: AxiosResponse = await axiosInstance.get(`/api/players/${id}`);
        console.log(response.data);
        callback(response.data, null);
    } catch (error) {
        console.error(error);
        callback(null, error as AxiosError);
    }
};

// Create a new player
export const createPlayer = async (create: businessTypes.Player, callback: (error: AxiosError | null) => void): Promise<void> => {
    axiosInstance.post(`/api/players`, create,
        {
            headers: { 'x-auth-token': authService.getToken() },
        }
    )
        .then((response: AxiosResponse) => {
            if (response.status === 201) {
                console.log(response);
                callback(null);
            }
        })
        .catch((error: AxiosError) => {
            console.error(error);
            callback(error);
        });
};

// Update an existing player
export const updatePlayer = async (
    updateId: string,
    updatePlayer: businessTypes.Player,
    callback: (data: businessTypes.Player | null, error: AxiosError | null) => void
): Promise<void> => {
    try {
        const response: AxiosResponse<businessTypes.Player> = await axiosInstance.put(
            `$/players/${updateId}`,
            updatePlayer,
            {
                headers: { 'x-auth-token': authService.getToken() },
            }
        );
        callback(response.data, null);
    } catch (error) {
        console.error(error);
        callback(null, error as AxiosError);
    }
};


// // Delete a player by ID
// export const deletePlayer = (deleteId: string, callback: Callback): void => {
//     axios
//         .delete(`${process.env.REACT_APP_API_URL}/players/${deleteId}`, {
//             headers: { 'x-auth-token': authService.getToken() },
//         })
//         .then((response: AxiosResponse) => {
//             callback();
//         })
//         .catch((error: AxiosError) => {
//             console.error(error);
//             callback(null, error.response);
//         });
// };
