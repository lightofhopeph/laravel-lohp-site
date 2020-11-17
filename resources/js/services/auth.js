export const setUserToken = token =>
    localStorage.setItem('lohpUserToken', token);
export const setAdminToken = token =>
    localStorage.setItem('lohpAdminToken', token);

export const isUserLoggedIn = () => localStorage.getItem('lohpUserToken');
export const isAdminLoggedIn = () => localStorage.getItem('lohpAdminToken');

export const userLogout = callback => {
    localStorage.removeItem('lohpUserToken');
    window.location = '/login';
    callback();
};
export const adminLogout = callback => {
    localStorage.removeItem('lohpAdminToken');
    window.location = '/portal/login';
    callback();
};
