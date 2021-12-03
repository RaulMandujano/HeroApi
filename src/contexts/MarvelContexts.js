import axios from 'axios'
import React,{useState,useEffect} from 'react'
import HeroCard from '../components/HeroCard';


  function MarvelContexts({ publisher = 'Marvel Comics'}) {
    
    const [allHeroes,setAllHeroes]=useState([]);


useEffect(()=>{
  console.log('useEffect executed!')
    const fetchMarvel = async()=>{
        const marvelURL = `/.netlify/functions/marvel`

    try{
      const marvelResponse = await axios.get(marvelURL)
      const marvel = await marvelResponse;
      //console.log(marvel)

      setAllHeroes(marvel.data.filter(el => el.biography?.publisher === publisher)); 


      

    } 
    
    catch (error) {
      console.log(error)
    }
    
  }

  fetchMarvel()
},
 [publisher]
)

  return (

    <React.Fragment>
 
        <ul>
          {allHeroes.map(hero=>{
                        
            return(
              <HeroCard
                key={hero.id}
                id={hero.id}
                name={hero.name}
                images={hero.images.sm}
                family={hero.connections.groupAffiliation}
                relatives={hero.connections.relatives}
                combat={hero.powerstats.combat}
                durability={hero.powerstats.durability}
                intelligence={hero.powerstats.intelligence}
                power={hero.powerstats.power}
                speed={hero.powerstats.speed}
                strength={hero.powerstats.strength}
              />
            )
            
          })}
        </ul>

    </React.Fragment>
  );
}

export default MarvelContexts;