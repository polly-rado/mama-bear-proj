import axios from "axios";

export const api = axios.create({
    baseURL:"http://127.0.0.1:8000/api/"
});

export const signUp = async(email, password) => {
    let response = await api.post("sign_up/", {
        'email': email,  
        'password': password, 

    });

    if (response.status === 201){
        let {user, token} = response.data;
        localStorage.setItem('token', token);
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
        return user;
    }
    alert("credentials failed");
    return null;
};

export const signIn = async(email, password) => {
    try {
        let response = await api.post("log_in/", {
            'email': email,  
            'password': password, 

        });

        if (response.status === 200){
            let {user, token} = response.data;
            localStorage.setItem('token', token);
            api.defaults.headers.common["Authorization"] = `Token ${token}`;
            return user;
        } else {
            alert("credentials failed");
            return null;
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return null;
    }
};

export const logOut = async () => {
    let response = await api.post("log_out/")
    if (response.status === 204){
        localStorage.removeItem("token")
        delete api.defaults.headers.common["Authorization"]
        return null
    }
    alert("Something went wrong during log out") 
}


export const confirmUser = async() => {
    let token = localStorage.getItem("token");
    if (token) {
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
        let response = await api.get("info/");
        return response.data.user;
    }
    return null;
};

export const createChild = async (childData) => {
    try {
        let response = await api.post('children/', childData);
        return response.data;
    } catch (error) {
        console.error('Error creating child profile:', error);
        return null;
    }
};

export const getChildren = async () => {
    try {
        let response = await api.get('children/');
        return response.data;
    } catch (error) {
        console.error('Error fetching children:', error);
        return [];
    }
};

export const getChild = async (childId) => {
    try {
        let response = await api.get(`children/${childId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching child profile:', error);
        return null;
    }
};

export const updateChild = async (childId, childData) => {
    try {
        let response = await api.put(`children/${childId}/`, childData);
        return response.data;
    } catch (error) {
        console.error('Error updating child profile:', error);
        return null;
    }
};

export const deleteChild = async (childId) => {
    try {
        await api.delete(`children/${childId}/`);
        return true;
    } catch (error) {
        console.error('Error deleting child profile:', error);
        return false;
    }
};


export const addLog = async (childId, type, logData) => {
    try {
        let response = await api.post(`children/${childId}/${type}-logs/`, logData);
        return response.data;
    } catch (error) {
        console.error(`Error adding ${type} log:`, error);
        return null;
    }
};

export const updateLog = async (childId, type, logId, logData) => {
    try {
        let response = await api.put(`children/${childId}/${type}-logs/${logId}/`, logData);
        return response.data;
    } catch (error) {
        console.error(`Error updating ${type} log:`, error);
        return null;
    }
};

export const deleteLog = async (childId, type, logId) => {
    try {
        await api.delete(`children/${childId}/${type}-logs/${logId}/`);
        return true;
    } catch (error) {
        console.error(`Error deleting ${type} log:`, error);
        return false;
    }
};
























































































