import { createStore } from 'vuex';

interface State {
    template: {
        menu: {
            open: boolean
        }
    }
}

export default createStore({
    state: {
        template: {
            menu: {
                open: true
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
        sideMenuOpen: (state: State) => state.template.menu.open
    }
});