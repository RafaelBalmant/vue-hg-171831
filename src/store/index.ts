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
                open: false
            }
        }
    },
    mutations: {
        toggleMenu (): void {
            this.state.template.menu.open = !this.getters.sideMenuOpen;
        }
    },
    actions: {
        toggleMenu ({ commit }) {
            commit('toggleMenu');
        }
    },
    getters: {
        sideMenuOpen: (state: State) => state.template.menu.open
    }
});