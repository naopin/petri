
import React from 'react';
import { PrefectureList } from './component/PrefectureList';

const PrefecturePage: React.VFC = () => {
    // const { data: prefectures, status } = usePrefectures();
    return (
        <>
            <PrefectureList />
        </>
    );
};

export default PrefecturePage;
