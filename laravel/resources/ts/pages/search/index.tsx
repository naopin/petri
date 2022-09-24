import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const SearchPage: React.FC = () => {
    return (
        <Box>
            <Box style={{
                position: 'relative',
                height: '300px',
            }}>
                <img style={{
                    width: '100%',
                    maxHeight: '420px',
                    minHeight: '420px',
                    objectFit: 'cover'
                }} src="/images/main.jpeg" alt="picture" />
                <Box style={{
                    position: 'absolute',
                    width: '96%',
                    height: '150px',
                    left: 0,
                    right: 0,
                    bottom: '0px',
                    margin: 'auto',
                    maxWidth: '1040px',
                    minWidth: '840px'
                }}>
                    <Box style={{
                        display: 'block',
                        background: '#fff',
                        padding: '10px 10px',
                        border: 'solid 1px #919090',
                        borderRadius: '0 0 4px 4px',
                        boxShadow: '3px 5px 5px rgb(0 0 0 / 10%)',
                        zIndex: 3,
                    }}>
                        <Box>
                            <Box mb={3} style={{
                                width: '100%',
                                margin: 'auto'
                            }}>
                                <TextField id="outlined-basic" label="エリア" variant="outlined" />
                                <TextField id="outlined-basic" label="対象動物" variant="outlined" />
                                <TextField id="outlined-basic" label="フリーワード" variant="outlined" />
                            </Box>
                            <Button variant="outlined">検索</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box >
    );
};

export default SearchPage;
