import { useContext, useEffect } from 'react';
import { darkMode} from '../Context';

export default function ChampionCart({champion, detailsHandler, runTransition, setImageUrl}) {
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
        <button
          onClick={() => {
            fetch(
              `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`
            )
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Failed to fetch image');
                }
                return response.blob();
              })
              .then((imageBlob) => {
               
                const imageUrl = URL.createObjectURL(imageBlob);

                setImageUrl(imageUrl);
                runTransition(false);
                setTimeout(()=>{detailsHandler({champion})}, 500)
                setTimeout(() => runTransition(true), 500);             
              })
          }}
        >
          Details
        </button>
      </div>
    );
}