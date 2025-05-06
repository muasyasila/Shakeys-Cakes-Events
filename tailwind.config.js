module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Your custom colors
          primary: "#c44d5c",
          "primary-light": "#e6c7d1",
          secondary: "#6f2f27",
          
          // Add rose color palette
          rose: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48', // rose-600 you're using for buttons
            700: '#be123c',
            800: '#9f1239', // rose-800 you want for headings
            900: '#881337'
          }
        },
        fontFamily: {
          heading: ['"Playfair Display"', 'serif']
        }
      },
    },
    plugins: [],
  }