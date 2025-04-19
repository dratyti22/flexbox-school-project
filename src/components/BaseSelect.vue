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
                row: 'Расположение слева направо по горизонтали',
                'row-reverse': 'Расположение справа налево по горизонтали',
                column: 'Расположение сверху вниз по вертикали',
                'column-reverse': 'Расположение снизу вверх по вертикали',

                nowrap: 'Элементы не переносятся на следующую строку',
                wrap: 'Элементы переносятся при нехватке места',
                'wrap-reverse': 'Перенос в обратном направлении',

                'flex-start': 'Элементы прижаты к началу контейнера',
                'flex-end': 'Элементы прижаты к концу контейнера',
                center: 'Элементы выровнены по центру',
                'space-between': 'Элементы с равными промежутками между ними',
                'space-around': 'Элементы с отступами по краям',

                stretch: 'Элементы растягиваются на доступную высоту',
                baseline: 'Элементы выравниваются по базовой линии текста',

                auto: 'Автоматическое значение (наследуется или зависит от контекста)',

                '0px': 'Без промежутка',
                '4px': 'Промежуток 4 пикселя',
                '8px': 'Промежуток 8 пикселей',
                '16px': 'Промежуток 16 пикселей',
                '24px': 'Промежуток 24 пикселя',
                '32px': 'Промежуток 32 пикселя',
                '48px': 'Промежуток 48 пикселей',
                '64px': 'Промежуток 64 пикселя',
                '10%': 'Промежуток 10% от ширины контейнера',
                '20%': 'Промежуток 20% от ширины контейнера',

                'row nowrap': 'Элементы в ряд, без переноса',
                'column wrap': 'Колонка с переносом',
            },
        }
    },
}
</script>
