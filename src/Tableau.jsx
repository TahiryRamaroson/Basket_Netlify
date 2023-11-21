
import PropTypes from 'prop-types';

function Tableau({ equipeSelectionnee }) {

    const dataJoueur = [
        {
            "count": 14,
            "joueur": {
                "idJoueur": 1,
                "nom": "Stephen Curry",
                "equipe": {
                    "idequipe": 1,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 32.0,
            "troisPoint": 24.2,
            "total": 30.0,
            "rebond": 5.0,
            "passesDecisives": 8.0
        },
        {
            "count": 12,
            "joueur": {
                "idJoueur": 2,
                "nom": "Zach Lavine",
                "equipe": {
                    "idequipe": 2,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 24.2,
            "troisPoint": 14.0,
            "total": 21.0,
            "rebond": 7.0,
            "passesDecisives": 8.0
        },
        {
            "count": 11,
            "joueur": {
                "idJoueur": 3,
                "nom": "Lebron James",
                "equipe": {
                    "idequipe": 3,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 21.0,
            "troisPoint": 10.4,
            "total": 17.2,
            "rebond": 8.0,
            "passesDecisives": 11.0
        },
        {
            "count": 8,
            "joueur": {
                "idJoueur": 4,
                "nom": "Jayson Tatum",
                "equipe": {
                    "idequipe": 4,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 15.0,
            "troisPoint": 6.1,
            "total": 17.6,
            "rebond": 4.0,
            "passesDecisives": 3.2
        },
        {
            "count": 7,
            "joueur": {
                "idJoueur": 5,
                "nom": "Joel Embiid",
                "equipe": {
                    "idequipe": 5,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 36.7,
            "troisPoint": 11.0,
            "total": 39.5,
            "rebond": 7.0,
            "passesDecisives": 14.5
        },
        {
            "count": 15,
            "joueur": {
                "idJoueur": 6,
                "nom": "Nikola Jokic",
                "equipe": {
                    "idequipe": 6,
                    "nomequipe": "Lakers"
                }
            },
            "minutes": 22.7,
            "troisPoint": 4.4,
            "total": 18.7,
            "rebond": 8.2,
            "passesDecisives": 8.0
        },
      ];

      const joueursEquipeSelectionnee = dataJoueur.filter(
        (joueurako) => joueurako.joueur.idJoueur === equipeSelectionnee.id
      );


    return (
      <>
        <table className="table table-borderless table-hover">
        <thead className="thead-dark" style={{background:'black', color:'white'}}>
            <tr>
                <th scope="col">Joueur</th>
                <th scope="col">MJ</th>
                <th scope="col">PPM</th>
                <th scope="col">RPM</th>
                <th scope="col">PDPM</th>
                <th scope="col">MPM</th>
                <th scope="col">3P%</th>
            </tr>
        </thead>
        <tbody>
            {joueursEquipeSelectionnee.map((item) => (
                <tr key={item.count}>
                 <td>{item.joueur.nom}</td>
                 <td>{item.count}</td>
                 <td>{item.total}</td>
                 <td>{item.rebond}</td>
                 <td>{item.passesDecisives}</td>
                 <td>{item.minutes}</td>
                 <td>{item.troisPoint}</td>
                </tr>       
            ))}
            
        </tbody>
        </table>
      </>
    )
  }

  Tableau.propTypes = {
    equipeSelectionnee: PropTypes.shape({
      id: PropTypes.number,
      nom: PropTypes.string,
    }).isRequired,
  };
  
  export default Tableau