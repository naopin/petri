
import React from 'react';
import { usePrefectures } from '../../../queries/PrefectureQuey';
import { PrefectureItem } from './PrefectureItem';

export const PrefectureList: React.VFC = () => {
    const { data: prefectures } = usePrefectures();
    return (
        <>
            <div className="inner">
                <ul className="task-list">
                    {prefectures?.map(prefecture => (
                        <PrefectureItem key={prefecture.id} prefecture={prefecture} />
                    ))}
                </ul>
            </div>
        </>
    );
};
