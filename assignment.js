const express = require('express')
const app = express()
const port = 3000

app.use('/css', express.static('css'));

app.get('/', (req, res) => {
  res.send(`
   <header>
    <nav>
      <ul>
        <li><a href="http://localhost:3000/" target="#blank">回到首頁</a></li>
        <li><a href="http://localhost:3000/about" target="#blank">About</a></li>
        <li><a href="http://localhost:3000/portfolio" target="#blank">Portfolio</a></li>
        <li><a href="http://localhost:3000/contact" target="#blank">Contact</a></li>
      </ul>
    </nav>
  </header>
  <h1>首頁</h1>`)
})

app.get('/about', (req, res) => {
  res.send(`
   <header>
    <nav>
      <ul>
        <li><a href="http://localhost:3000/" target="#blank">回到首頁</a></li>
        <li><a href="http://localhost:3000/about" target="#blank">About</a></li>
        <li><a href="http://localhost:3000/portfolio" target="#blank">Portfolio</a></li>
        <li><a href="http://localhost:3000/contact" target="#blank">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <h1>About</h1>`)
})

app.get('/portfolio', (req, res) => {
  res.send(`
   <header>
    <nav>
      <ul>
        <li><a href="http://localhost:3000/" target="#blank">回到首頁</a></li>
        <li><a href="http://localhost:3000/about" target="#blank">About</a></li>
        <li><a href="http://localhost:3000/portfolio" target="#blank">Portfolio</a></li>
        <li><a href="http://localhost:3000/contact" target="#blank">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <h1>Portfolio</h1>`)
})


app.get('/contact', (req, res) => {
  res.send(`
   <header>
    <nav>
      <ul>
        <li><a href="http://localhost:3000/" target="#blank">回到首頁</a></li>
        <li><a href="http://localhost:3000/about" target="#blank">About</a></li>
        <li><a href="http://localhost:3000/portfolio" target="#blank">Portfolio</a></li>
        <li><a href="http://localhost:3000/contact" target="#blank">Contact</a></li>
      </ul>
    </nav>
  </header>
<h1>Contact</h1>
  `)
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})