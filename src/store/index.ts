import { createStore } from 'vuex';

interface State {
    template: {
        menu: {
            open: boolean
        }
    },
    user: {
        auth: {
            token: String | null
        }
    }
}

export default createStore({
    state: {
        template: {
            menu: {
                open: false
            }
        },
        user: {
            auth: {
                token: null
            }
        }
    },
    mutations: {
        toggleMenu (state: State): void {
            state.template.menu.open = !state.template.menu.open;
        },
        mutationUserToken (state: State, value: any): void {
            state.user.auth.token = value.password
        }
    },
    actions: {
        toggleMenu ({ commit }: any) {
            commit('toggleMenu');
        },
        setUserTokenAction ({commit}: any) {
            commit('mutationUserToken')
        }

    },
    getters: {
        sideMenuOpen: (state: State) => state.template.menu.open,
        user: (state: State) => state.user
    }
});