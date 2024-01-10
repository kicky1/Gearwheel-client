import { AuthorizationStoreState } from '@/types/authorization.types';
import { User } from '@/types/user.types';
import { create } from 'zustand';

export const useAuthorizationStore = create<AuthorizationStoreState>((set, get) => ({
    user: {
        dateJoined: null,
        email: '',
        id: 0,
        isActive: false,
        isStaff: false,
        isSuperuser: false,
        name: '',
        username: '',
    },
    authorized: false,
    setUser: (user: User) => {
        set((state: { user: User }) => ({
            user: { ...state.user, ...user },
        }))
    },
    setAuthorized: (flag: boolean) => {
        set(() => ({
            authorized: flag,
        }))
    },
    logoutUser: () => {
        set(() => ({
            authorized: false,
            user: {},
        }))
    },
}));

export const { logoutUser, setUser, setAuthorized } = useAuthorizationStore.getState()