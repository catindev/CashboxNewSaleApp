import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { withKnobs, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import NewPosition from "../../src/Components/NewPosition/NewPosition";


const sections = [
    {
        "Id": 0,
        "Name": "Секцыя 1",
        "Nds": true
    },

    {
        "Id": 1,
        "Name": "Товары с НДС",
        "Nds": true
    },

    {
        "Id": 2,
        "Name": "Товары без НДС",
        "Nds": false
    },
]


//Precheck full example
storiesOf('Продажа/Добавить позицию', module)
    // .addDecorator(withKnobs)
    .add('Демо', withInfo(`src/Components/NewPosition/`)(
        () => {
            return (
                <NewPosition
                    Errors={{}}
                    Sections={[]}
                    OnChange={action('Form change')}
                    OnSubmit={action('Form submit')}
                    OnReset={action('Form reset')} />
            )
        }
    ))
