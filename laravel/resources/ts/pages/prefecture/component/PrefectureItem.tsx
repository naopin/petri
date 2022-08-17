
import React from 'react';
import { Prefecture } from '../../../types/Prefecture';

type Props = {
    prefecture: Prefecture
}

export const PrefectureItem: React.FC<Props> = ({ prefecture }) => {
    return (
        <>
            <div>
                <span>{prefecture.id}</span>
                <span>{prefecture.name}</span>
            </div>
        </>
    );
};
