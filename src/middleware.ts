import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 需要登录才能访问的路由
const protectedRoutes = ['/dashboard', '/profile', '/settings']
// 已登录用户不能访问的路由
const authRoutes = ['/login', '/signup', '/tutorial']

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const isAuthenticated = request.cookies.has('auth-token') // 根据你的认证方式修改这里

    // 检查是否是受保护的路由
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        if (!isAuthenticated) {
            // 如果未登录，重定向到登录页面
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    // 检查是否是认证相关路由
    if (authRoutes.some(route => pathname.startsWith(route))) {
        if (isAuthenticated) {
            // 如果已登录，重定向到仪表板
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [...protectedRoutes, ...authRoutes]
} 