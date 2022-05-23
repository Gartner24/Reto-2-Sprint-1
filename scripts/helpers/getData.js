const GetData = async (url) => {
    try {
        let data = axios.get(url)
        return data;
    } catch (error) {
        alert('"GetData" FATAL ERROR: ' + error);
    }
};

export default GetData;