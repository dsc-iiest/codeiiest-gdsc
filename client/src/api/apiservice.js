import axios from "axios";

export const fetchData = async (endpoint) => {
    try {
        // throw RangeError("Its nothing")
        const response = await axios.get(`${endpoint}`, {
            headers: {
                // You can add any custom headers you need here
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
