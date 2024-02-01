import './ExploreContainer.css';
import { IonButton } from '@ionic/react';
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore 
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>

      <IonButton color={"custom"}>Custom Button</IonButton>
    </div>
  );
};

export default ExploreContainer;
