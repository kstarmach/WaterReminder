import axios from "axios";

export async function getAll() {
    const response = await fetch('waterreminder');
    return await response.json();
}

export async function increasePost() {
    const response = await axios.post('waterreminder');
    return await response.data;
}


export async function update(newCups) {

    return await axios
        .put(`waterreminder/decrease`)
        .then(response => response.data)
}

export default update;