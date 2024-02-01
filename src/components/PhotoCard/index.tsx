import { store } from '../../modules/store';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCol,
    IonIcon,
    IonRow,
    useIonToast
} from '@ionic/react';

import { heartOutline, heart } from 'ionicons/icons';

import { Photo } from './../../types/index';
import { useEffect, useState } from 'react';

const PhotoCard = ({photo}: {photo: Photo}) => {

    const { id, urls, description, user, likes} = photo;
    const [isfavorite, setIsFavorite] = useState(false);
    
    const getFavorites = async (): Promise<Photo[]> => {
        const favorites = await store.get("favorites");

        return favorites || [];
    }

    const checkFavorite = async () => {
        const favorites = await getFavorites();

        const isfavorite = favorites.some((favorite: any) => favorite.id === id);

        setIsFavorite(isfavorite);
    }
    const addToFavorites = async (photo: Photo) => {
        let favorites = await getFavorites();
        store.set("favorites", [...favorites, photo]);
        setIsFavorite(true);
    };
    const removeFromFavorites = async () => {
        let favorites = await getFavorites();
        store.set(
          "favorites",
          favorites.filter((favorite: { id: string }) => favorite.id !== id)
        );
        setIsFavorite(false);
    };
    const toggleFavorite = async () => {
        if (isfavorite) {
          removeFromFavorites();
        } else {
          addToFavorites(photo);
        }
    };

    useEffect(() => {
        checkFavorite();
    }, []);
    
    return (
        <IonCard>
            <img
                src={urls.regular}
                alt={description}
                style={{
                    height: "24rem",
                    width: "100%",
                    objectFit: "cover",
                }}
            />
            <IonCardContent>
                <IonRow>
                    <IonCol style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <IonCardSubtitle>
                            @{user.username}
                        </IonCardSubtitle>
                        <IonCardSubtitle>
                            {likes} like {likes > 1 && "s"}
                        </IonCardSubtitle>
                    </IonCol>
                    <IonCol className='ion-text-right'>
                        <IonButton
                            onClick={toggleFavorite}
                        >
                            <IonIcon icon={isfavorite ? heart : heartOutline} />
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    )
}

export default PhotoCard;