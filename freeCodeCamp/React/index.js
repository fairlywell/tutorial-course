// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById('root'));

// const h1 = document.createElement('h1');
// h1.textContent = 'Hello world!';
// h1.className = 'header';
// console.log(h1);

// document.getElementById('root').append(h1);

// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// )

// console.log(page);

const navbar = (
  <nav>
    <h1>Clothing</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(
  navbar,
  document.getElementById('root')
)