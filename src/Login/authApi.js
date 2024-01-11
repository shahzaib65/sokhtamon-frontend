export function loginUser(userData) {
    return new Promise(async (resolve) => {
      const response = await fetch('https://sokhtamon-backend-production.up.railway.app/api/user/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      console.log(data)
      resolve({ data });
    });
  }