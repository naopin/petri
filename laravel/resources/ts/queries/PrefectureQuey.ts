import { useQuery } from "react-query";
import * as api from "../api/PrefectureAPI";

const usePrefectures = () => {
    return useQuery("Prefectures", () => api.getPrefectures());
};

export { usePrefectures };
