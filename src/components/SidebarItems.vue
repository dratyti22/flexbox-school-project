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
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Order</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.order"
                        @input="updateSelectedItem"
                        name="order"
                        type="number"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Flex-grow</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.flexGrow"
                        @input="updateSelectedItem"
                        name="flexGrow"
                        type="number"
                        min="0"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Flex-shrink</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.flexShrink"
                        @input="updateSelectedItem"
                        name="flexShrink"
                        type="number"
                        min="0"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Flex-basis</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.flexBasis"
                        @input="updateSelectedItem"
                        name="flexBasis"
                        type="text"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Align-self</label
                    >
                    <BaseSelect
                        :value="selectedItem.styles.alignSelf"
                        @input="updateSelectedItem"
                        name="alignSelf"
                        :options="flexProperties.alignSelf"
                    />
                </div>
                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Flex</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.flex"
                        @input="updateSelectedItem"
                        name="flex"
                        type="text"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Min-width</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.minWidth"
                        @input="updateSelectedItem"
                        name="minWidth"
                        type="text"
                    />
                </div>
                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Max-width</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.maxWidth"
                        @input="updateSelectedItem"
                        name="maxWidth"
                        type="text"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Min-height</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.minHeight"
                        @input="updateSelectedItem"
                        name="minHeight"
                        type="text"
                    />
                </div>
                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Max-height</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.maxHeight"
                        @input="updateSelectedItem"
                        name="maxHeight"
                        type="text"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Margin</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.margin"
                        @input="updateSelectedItem"
                        name="margin"
                        type="text"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Padding</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.padding"
                        @input="updateSelectedItem"
                        name="padding"
                        type="text"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Background</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.background"
                        @input="updateSelectedItem"
                        name="background"
                        type="text"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Color</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.color"
                        @input="updateSelectedItem"
                        name="color"
                        type="text"
                    />
                </div>

                <div class="mb-4">
                    <label class="mb-2 lowercase text-base font-semibold block"
                        >Border</label
                    >
                    <BaseInput
                        :value="selectedItem.styles.border"
                        @input="updateSelectedItem"
                        name="border"
                        type="text"
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
