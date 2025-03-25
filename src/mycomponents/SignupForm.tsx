'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Controller } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type RegisterFormData = {
    countryCode: string; // +1, +86 等
    phone: string;
    code: string;
    email?: string;
    password: string;
};

export function SignUpForm() {
    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors },
        control,
    } = useForm<RegisterFormData>({
        mode: 'onChange',
    });

    const [isSending, setIsSending] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);

    const onSubmit = (data: RegisterFormData) => {
        console.log('注册信息：', data);
        // 调用你的注册接口
    };

    const sendCode = () => {
        const phone = getValues('phone');
        if (!phone) {
            setError('phone', { message: '请输入手机号' });
            return;
        }

        // 模拟发送验证码
        setIsSending(true);
        setTimeLeft(60);

        console.log('发送验证码到手机：', phone);

        const timer = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(timer);
                    setIsSending(false);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
    };

    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-xl">Welcome SignUp</CardTitle>
                <CardDescription>
                    Please enter your information
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                    {/* 手机号 */}
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="flex items-center gap-2">
                            <select
                                id="countryCode"
                                {...register('countryCode')}
                                defaultValue="+1"
                                className="rounded-md border px-2 py-2 text-sm"
                            >
                                <option value="+1">us +1</option>
                                <option value="+86">cn +86</option>
                                {/* 可根据需要添加更多 */}
                            </select>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="请输入手机号"
                                {...register('phone', {
                                    required: '请输入手机号', pattern: {
                                        value: /^\d{10,11}$/, // 允许 10~11 位数字（美中通用）
                                        message: '请输入有效手机号',
                                    },
                                })}
                            />
                        </div>
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    </div>

                    {/* 验证码 + 发送按钮 */}
                    <div className="flex gap-6 items-center justify-between">
                        <div className="grid gap-2">
                            <Label htmlFor="code">Enter your one-time password</Label>
                            <Controller
                                control={control}
                                name="code"
                                rules={{ required: '请输入验证码', minLength: { value: 6, message: '请输入6位验证码' } }}
                                render={({ field }) => (
                                    <InputOTP maxLength={6} {...field}>
                                        <InputOTPGroup>
                                            {[...Array(6)].map((_, i) => (
                                                <InputOTPSlot key={i} index={i} />
                                            ))}
                                        </InputOTPGroup>
                                    </InputOTP>
                                )}
                            />
                            {errors.code && (
                                <p className="text-sm text-red-500">{errors.code.message}</p>
                            )}
                        </div>
                        <Button
                            type="button"
                            disabled={isSending}
                            onClick={sendCode}
                            className="mt-6"
                        >
                            {isSending ? `${timeLeft}s` : '发送验证码'}
                        </Button>
                    </div>

                    {/* 密码 */}
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="设置登录密码"
                            {...register('password', {
                                required: '请输入密码',
                                minLength: { value: 6, message: '至少6位' },
                            })}
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    <Button type="submit" className="w-full">
                        注册
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
