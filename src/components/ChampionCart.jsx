import { useContext, useEffect } from 'react';
import { darkMode} from '../Context';

export default function ChampionCart({champion}) {
      const theme = useContext(darkMode);
      useEffect(()=>{
        console.log(champion);
      })

    return (
      <div className='championCart'>
        <h3>{champion.id}</h3>
        <p>{champion.title}</p>
        <p>{champion.blurb}</p>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt=''
          width={200}
        />
      </div>
    );
}