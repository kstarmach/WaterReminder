import axios from "axios";

export async function getAll() {
    const response = await fetch('api/drinklog');
    return await response.json();
}
