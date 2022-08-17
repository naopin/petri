import axios from "axios";
import { Prefecture } from "../types/Prefecture";

const getPrefectures = async () => {
    const { data } = await axios.get<Array<Prefecture>>("api/prefectures");
    console.log(data);
    return data;
};

export { getPrefectures };
