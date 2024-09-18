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
                token: "true"
            }
        }
    },
    mutations: {
        toggleMenu (state: State): void {
            state.template.menu.open = !state.template.menu.open;
        }
    },
    actions: {
        toggleMenu ({ commit }: any) {
            commit('toggleMenu');
        }
    },
    getters: {
        sideMenuOpen: (state: State) => state.template.menu.open,
        user: (state: State) => state.user
    }
});