import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
    isAuthenticated: JSON.parse(!!localStorage.getItem('user')),
    token: JSON.parse(localStorage.getItem('user')),
    });
    const [user, setUser] = useState({})

    const login = (token) => {
    setAuth({ isAuthenticated: true, token: token });
    localStorage.setItem('user', JSON.stringify(token));
    };

    const logout = () => {
    setAuth({ isAuthenticated: false, token: null });
    localStorage.removeItem('user');
    };

    useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('user'));
    if (storedToken) {
        setAuth({ isAuthenticated: true, token: storedToken });
    }
    }, []);

    return (
    <AuthContext.Provider value={{ auth, user, setUser, login, logout }}>
        {children}
    </AuthContext.Provider>
    );
};
