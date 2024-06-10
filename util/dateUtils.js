export const formatDate = (dateString) => {
    const date = new Date(dateString);
    date.setUTCHours(16, 0, 0, 0);
    const options = {
        timeZone: 'America/Los_Angeles',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }
    return date.toLocaleString('en-US', options);
}