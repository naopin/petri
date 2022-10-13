import { LoadingButton } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useRegister } from '../../queries/AuthQuery';

export type FormValue = {
    name: string
    email: string,
    password: string,
    password_confirmation: string
}

const Register = () => {
    const registerApi = useRegister();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const onSubmit: SubmitHandler<FormValue> = (value: FormValue) => {
        setLoading(true);
        registerApi.mutate(value);
        history.push('/');
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
                pt: "64px",
                pb: "62px",
                px: "60px",
                borderRadius: "16px",
                boxShadow: "0 8px 16px rgb(34 41 67 / 8%)"

            }}>
                <Typography variant="h1" mb={3} sx={{ fontSize: 28, fontWeight: "bold" }}>Sign Up</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="名前"
                            {...register('name', {
                                required: '名前は必須です'
                            })}
                        />
                        {errors.name && <Box sx={{ fontSize: 14, color: "error.main" }}>{errors.name.message}</Box>}
                    </Box>
                    <Box mb={2} >
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
                    <Box mb={2} >
                        <TextField
                            fullWidth
                            id="password"
                            type="password"
                            variant="outlined"
                            label="パスワード"
                            {...register('password', {
                                required: '入力してください',
                                minLength: {
                                    value: 8,
                                    message: '8文字以上で入力してください'
                                }
                            })}
                        />
                        {errors.password && <Box sx={{ fontSize: 14, color: "error.main" }}>{errors.password.message}</Box>}
                    </Box>
                    <Box mb={2} >
                        <TextField
                            fullWidth
                            type="password"
                            variant="outlined"
                            label="パスワード確認"
                            {...register('password_confirmation', {
                                required: 'パスワードは必須です',
                                validate: {
                                    match: value => value === (document.getElementById('password') as HTMLInputElement).value || 'パスワードが一致しません'
                                }
                            })}
                        />
                        {errors.password_confirmation && <Box sx={{ fontSize: 14, color: "error.main" }}>{errors.password_confirmation.message}</Box>}
                    </Box>
                    <Box mb={4}>
                        <LoadingButton type="submit" loading={loading} variant="contained" fullWidth>Sign Up</LoadingButton>
                        {/* {errors.submit && <span className="block text-red-400">{errors.submit.message}</span>} */}
                    </Box>
                    <Box sx={{ textAlign: "center" }}><Link to="/login">アカウントを持っている方はこちら</Link></Box>
                </form>
            </Box>
        </Box>
    );
};

export default Register;
