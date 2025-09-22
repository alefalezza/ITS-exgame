import classes from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <img src={Logo} alt="ExGame" />
        <nav>
          <ul>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">Esami</a>
            </li>
          </ul>
          <ul className={classes.user}>
            <li>
              <a href="">Ale Falezza</a>
            </li>
            <li>
              <a href="">Logout</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.body}>
        <div className={classes.userInfo}>
          <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            alt="User Avatar"
          />
          <p>Ale Falezza</p>
        </div>

        <div className={classes.title}>
          <a href="" className={classes.back}>
            indietro
          </a>
          <h1>Esame di storia</h1>
        </div>

        <div className={classes.tags}>
          <span className={classes.tag}>Data: 12 settembre 2025</span>
          <span className={classes.tag}>Prima sessione</span>
          <span className={classes.tag}>Facile</span>
        </div>

        <div className={classes.timer}>
          <span>Tempo rimasto:</span>
          <div className={classes.time}>00:25:00</div>
        </div>

        <div className={classes.content}>
          <div className={classes.question}>
            <h3>Di che colore era il cavallo bianco di Napoleone?</h3>
            <ul>
              <li>
                <input type="radio" id="a" name="answer" />
                <label htmlFor="a">Nero</label>
              </li>
              <li>
                <input type="radio" id="b" name="answer" />
                <label htmlFor="b">Bianco</label>
              </li>
              <li>
                <input type="radio" id="c" name="answer" />
                <label htmlFor="c">Marrone</label>
              </li>
              <li>
                <input type="radio" id="d" name="answer" />
                <label htmlFor="d">Grigio</label>
              </li>
            </ul>
            <div className={classes.functions}>
              <button>Chiedi al docente</button>
              <button>Copia da un compagno</button>
              <button>Chiedi l'aiuto da casa</button>
              <button>Tira a indovinare</button>
            </div>
          </div>

          <div className={classes.question}>
            <h3>Quale pesa di più: un chilo di piume o un chilo di piombo?</h3>
            <ul>
              <li>
                <input type="radio" id="q2a" name="answer2" />
                <label htmlFor="q2a">Un chilo di piume</label>
              </li>
              <li>
                <input type="radio" id="q2b" name="answer2" />
                <label htmlFor="q2b">Un chilo di piombo</label>
              </li>
              <li>
                <input type="radio" id="q2c" name="answer2" />
                <label htmlFor="q2c">Pesano uguale</label>
              </li>
              <li>
                <input type="radio" id="q2d" name="answer2" />
                <label htmlFor="q2d">Dipende dal volume</label>
              </li>
            </ul>
            <div className={classes.functions}>
              <button>Chiedi al docente</button>
              <button>Copia da un compagno</button>
              <button>Chiedi l'aiuto da casa</button>
              <button>Tira a indovinare</button>
            </div>
          </div>

          <div className={classes.question}>
            <h3>Se una pizza ha 8 fette e ne mangi 4, quante fette restano?</h3>
            <ul>
              <li>
                <input type="radio" id="q3a" name="answer3" />
                <label htmlFor="q3a">2</label>
              </li>
              <li>
                <input type="radio" id="q3b" name="answer3" />
                <label htmlFor="q3b">4</label>
              </li>
              <li>
                <input type="radio" id="q3c" name="answer3" />
                <label htmlFor="q3c">8 (le hai solo guardate)</label>
              </li>
              <li>
                <input type="radio" id="q3d" name="answer3" />
                <label htmlFor="q3d">0 (le mangi tutte comunque)</label>
              </li>
            </ul>
            <div className={classes.functions}>
              <button>Chiedi al docente</button>
              <button>Copia da un compagno</button>
              <button>Chiedi l'aiuto da casa</button>
              <button>Tira a indovinare</button>
            </div>
          </div>

          <div className={classes.question}>
            <h3>Quante zampe hanno due giraffe e mezzo?</h3>
            <ul>
              <li>
                <input type="radio" id="q4a" name="answer4" />
                <label htmlFor="q4a">6</label>
              </li>
              <li>
                <input type="radio" id="q4b" name="answer4" />
                <label htmlFor="q4b">8</label>
              </li>
              <li>
                <input type="radio" id="q4c" name="answer4" />
                <label htmlFor="q4c">10</label>
              </li>
              <li>
                <input type="radio" id="q4d" name="answer4" />
                <label htmlFor="q4d">Dipende dalla fantasia</label>
              </li>
            </ul>
            <div className={classes.functions}>
              <button>Chiedi al docente</button>
              <button>Copia da un compagno</button>
              <button>Chiedi l'aiuto da casa</button>
              <button>Tira a indovinare</button>
            </div>
          </div>
        </div>

        <div className={classes.actions}>
          <button className={classes.submit}>Hai terminato? Consegna!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
