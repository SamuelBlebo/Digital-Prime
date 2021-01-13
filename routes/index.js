const express = require('express')
const router = express.Router()


//@desc Landing Page 
//@route Get /
router.get('/', (req, res) => {
  res.render('index')
})

//@desc About Page
//@route Get /about
router.get('/about', (req, res) => {
  res.render('about')
})

//@desc Pricing Page
//@route Get /pricing
router.get('/pricing', (req, res) => {
  res.render('pricing')
})

//@desc portfolio Page
//@route Get /portfolio
router.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

//@desc faq Page
//@route Get /faq
router.get('/faq', (req, res) => {
  res.render('faq')
})

//@desc contact Page
//@route Get /contact
router.get('/contact', (req, res) => {
  res.render('contact')
})

//@desc blog Page
//@route Get /blog
router.get('/blog', (req, res) => {
  res.render('blog')
})

//@desc Success Page
//@route Get /success
router.get('/success', (req, res) => {
  res.render('success')
})


module.exports = router