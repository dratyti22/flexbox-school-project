<template>
    <div :style="flexItemStyles" class="rounded">
        <div class="h-full w-full bg-white shadow flex rounded items-center">
            <div class="flex-1 relative h-full flex items-center">
                <div
                    class="text-sm font-medium text-gray-700 pl-4 pr-8 py-6 relative"
                >
                    Index: {{ itemIndex }}
                </div>
                <span
                    class="absolute bg-green-500 left-0 h-full rounded-l w-1"
                    v-if="isActiveItem"
                ></span>
                <button
                    class="absolute inset-0 w-full rounded-l z-10 opacity-0 hover:opacity-100 focus:opacity-100 focus:ring-2 focus:ring-blue-600 transition-opacity ease-in-out duration-200 cursor-pointer focus:outline-none bg-blue-100 bg-opacity-90 text-blue-700 font-medium"
                    @click="edit"
                >
                    {{ isActiveItem ? 'Done' : 'Edit' }}
                </button>
            </div>
            <button
                class="flex-shrink-0 flex-grow-0 rounded-r cursor-pointer focus:outline-none bg-white text-gray-500 hover:bg-red-100 hover:text-red-600 focus:ring-2 focus:ring-red-600 px-2 border-l border-gray-100 flex items-center justify-center self-stretch"
                @click="remove"
            >
                <TrashCanIcon class="w-4 h-4" />
            </button>
        </div>
    </div>
</template>

<script>
import TrashCanIcon from './TrashCan.vue'

export default {
    name: 'FlexItem',
    components: {
        TrashCanIcon,
    },
    props: {
        itemId: {
            type: String,
            required: true,
        },
        itemStyles: {
            type: Object,
            required: true,
        },
        itemIndex: {
            type: Number,
            required: true,
        },
        isActiveItem: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        flexItemStyles: function () {
            const s = this.itemStyles || {}
            return `
            order: ${s.order};
            flex-grow: ${s.flexGrow};
            flex-shrink: ${s.flexShrink};
            flex-basis: ${s.flexBasis};
            align-self: ${s.alignSelf};
            ${s.flex ? `flex: ${s.flex};` : ''}
            ${s.minWidth ? `min-width: ${s.minWidth};` : ''}
            ${s.maxWidth ? `max-width: ${s.maxWidth};` : ''}
            ${s.minHeight ? `min-height: ${s.minHeight};` : ''}
            ${s.maxHeight ? `max-height: ${s.maxHeight};` : ''}
            ${s.margin ? `margin: ${s.margin};` : ''}
            ${s.padding ? `padding: ${s.padding};` : ''}
            ${s.background ? `background: ${s.background};` : ''}
            ${s.color ? `color: ${s.color};` : ''}
            ${s.border ? `border: ${s.border};` : ''}
        `.replace(/\s+/g, ' ')
        },
    },
    methods: {
        edit() {
            let id = this.itemId
            if (this.isActiveItem) {
                id = null
            }
            this.$emit('set', id)
        },
        remove() {
            this.$emit('remove', this.itemId)
        },
    },
}
</script>
