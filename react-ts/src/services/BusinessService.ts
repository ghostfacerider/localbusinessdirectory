import axiosInstance from './axiosInstance'
import * as businessTypes from '../config/business-types'
import { AxiosResponse, AxiosError } from 'axios';

export const getBusinessDetails = async () => {
    try {
        const response = await axiosInstance.get("/api/businessDetails");
        return response.data;
    } catch (error) {
        console.error("Error fetching business details:", error);
        throw error;
    }
};

export const searchApiRequest = async (params: businessTypes.SearchParams) => {
    try {
        const response = await axiosInstance.get('/api/search', {
            params,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const getBusinessDetailById = async (businessId: string,
    callback: (data: businessTypes.BusinessDetail | null, error: AxiosError | null) => void): Promise<void> => {
    try {
        const response: AxiosResponse = await axiosInstance.get(`/api/businessDetail/${businessId}`);
        console.log(response.data);
        callback(response.data, null);
    } catch (error) {
        console.error(error);
        callback(null, error as AxiosError);
    }
};
