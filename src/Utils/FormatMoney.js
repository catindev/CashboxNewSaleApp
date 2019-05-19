export default function formatMoney(value) {
    return (
        value ? value
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ") : 0
    ) + ' ₸';
}