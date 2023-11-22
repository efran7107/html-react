import './css/App.css'
import TableRow from './components/TableRow'
import { getTop } from './components/char-data'
import { Cards } from './components/Card'

function App() {
  return (
    <>
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        <li>about us</li>
        <li>info</li>
        <li>support us</li>
      </nav>
    </header>
    <section id="ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        </thead>
        <tbody>
          {getTop().map((char, index) => {
          return  <TableRow char={char} key={char.name} index={index} />;
          })}
        </tbody>
      </table>
    </section>
    <Cards />
    </>
    
    
  )
}

export default App
