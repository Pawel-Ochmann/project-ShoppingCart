import { useContext, useEffect } from 'react';
import { darkMode} from '../Context';

export default function ChampionCart({champion, detailsHandler}) {
      const theme = useContext(darkMode);

    return (
      <div>
        <h3>{champion.id}</h3>
        <p>{champion.title}</p>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt=''
          width={200}
        />
        <button onClick={()=>{detailsHandler(champion)}}>Details</button>
      </div>
    );
}