export const getCurrentUserId = () => {
    const token = localStorage.getItem('token');
    if (token)
        return JSON.parse(atob(token.split(".")[1])).id;
    return null
}