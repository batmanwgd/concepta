const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        ...whitelister([
          './assets/scss/components/_doks.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/components/_search.scss',
          './assets/scss/common/_dark.scss',
          './node_modules/katex/dist/katex.css',
          './assets/emoji-scale.css'
        ]),
      ],
    }),
  ],
}

// {{ $css := resources.Get "css/main.css" }}
// {{ $style := $css | resources.PostCSS }}
//{{ $options := (dict "targetPath" "style.css" "outputStyle" "compressed" "enableSourceMap" true "includePaths" (slice "node_modules/myscss")) }}
//{{ $style := resources.Get "sass/main.scss" | resources.ToCSS $options }}
