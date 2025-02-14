/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Road Rage", "sans-serif"],
        title:['Jeju Myeongjo', 'serif'],
        roboto:['Roboto'],
        alatsi:['Alatsi']
      },
      colors: {
        transparent: 'transparent',
        indigo: '#5c6ac4',
        blue: '#007ace',
        white:'#FFFFFF',
        red: '#de3618',
        radial:'#02191D',
        gradien:'#24A0B5',
        gray:'#B3B3B3',
        slate:"#197686",
        border:"#24A0B5",
        ticket_bg:"052228",
        ticket_border:"#197686",
        ticket_selected:"#12464E",
        ticket_hover:"#2C545B",
        ticket_no_bg:"#082024",
        tickets_no_border:"#14515D",
        tickets_border:"#07373F",
        drag_bg:"#0E464F",
        card_bg:"08252B"

      }
    },
  },
  plugins: [],
}

