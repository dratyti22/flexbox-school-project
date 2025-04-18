<template>
    <CodeContainer lang="css" :content="content" />
</template>

<script>
import { mapState } from 'vuex'
import CodeContainer from './CodeContainer.vue'

export default {
    name: 'CssMarkup',
    components: {
        CodeContainer,
    },
    computed: {
        ...mapState([
            'flexProperties',
            'flexDirection',
            'flexWrap',
            'justifyContent',
            'alignItems',
            'alignContent',
            'flexItems',
            'gap',
        ]),
        content() {
            // only include the css property/value if it's not the default value for that property
            let fd = ''
            let fw = ''
            let jc = ''
            let ai = ''
            let ac = ''
            let g = ''

            if (this.flexDirection !== this.flexProperties.flexDirection[0]) {
                fd = `\n\tflex-direction: ${this.flexDirection};`
            }
            if (this.flexWrap !== this.flexProperties.flexWrap[0]) {
                fw = `\n\tflex-wrap: ${this.flexWrap};`
            }
            if (this.justifyContent !== this.flexProperties.justifyContent[0]) {
                jc = `\n\tjustify-content: ${this.justifyContent};`
            }
            if (this.alignItems !== this.flexProperties.alignItems[0]) {
                ai = `\n\talign-items: ${this.alignItems};`
            }
            if (this.alignContent !== this.flexProperties.alignContent[0]) {
                ac = `\n\talign-content: ${this.alignContent};`
            }
            if (this.gap !== this.flexProperties.gap[0]) {
                g = `\n\tgap: ${this.gap};`
            }
            const containerCss = `.container {\n\tdisplay: flex;${fd}${fw}${g}${jc}${ai}${ac}\n}`

            let itemsCss = this.flexItems
                .map((it, index) => {
                    let nonDefaultCount = 0
                    let o = ''
                    let fg = ''
                    let fs = ''
                    let fb = ''
                    let as = ''
                    let fl = ''
                    let minW = ''
                    let maxW = ''
                    let minH = ''
                    let maxH = ''
                    let m = ''
                    let p = ''
                    let bg = ''
                    let c = ''
                    let b = ''

                    if (it.styles.order !== 0) {
                        nonDefaultCount++
                        o = `\n\torder: ${it.styles.order};`
                    }

                    if (it.styles.flexGrow !== 0) {
                        nonDefaultCount++
                        fg = `\n\tflex-grow: ${it.styles.flexGrow};`
                    }

                    if (it.styles.flexShrink !== 1) {
                        nonDefaultCount++
                        fs = `\n\tflex-shrink: ${it.styles.flexShrink};`
                    }

                    if (it.styles.flexBasis !== 'auto') {
                        nonDefaultCount++
                        fb = `\n\tflex-basis: ${it.styles.flexBasis};`
                    }

                    if (it.styles.alignSelf !== 'auto') {
                        nonDefaultCount++
                        as = `\n\talign-self: ${it.styles.alignSelf};`
                    }
                    if (it.styles.flex) {
                        nonDefaultCount++
                        fl = `\n\tflex: ${it.styles.flex};`
                    }
                    if (it.styles.minWidth) {
                        nonDefaultCount++
                        minW = `\n\tmin-width: ${it.styles.minWidth};`
                    }
                    if (it.styles.maxWidth) {
                        nonDefaultCount++
                        maxW = `\n\tmax-width: ${it.styles.maxWidth};`
                    }
                    if (it.styles.minHeight) {
                        nonDefaultCount++
                        minH = `\n\tmin-height: ${it.styles.minHeight};`
                    }
                    if (it.styles.maxHeight) {
                        nonDefaultCount++
                        maxH = `\n\tmax-height: ${it.styles.maxHeight};`
                    }
                    if (it.styles.margin) {
                        nonDefaultCount++
                        m = `\n\tmargin: ${it.styles.margin};`
                    }
                    if (it.styles.padding) {
                        nonDefaultCount++
                        p = `\n\tpadding: ${it.styles.padding};`
                    }
                    if (it.styles.background) {
                        nonDefaultCount++
                        bg = `\n\tbackground: ${it.styles.background};`
                    }
                    if (it.styles.color) {
                        nonDefaultCount++
                        c = `\n\tcolor: ${it.styles.color};`
                    }
                    if (it.styles.border) {
                        nonDefaultCount++
                        b = `\n\tborder: ${it.styles.border};`
                    }

                    if (nonDefaultCount > 0) {
                        return `.item-${index} {${o}${fg}${fs}${fb}${as}${fl}${minW}${maxW}${minH}${maxH}${m}${p}${bg}${c}${b}\n}`
                    } else {
                        return null
                    }
                })
                .filter((it) => it !== null)

            if (itemsCss.length > 0) {
                itemsCss = `\n\n${itemsCss.join('\n\n')}`
            } else {
                itemsCss = ''
            }

            return `${containerCss}${itemsCss}`
        },
    },
}
</script>
