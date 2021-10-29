module.exports = {
    prefix: '',
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
      extend: {
        margin: {
          '-18': '-4.5rem'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
