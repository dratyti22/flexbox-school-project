<template>
    <header
        class="border-b dark:border-gray-300 p-4 h-16 dark:bg-white font-semibold flex items-center justify-between z-10"
    >
        <span class="text-xl">
            Изучение Flexbox
            <span
                class="ml-2 py-1 pl-2 border-l dark:border-gray-400 font-normal text-sm dark:text-gray-700"
                >&nbsp;Веб-приложение для изучения Flexbox</span
            >
        </span>
        <span class="items-center flex">
            <DarkMod />
            <a
                href="https://github.com/dratyti22/flexbox-school-project/"
                target="_blank"
                rel="noreferrer noopener"
                title="View on GitHub"
                class="no-underline rounded text-gray-500 hover:text-gray-900 inline-block mr-4 w-6 h-6 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-40"
            >
                <GitHubIcon />
            </a>
            <button
                class="text-sm cursor-pointer rounded px-4 py-2 border-none mr-2 inline-block dark:text-blue-600 dark:bg-gray-100 dark:hover:bg-blue-50 dark:focus:bg-blue-50 font-semibold focus:outline-none focus:ring-4 focus:ring-offset-2 dark:focus:ring-blue-600 focus:ring-opacity-40"
                @click="resetDefaults"
            >
                Сброс к значениям по умолчанию
            </button>

            <button
                class="text-sm cursor-pointer rounded px-4 py-2 border-none inline-block text-white bg-blue-600 hover:bg-blue-600 font-semibold focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-40"
                @click="toggleMarkup"
            >
                {{ showFlexMarkup ? 'Посмотреть элементы' : 'Markup' }}
            </button>
        </span>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GitHubIcon from './GitHubIcon.vue'
import DarkMod from './DarkMod.vue'

export default {
    name: 'AppHeader',
    components: {
        DarkMod,
        GitHubIcon,
    },
    computed: {
        ...mapState(['showFlexMarkup']),
    },
    methods: {
        ...mapActions(['toggleMarkup', 'resetDefaults']),
    },
}
</script>
