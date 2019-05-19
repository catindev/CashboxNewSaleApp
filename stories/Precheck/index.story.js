import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import Position from "../../src/Components/Precheck/Position/Position";
import Total from "../../src/Components/Precheck/Total/Total";
import Header from "../../src/Components/Precheck/Header/Header";

import CalculatePositionCost from '../../src/Utils/CalculatePositionCost';
import PrecheckState from './PrecheckState.json'

const Info = `Предчек c блек-джеком и заглушками. Фейковый стейт лежит в stories/Precheck/PrecheckState.json`;

function Errorr({ component, message }) {
    return (
        <div className="alert alert-danger" role="alert">
            <h6 className="alert-heading">{component}</h6>
            <p>{message}</p>
        </div>
    )
}

//Precheck full example
storiesOf('Продажа/Предчек/Весь предчек', module)
    .addDecorator(withKnobs)
    .add('Демо', (() => {

        // Расчёт Total
        const TotalValue = PrecheckState.Positions.reduce(
            (total, position) => position.Storno === true ?
                total : total += CalculatePositionCost(position),
            0);

        // Оплату берём из формы
        const Cash = number('Наличные', TotalValue);
        const NonCash = number('Безнал', 0);

        // Считаем сдачу (считается сразу)
        const Change = Cash > 0 ?
            (Cash + NonCash) > TotalValue ? (Cash + NonCash) - TotalValue : 0
            : 0;

        ///****** Проверяем на ошибки ******///
        // проверяем только по кнопке "Отправить"
        let Errors = [];

        // Есть позиции и есть хотя бы одна не сторнированная позиция ?
        const NonStornoCount = PrecheckState.Positions.length > 0 ?
            PrecheckState.Positions.reduce(
                (count, p) => p.Storno === false ? count += 1 : count,
                0
            ) : 0;
        Errors = PrecheckState.Positions.length > 0 && NonStornoCount === 0 ?
            [
                { component: 'Precheck', message: 'Нет несторнированных позиций' },
                ...Errors
            ] : Errors;


        if (NonStornoCount > 0) {
            // Безнал не больше тотала?
            Errors = NonCash > TotalValue ?
                [
                    { component: 'PaymentForm', message: 'Безнала внесено больше чем нужно. Невозможно дать сдачу по безналу' },
                    ...Errors
                ] : Errors;

            // Внесено меньше чем нужно?
            Errors = (Cash + NonCash) > 0 && ((Cash + NonCash) < TotalValue)
                ?
                [
                    { component: 'PaymentForm', message: 'Внесено недостаточно средств' },
                    ...Errors
                ] : Errors;

            // В кассе достаточно чтобы дать сдачу?    
            Errors = Change > 0 && Change >= PrecheckState.Balances.Cash
                ?
                [
                    { component: 'PaymentForm', message: 'Не хватает денег в кассе чтобы дать сдачу' },
                    ...Errors
                ] : Errors;
        }

        return (
            <div>
                <div className="alert alert-info" role="alert">
                    <strong>Баланс в кассе</strong> — {PrecheckState.Balances.Cash}
                </div>
                <hr className=" mb-5" />

                <Header Length={PrecheckState.Positions.length} />
                <ul className="list-group mb-3">
                    {PrecheckState.Positions.map(i => <Position {...i} onClickStorno={action('Storno')} />)}
                    <Total Total={TotalValue} Cash={Cash}
                        NonCash={NonCash} Change={Change} />
                </ul>

                <hr className="mt-5" />
                <h5>Ошибки</h5>
                {Errors.length > 0 ?
                    (Errors.map((error) => <Errorr {...error} />))
                    :
                    (<span className="text-muted">Неть</span>)
                }
            </div >
        )
    }))  