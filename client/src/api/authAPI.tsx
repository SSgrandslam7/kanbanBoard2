import { UserLogin } from "../interfaces/UserLogin";

const BASE_URL = import.meta.env.PROD
  ? 'https://kanbanboard-u0wl.onrender.com'
  : 'http://localhost:3001';

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    // Check Content-Length before parsing
    const contentLength = response.headers.get("Content-Length");
    if (!contentLength || parseInt(contentLength) === 0) {
      throw new Error('Empty response body');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export { login };