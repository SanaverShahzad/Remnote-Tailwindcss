module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //  All colors
      colors: {
        primary: {
          light: "#63637B",
          main: "#3668FF",
          dark: "#292936",
          accent: "#F4F4FA80",
          DEFAULT:"#3668FF",
        },
      
      },
    },
    boxShadow: {
      'light-0': '0px 1px 1px rgba(0, 0, 0, 0.07)', // Button shadow
      'light-1':
        '0px 1px 3px 0px rgba(65,65,85,0.2), 0px 2px 1px 0px rgba(65,65,85,0.12), 0px 1px 1px 0px rgba(65,65,85,0.14)',
      'light-2':
        '0px 1px 5px 0px rgba(65,65,85,0.2), 0px 3px 1px 0px rgba(65,65,85,0.12), 0px 2px 2px 0px rgba(65,65,85,0.14)',
      'light-3':
        '0px 1px 8px 0px rgba(65,65,85,0.2), 0px 3px 3px 0px rgba(65,65,85,0.12), 0px 3px 4px 0px rgba(65,65,85,0.14)',
      'light-4':
        '0px 1px 8px 0px rgba(65,65,85,0.2), 0px 3px 3px 0px rgba(65,65,85,0.12), 0px 3px 4px 0px rgba(65,65,85,0.14)',
      'light-5':
        '0px 3px 5px 0px rgba(65,65,85,0.2), 0px 1px 18px 0px rgba(65,65,85,0.12), 0px 6px 10px 0px rgba(65,65,85,0.14)',
      'light-6':
        '0px 5px 5px 0px rgba(65,65,85,0.2), 0px 3px 14px 0px rgba(65,65,85,0.12), 0px 8px 10px 0px rgba(65,65,85,0.14)',
      'light-7':
        '0px 7px 8px 0px rgba(65,65,85,0.2), 0px 5px 22px 0px rgba(65,65,85,0.12), 0px 12px 17px 0px rgba(65,65,85,0.14)',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      'huge-emoji': '100px',
    },
  },
  variants: {
    extend: {},
  
  },
  plugins: [],
};
