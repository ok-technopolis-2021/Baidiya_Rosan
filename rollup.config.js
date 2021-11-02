import scss from 'rollup-plugin-scss'

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'esm'
  },
  plugins: [
    scss()
  ]
}