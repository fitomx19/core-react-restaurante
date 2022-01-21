module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bowl': "url('../images/BOWL_2.png')"
      },
      screens:{
      'tablet': '640px',


      'laptop': '1024px',
     

      'desktop': '1280px',
     
      }
    },
  },
  plugins: [],
}