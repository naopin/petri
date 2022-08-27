import { Box, Button, FormControl, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react';

const ProfilePage: React.FC = () => {
    const prefectures =
        ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
            "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
            "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
            "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
            "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
            "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
            "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];

    return (
        <Box width='100%'>
            <Box sx={{
                margin: '0 auto',
                maxWidth: '960px',
                minHeight: '88vh',
                padding: '0 75px',
                width: '90%'
            }}>
                <Box sx={{
                    marginTop: '40px'
                }}>
                    <h1 style={{
                        fontSize: '20px',
                        margin: '0 0 20px',
                        fontWeight: 700
                    }}>プロフィール</h1>

                    <Box sx={{
                        boxShadow: '0 2px 12px 0 rgb(0 0 0 / 10%)',
                        border: '1px solid #ebeef5',
                        backgroundColor: '#fff',
                        color: '#303133',
                        transition: '.3s'

                    }}>
                        <Box padding='30px 20px'>
                            <Typography fontSize='16px' fontWeight={600} mb={3}>基本情報</Typography>
                            <FormControl fullWidth size="small">
                                <TextField
                                    label="ニックネーム"
                                    id="nickName"
                                    required
                                    sx={{ width: '100%', marginBottom: '24px' }}
                                />

                                <TextField
                                    label="メールアドレス"
                                    id="mail"
                                    required
                                    sx={{ width: '100%', marginBottom: '24px' }}
                                />

                                <TextField
                                    select
                                    id="age"
                                    value={1}
                                    label="年代"
                                    sx={{ width: '100%', marginBottom: '24px' }}
                                // onChange={handleChange}
                                >
                                    <MenuItem value={10}>10代</MenuItem>
                                    <MenuItem value={20}>20代</MenuItem>
                                    <MenuItem value={30}>30代</MenuItem>
                                    <MenuItem value={40}>40代</MenuItem>
                                    <MenuItem value={50}>50代</MenuItem>
                                    <MenuItem value={60}>60代</MenuItem>
                                    <MenuItem value={70}>70代</MenuItem>
                                    <MenuItem value={80}>80代</MenuItem>
                                </TextField>

                                <TextField
                                    select
                                    id="area"
                                    value={1}
                                    label="地域"
                                    sx={{ width: '100%', marginBottom: '24px' }}
                                // onChange={handleChange}
                                >
                                    {prefectures.map((name, index) => (
                                        <MenuItem
                                            key={index}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}

                                </TextField>

                                <Typography fontSize='16px' fontWeight={600} mb={3}>アカウント</Typography>
                                <TextField
                                    label="インスタグラム"
                                    id="instagram"
                                    value='https://www.instagram.com/'
                                    sx={{ width: '100%', marginBottom: '24px' }}
                                />

                                <Button sx={{ width: '30%', margin: '0 auto' }} variant="contained">保存</Button>

                            </FormControl>

                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
};

export default ProfilePage;
