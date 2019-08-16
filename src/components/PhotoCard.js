import React, {useState} from 'react';
import './PhotoCard.scss';
import { Card } from 'semantic-ui-react';
import { Accordion, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';



function PhotoCard(props){
    // console.log(props);

    const [activeIndex, setActiveIndex] = useState();

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        
        const newIndex = activeIndex === index ? -1 : index
    
        setActiveIndex(newIndex)
      }

    return (
        <div>
            <Card className="photo-card">
                
                <h2>{props.title}</h2>
                <img src={props.url} />
                <div>{props.date}</div>
                <Accordion>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={handleClick}>
                    <Icon name='dropdown' />
                    Learn more.
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                    <p>
                        {props.explanation}
                    </p>
                    </Accordion.Content>
                </Accordion>
            </Card>
        </div>
    );
}

export default PhotoCard;