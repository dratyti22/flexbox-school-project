<template>
    <section
        :style="flexStyles"
        class="h-full flex flex-grow bg-gray-100 p-4 gap-4 overflow-x-auto"
    >
        <FlexItem
            v-for="(item, index) in flexItems"
            :key="item.id"
            :item-id="item.id"
            :item-styles="item.styles"
            :item-index="index"
            :is-active-item="
                selectedItem !== null && selectedItem.id === item.id
            "
            @set="setSelectedItem"
            @remove="removeFlexItem"
        />
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FlexItem from './FlexItem.vue'

export default {
    name: 'FlexContainer',
    components: {
        FlexItem,
    },
    computed: {
        ...mapState([
            'flexDirection',
            'flexWrap',
            'justifyContent',
            'alignItems',
            'alignContent',
            'flexItems',
            'selectedItem',
            'gap',
        ]),
        flexStyles() {
            return `flex-direction: ${this.flexDirection}; justify-content: ${this.justifyContent}; align-items: ${this.alignItems}; align-content: ${this.alignContent}; gap: ${this.gap};`
        },
    },
    methods: {
        ...mapActions(['removeFlexItem', 'setSelectedItem']),
    },
}
</script>
