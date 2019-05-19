import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Total from "../../src/Components/Precheck/Total/Total";

storiesOf('Продажа/Предчек/Компоненты/Итого', module)
    .addDecorator(withKnobs)
    .add('Демо', withInfo(`src/Components/Precheck/Total`)(() => {
        const TotalValue = number('К оплате', 100);
        const Cash = number('Наличными', 200);
        const NonCash = number('Безнал', 0);

        // Эта логика рассчёта запускается на чендж в полях формы оплаты
        // считаем сдачу
        const Change = Cash > 0 ?
            (Cash + NonCash) > TotalValue ? (Cash + NonCash) - TotalValue : 0
            : 0;

        return (
            <Total
                Total={TotalValue}
                Cash={Cash}
                NonCash={NonCash}
                Change={Change}
            />
        )
    }
    ));