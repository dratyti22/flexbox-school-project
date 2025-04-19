<template>
    <section class="px-4 pb-4">
        <p
            class="leading-normal mb-4 p-4 text-sm text-blue-900 bg-blue-50 rounded"
        >
            Отредактируйте свойства контейнера flex здесь. Щелкните элемент
            справа, чтобы отредактировать его свойства.
        </p>
        <button
            class="rounded mb-6 p-2 font-semibold bg-blue-600 hover:bg-blue-600 text-white cursor-pointer w-full text-center focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-40"
            @click="addFlexItem"
        >
            Добавить элемент
        </button>
        <form>
            <div class="mb-4">
                <label class="mb-2 lowercase text-base font-semibold block"
                    >Flex-direction (Направление размещения
                    flex-элементов)</label
                >
                <BaseSelect
                    :value="flexDirection"
                    @input="setFlexDirection"
                    :options="flexProperties.flexDirection"
                />
            </div>

            <div class="mb-4">
                <label class="mb-2 lowercase text-base font-semibold block"
                    >Flex-wrap<br />
                    (Перенос элементов на следующую строку при нехватке
                    места)</label
                >
                <BaseSelect
                    :value="flexWrap"
                    @input="setFlexWrap"
                    :options="flexProperties.flexWrap"
                />
            </div>

            <div class="mb-4">
                <label class="mb-2 lowercase text-base font-semibold block"
                    >Justify-content<br />
                    (Выравнивание элементов по главной оси (горизонтально, если
                    flex-direction: row))</label
                >
                <BaseSelect
                    :value="justifyContent"
                    @input="setJustifyContent"
                    :options="flexProperties.justifyContent"
                />
            </div>

            <div class="mb-4">
                <label class="mb-2 lowercase text-base font-semibold block"
                    >Align-items<br />
                    (Выравнивание по поперечной оси (вертикально, если
                    flex-direction: row))</label
                >
                <BaseSelect
                    :value="alignItems"
                    @input="setAlignItems"
                    :options="flexProperties.alignItems"
                />
            </div>

            <div class="mb-4">
                <label class="mb-2 lowercase text-base font-semibold block"
                    >Align-content<br />
                    (Выравнивание нескольких строк flex-элементов по поперечной
                    оси)</label
                >
                <BaseSelect
                    :value="alignContent"
                    @input="setAlignContent"
                    :options="flexProperties.alignContent"
                />
            </div>
            <div class="mb-4">
                <label class="mb-2 lowercase text-base font-semibold block">
                    Gap (Отступы между элементами)
                </label>
                <BaseSelect
                    :value="gap"
                    @input="setGap"
                    :options="flexProperties.gap"
                />
            </div>
        </form>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseSelect from './BaseSelect.vue'

export default {
    name: 'SidebarContainer',
    components: {
        BaseSelect,
    },
    computed: mapState([
        'flexProperties',
        'flexDirection',
        'flexWrap',
        'justifyContent',
        'alignItems',
        'alignContent',
        'gap',
    ]),
    methods: mapActions([
        'setFlexDirection',
        'setFlexWrap',
        'setJustifyContent',
        'setAlignItems',
        'setAlignContent',
        'addFlexItem',
        'setGap',
    ]),
}
</script>
