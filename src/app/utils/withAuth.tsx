import { redirect } from 'next/navigation'
import { useAuthStore } from '@/app/zustand/useAuthStore'

export function withAuth<P extends object>(
    WrappedComponent: React.ComponentType<P>
) {
    return function ProtectedRoute(props: P) {
        const { isAuthenticated, loading } = useAuthStore()

        if (loading) {
            return <div>Loading...</div>
        }

        if (!isAuthenticated) {
            redirect('/auth/login')
        }

        return <WrappedComponent {...props} />
    }
}