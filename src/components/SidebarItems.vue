<template>
    <section>
        <p
            v-if="flexItems.length === 0"
            class="mx-4 rounded p-4 text-sm text-blue-900 bg-blue-50 mb-4 leading-normal"
        >
            Сначала добавьте хотя бы 1 один элемент в вкладе "container".
        </p>
        <p
            v-else-if="selectedItem === null"
            class="mx-4 rounded p-4 text-sm text-blue-900 bg-blue-50 mb-4 leading-normal"
        >
            Нажмите на элемент что бы отредоктировать эго стили
        </p>

        <div v-if="selectedItem !== null" class="px-4 pb-4">
            <p
                class="leading-normal text-left text-blue-900 mb-6 text-sm bg-blue-50 p-4 rounded"
            >
                Отредактируйте свойства элементов flex здесь . Выбранный элемент
                будет иметь зеленую рамку . Щелкните выбранный элемент еще раз,
                чтобы остановить его редактирование .
            </p>

            <form>
                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Order (Порядок отображения элемента в контейнере)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.order"
                        @input="updateSelectedItem"
                        name="order"
                        type="number"
                        tooltip="Порядковый номер для расположения в flex-контейнере"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Flex-grow (Степень расширения элемента при наличии
                        свободного места)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.flexGrow"
                        @input="updateSelectedItem"
                        name="flexGrow"
                        type="number"
                        min="0"
                        tooltip="Задаёт, насколько элемент может расширяться относительно других"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Flex-shrink (Степень сжатия элемента при нехватке места)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.flexShrink"
                        @input="updateSelectedItem"
                        name="flexShrink"
                        type="number"
                        min="0"
                        tooltip="Задаёт, насколько элемент может сжиматься при нехватке пространства"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Flex-basis (Базовый размер элемента до распределения
                        свободного места)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.flexBasis"
                        @input="updateSelectedItem"
                        name="flexBasis"
                        type="text"
                        tooltip="Начальный размер до распределения свободного пространства (например, 100px или auto)"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Flex (Сокращённая запись для grow, shrink и basis,
                        например: <code>1 0 auto</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.flex"
                        @input="updateSelectedItem"
                        name="flex"
                        type="text"
                        tooltip="Сокращённая запись: flex-grow flex-shrink flex-basis. Пример: 1 1 auto"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Min-width (Минимальная ширина элемента, например:
                        <code>100px</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.minWidth"
                        @input="updateSelectedItem"
                        name="minWidth"
                        type="text"
                        tooltip="Минимально допустимая ширина элемента"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Max-width (Максимальная ширина элемента, например:
                        <code>300px</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.maxWidth"
                        @input="updateSelectedItem"
                        name="maxWidth"
                        type="text"
                        tooltip="Максимально допустимая ширина элемента"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Min-height (Минимальная высота элемента, например:
                        <code>50px</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.minHeight"
                        @input="updateSelectedItem"
                        name="minHeight"
                        type="text"
                        tooltip="Минимально допустимая высота элемента"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Max-height (Максимальная высота элемента, например:
                        <code>200px</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.maxHeight"
                        @input="updateSelectedItem"
                        name="maxHeight"
                        type="text"
                        tooltip="Максимально допустимая высота элемента"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Margin (Внешний отступ вокруг элемента, например:
                        <code>10px 20px</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.margin"
                        @input="updateSelectedItem"
                        name="margin"
                        type="text"
                        tooltip="Отступы снаружи элемента"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Padding (Внутренний отступ внутри элемента, например:
                        <code>8px 16px</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.padding"
                        @input="updateSelectedItem"
                        name="padding"
                        type="text"
                        tooltip="Внутренние отступы от содержимого до границ"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Background (Фон элемента, например:
                        <code>#f0f0f0</code> или <code>url(image.png)</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.background"
                        @input="updateSelectedItem"
                        name="background"
                        type="text"
                        tooltip="Фон элемента: цвет, градиент или изображение"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Color (Цвет текста, например: <code>#333</code> или
                        <code>red</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.color"
                        @input="updateSelectedItem"
                        name="color"
                        type="text"
                        tooltip="Цвет текста внутри элемента"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block">
                        Border (Граница, например: <code>1px solid black</code>)
                    </label>
                    <BaseInput
                        :value="selectedItem.styles.border"
                        @input="updateSelectedItem"
                        name="border"
                        type="text"
                        tooltip="Граница элемента: толщина, стиль, цвет"
                    />
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseSelect from './BaseSelect.vue'
import BaseInput from './BaseInput.vue'

export default {
    name: 'SidebarItems',
    components: {
        BaseSelect,
        BaseInput,
    },
    computed: mapState(['flexProperties', 'selectedItem', 'flexItems']),
    methods: {
        ...mapActions(['setSelectedItem', 'removeSelectedItem']),
        updateSelectedItem(e) {
            let copy = { ...this.selectedItem }
            let prop = e.target.name
            copy.styles[prop] = e.target.value
            this.$store.dispatch('updateSelectedItem', copy)
        },
    },
}
</script>
