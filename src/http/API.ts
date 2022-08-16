import axios from 'axios';

import { UserData, Filter } from '../interfaces';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
const UserRegistration = async (values:UserData) => {
    return await $host.post('users', values);
};
const UserAuthorization = async (data:UserData) => {
    return await $host.post('login', data);
};
const fetchProducts = async (filter:Filter) => {
    const options:Filter = {};
    if   (filter._page) options._page=filter._page;
    if   (filter._limit) options._limit=filter._limit;
    if   (filter._sort) options._sort=filter._sort;
    if   (filter._order) options._order=filter._order;
    if   (filter.category) options.category=filter.category;
    if   (filter.region) options.region=filter.region;
    if   (filter.condition) options.condition=filter.condition;
    return await $host.get('goods', {params: options});
};
const fetchProduct = async (ID:string) => {
    return await $host.get('goods', {params: {id:ID}});
};
const fetchRegions = async () => {
    return await $host.get('regions');
};
const fetchConditions = async () => {
    return await $host.get('conditions');
};
const fetchExchangeRates = async () => {
    return await $host.get('currencies');
};

export {
    $host,
    UserRegistration,
    UserAuthorization,
    fetchProducts,
    fetchProduct,
    fetchRegions,
    fetchConditions,
    fetchExchangeRates,
};