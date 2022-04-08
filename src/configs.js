const colors = {
  primary: '#90CAF9',
  secondary: '#E0E0E0',
  background: '#FFFFFF',
};

const about = {
  firstName: 'Lawanya',
  lastName: 'Baghel',
  shortDesc: `I'm a CSE Undergrad at NIT Raipur and a tech enthusiast.`,
  longDesc: [
    "I am currently pursuing my Bachelor's degree in Computer Science & Engineering from National Institute of Technology, Raipur and I'll be graduating in 2024.",
    'I started learning Java as a programming language in first semester and I use it for coding. I made two small projects in Java, the details of which are mentioned in the Projects section of this portfolio. I spend my time solving DSA(Data Structure & Algorithm) problems and exploring new Technologies.',
    'The field of web development intrigued me ever since I was in high school where I executed my first program in HTML. Thereafter, I acquainted myself with CSS and Javascript and started exploring Front-end Web Development by learning various Frameworks and libraries like Bootstrap and React.',
  ],
  email: '',
  github: 'https://github.com',
  linkedIn: 'https://linkedin.com',
};

const projects = [
  {
    name: 'Reserve your Table',
    desc: 'Front-end of a restaurant reservation website made in Bootstrap 4, using CSS and JS components along with Grid System and Flexbox layout.',
    image: 'https://cdn1.vectorstock.com/i/thumb-large/23/40/restaurant-table-reserved-icon-vector-34532340.jpg',
    demo: 'https://lawanyabaghel.github.io/web-bootstrap/',
    source: 'https://github.com/lawanyabaghel/web-bootstrap',
  },
  {
    name: 'GUI with live earthquake feed',
    desc: 'Interactive map made in Java using Papplet that displays earthquake data in real time using custom markers.',
    image: 'https://toolboard.org/static/img/logos/unfoldingmaps.png',
    demo: 'https://github.com/lawanyabaghel/Interactive-GUI-Map',
    source: 'https://github.com/lawanyabaghel/Interactive-GUI-Map',
  },
  {
    name: 'Smart Text Editor',
    desc: 'Implemented functionalities like auto correction, flagging misspelled words and autocomplete using data structures like Array, LinkedList, HashMap and Tree.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToL_aeDz7_vsF8jbWA8B2Q4VgCaRk0caDQqCq0tPtl3oa24w4ZjhpJmPHYYYgsYKeffzE&usqp=CAU',
    demo: 'https://github.com/lawanyabaghel/SmartTextEditor',
    source: 'https://github.com/lawanyabaghel/SmartTextEditor',
  },
];

const skills = [{
    skill: 'HTML5',
    link: 'https://cdn.svgporn.com/logos/html-5.svg',
  },
  {
    skill: 'CSS3',
    link: 'https://cdn.svgporn.com/logos/css-3.svg',
  },
  {
    skill: 'Javascript',
    link: 'https://cdn.svgporn.com/logos/javascript.svg',
  },
  {
    skill: 'Java',
    link: 'https://cdn.svgporn.com/logos/java.svg',
  },
  {
    skill: 'MySQL',
    link: 'https://cdn.svgporn.com/logos/mysql.svg',
  },
  {
    skill: 'React',
    link: 'https://cdn.svgporn.com/logos/react.svg',
  },
  {
    skill: 'Bootstrap',
    link: 'https://cdn.svgporn.com/logos/bootstrap.svg',
  },
  {
    skill: 'Git',
    link: 'https://cdn.svgporn.com/logos/git-icon.svg',
  }];

export default {
  colors, about, projects, skills
}

export { colors, about, projects, skills };