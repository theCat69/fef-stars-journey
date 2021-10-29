module.exports = {
    prefix: '',
    //mode: 'jit',
    purge: {
      enabled: true,
      content: [
        './src/**/*.html',
        './src/**/*.ts',
        './src/**/*.scss',
        './src/**/*.css'
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
