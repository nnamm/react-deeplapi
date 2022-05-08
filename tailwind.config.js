// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'show-modal': {
          '0%': { transform: 'translateY(-9.5rem)' },
          '100%': { transform: 'translateY(-10rem)' },
        },
      },
      animation: {
        'show-modal': 'show-modal 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
