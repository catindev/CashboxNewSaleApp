import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Position from "../../src/Components/Precheck/Position/Position";

storiesOf('Продажа/Предчек/Компоненты/Позиция', module)
    .addDecorator(withKnobs)
    .add('Демо', withInfo(`src/Components/Precheck/Position`)(() => {
        return (
            <Position
                Index="1"
                Name={text('Наименование', 'Позиция 1')}
                SectionName={text('Секция', 'Без НДС')}
                Nds={boolean('Товар с НДС', false)}
                Price={number('Цена', 100)}
                Qty={number('Количество', 1)}
                Markup={number('Наценка в %', 0)}
                Discount={number('Скидка в %', 0)}
                Storno={boolean('Сторно', false)}
                onClickStorno={action('Сторно')}
            />
        )
    }))