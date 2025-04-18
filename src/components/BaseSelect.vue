<template>
    <div class="select relative inline-block text-gray-700 w-full">
        <select
            class="inline-block text-base w-full m-0 py-2 pl-4 pr-8 leading-normal text-gray-700 bg-white border border-gray-500 rounded cursor-pointer focus:outline-none focus:border-transparent focus:ring-4 focus:ring-offset-2 focus:border-blue-600 focus:ring-blue-600 focus:ring-opacity-40"
            v-bind="$attrs"
        >
            <option
                class="bg-white text-gray-700"
                v-for="(option, index) in options"
                :key="index"
                :value="option"
                :title="tooltips[option] || ''"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'BaseSelect',
    props: ['options'],
    data() {
        return {
            tooltips: {
                row: 'Ряд (горизонтально слева направо)',
                'row-reverse': 'Ряд в обратном порядке',
                column: 'Колонка (вертикально сверху вниз)',
                'column-reverse': 'Колонка в обратном порядке',
                nowrap: 'Без переноса',
                wrap: 'С переносом',
                'wrap-reverse': 'Перенос в обратном направлении',
                'flex-start': 'Прижато к началу',
                'flex-end': 'Прижато к концу',
                center: 'По центру',
                'space-between': 'Равномерно с промежутками',
                'space-around': 'С отступами по краям',
                stretch: 'Растянуть',
                baseline: 'По базовой линии',
                'gap-sm': 'Маленький промежуток',
                'gap-md': 'Средний промежуток',
                'gap-lg': 'Большой промежуток',
                'row nowrap': 'Ряд без переноса',
                'column wrap': 'Колонка с переносом',
                // и так далее...
            },
        }
    },
}
</script>
