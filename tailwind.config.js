module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:theme=>({

        'landing-bg':"url('../images/bg-img.png')"
      })
      
    },
    fontFamily: {
      'Sansation': ['Sansation'], 
    },
  ariants: {
      extend: {},
    },
    plugins: [],
  }
}
