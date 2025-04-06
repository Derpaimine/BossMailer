module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for App Router files
    "./src/**/*.{js,ts,jsx,tsx}", // for ALL src files (components, pages, etc.)
  ],
  safelist: ['px-6'],
  theme: {
    extend: {},
    colors: {
      blue: {
        900: '#1e3a8a', // custom blue color
      },
    },
  },
  plugins: [],
};
