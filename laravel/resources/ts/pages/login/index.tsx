
import { LoadingButton } from '@mui/lab';
import { Box, Link, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from '../../queries/AuthQuery';

export type FormValue = {
    email: string,
    password: string,
}

const LoginPage = () => {
    const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<FormValue>();
    const [loading, setLoading] = useState(false);
    const login = useLogin();

    const onSubmit: SubmitHandler<FormValue> = (value: FormValue) => {
        setLoading(true);
        login.mutate(value);
    };

    return (
        <Box sx={{
            width: "100%",
            height: "calc(100vh - 44px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Box sx={{
                width: "520px",
                height: "480px",
                pt: "64px",
                pb: "62px",
                px: "60px",
                borderRadius: "16px",
                boxShadow: "0 8px 16px rgb(34 41 67 / 8%)"

            }}>
                <Typography variant="h1" mb={3} sx={{ fontSize: 28, fontWeight: "bold" }}>ログイン</Typography>
                <form onSubmit={e => { clearErrors(); handleSubmit(onSubmit)(e); }}>
                    <Box mb={4} >
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="メールアドレス"
                            {...register('email', {
                                required: 'メールアドレスは必須です'
                            })}
                        />
                        {errors.email && <Box sx={{ fontSize: 14, color: "error.main" }}>{errors.email.message}</Box>}
                    </Box>
                    <Box mb={4}>
                        <TextField
                            fullWidth
                            id="password"
                            type="password"
                            variant="outlined"
                            label="パスワード"
                            {...register('password', {
                                required: 'パスワードは必須です',

                            })}
                        />
                        {errors.password && <Box sx={{ fontSize: 14, color: "error.main" }}>{errors.password.message}</Box>}
                    </Box>
                    <Box mb={4}>
                        <LoadingButton loading={loading} type="submit" variant="contained" fullWidth>Sign In</LoadingButton>
                        {/* {errors.submit && <span className="block text-red-400">{errors.submit.message}</span>} */}
                    </Box>
                    <Box sx={{ textAlign: "center" }}><Link href="#">パスワードをお忘れの方</Link></Box>
                </form>
            </Box>
        </Box>

    );
};

export default LoginPage;
