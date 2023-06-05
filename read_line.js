import readlineSync from 'readline-sync';
const readline = () => {
    return readlineSync.question("> ");
}
export default readline;