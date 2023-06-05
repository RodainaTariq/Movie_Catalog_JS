import fs from 'fs';
import readline from './read_line.js';
const delete_films = () => {
    console.log(`Insert the ID of movie you want to delete :`);
    const id = readline();
    fs.readFile('data.json' , 'utf8' , (error , data) => {
        if (error) {
            console.error(error);
            return;
        }
        try {
            const existingData = JSON.parse(data);
            let obj = existingData.filter(obj => obj.id !== id);
            const updatedData = JSON.stringify(obj);
            fs.writeFile('data.json', updatedData, 'utf8', (error) => {
                if (error) {
                    console.error(error);
                    return;
                }
            });
        } 
        catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
}
export default delete_films;