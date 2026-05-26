export const register = ({ email, password, username }) => {
    return new Promise((resolve, reject) => {
        if (!email || !password || !username) {
            return reject(new Error("Missing required fields"));
        }
        resolve({
            data: {
                _id: "fake-id-" + Date.now(),
                email,
                username,
            },
        });
    });
};

export const authorize = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        if (!email || !password) {
            return reject(new Error("Missing email or password"));
        }
        resolve({ token: "fake-jwt-token-12345" });
    });
};

export const checkToken = (token) => {
    return new Promise((resolve, reject) => {
        if (!token) {
            return reject(new Error("No token provided"));
        }
        resolve({
            data: {
                _id: "fake-id",
                email: "demo@example.com",
                username: "Demo User",
            },
        });
    });
};
