import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Header from "../../src/Components/Precheck/Header/Header";

storiesOf('Продажа/Предчек/Компоненты/Заголовок', module)
    .addDecorator(withKnobs)
    .add('Демо', withInfo(`src/Components/Precheck/Header/`)(
        () => <Header Length={number('Кол-во позиций', 3)} />
    ))