import Tableau from './Tableau'
import { useState } from 'react'; 

function Statistique() {

    const dataEquipe = [
        { "id": 1, "nom": 'Golden Warriors' },
        { "id": 2, "nom": 'Chicago Bulls' },
        { "id": 3, "nom": 'Lakers' },
        { "id": 4, "nom": 'Celtics' },
        { "id": 5, "nom": 'Philadelphie' },
        { "id": 6, "nom": 'Nuggets' },
      ];

    const [equipeSelectionnee, setEquipeSelectionnee] = useState(dataEquipe[0]);

    const handleEquipeClick = (equipe) => {
        setEquipeSelectionnee(equipe);
    };

    return (
      <>
        <div className="card text-center" style={{width:'100%'}}>
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    {dataEquipe.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <a className={`nav-link ${equipeSelectionnee.id === item.id ? 'active' : ''}`} href="#" onClick={() => handleEquipeClick(item)}>
                                {item.nom}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card-body">
                <Tableau equipeSelectionnee={equipeSelectionnee} />
            </div>
        </div>
      </>
    )
  }
  
  export default Statistique