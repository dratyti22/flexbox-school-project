<template>
    <section
        class="h-full flex-1 bg-gray-100 py-6 px-8 xl:p-12 overflow-y-auto leading-normal"
    >
        <h2 class="text-5xl font-black mb-2">Markup</h2>
        <p class="mb-4 text-lg leading-7">
            Ниже вы найдете CSS и HTML, необходимые для создания текущий макет,
            который вы построили.<br />
            CSS был оптимизирован, чтобы исключить любые свойства, которые имеют
            значения по умолчанию.<br />
            Например,
            <code class="text-base text-violet-600">flex-direction: row;</code>
            не будет включено, поскольку это значение по умолчанию для
            <code class="text-base text-violet-600">flex-direction</code>.
        </p>
        <div class="flex flex-wrap gap-8 mt-6 bg-white rounded-md p-4 shadow">
            <CssMarkup />
            <HtmlMarkup />
        </div>
    </section>
</template>

<script>
import HtmlMarkup from './HtmlMarkup.vue'
import CssMarkup from './CssMarkup.vue'

export default {
    name: 'FlexMarkup',
    components: { HtmlMarkup, CssMarkup },
}
</script>
