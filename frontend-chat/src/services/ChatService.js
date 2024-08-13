export const getMessages = async (token) => {
    const response = await fetch('http://localhost:3000/api/chat', {
        headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return data;
};

export const sendMessage = async (message, token) => {
    const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return data;
};
