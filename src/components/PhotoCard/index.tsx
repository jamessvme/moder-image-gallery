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

import { heartOutline } from 'ionicons/icons';

import { Photo } from './../../types/index';

const PhotoCard = ({photo}: {photo: Photo}) => {

    const { id, urls, description, user, likes} = photo;

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
                            {likes} like {likes > 1 && "s"}
                        </IonCardSubtitle>
                    </IonCol>
                    <IonCol className='ion-text-right'>
                        <IonButton>
                            <IonIcon icon={heartOutline} />
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    )
}