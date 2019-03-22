const express = require('express');
const router = express.Router();

// render about page
router.get('/', (req, res) => {
    res.render('about', {
        name: 'Tobiasz Gala',
        pitch: 'I believe that knowledge comes from action and I’m motivated to complete challenging projects where I can learn and practice new skills. I am passionate about programming, and I want to keep developing my skills to create better projects that can be used by people around the world. I have developed project written in JavaScript following current standards provided by ES6. I have applied modern technologies such as Ajax, React JS, Node.JS to create practical and user-friendly web applications. I also have experience creating responsive web applications with a mobile-first approach.',
        skills: ["HTML5", "CSS3", "Nodejs", "Express", "NPM", "Git", "Webpack", "and more!"],
        email: "tobiaszgala@protonmail.com",
        github_link: 'https://github.com/tobiaszgala',
        linkedin_link: 'https://www.linkedin.com/in/tobiaszgala/'
    });
});

module.exports = router;