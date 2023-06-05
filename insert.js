import fs from 'fs';
import readline from './read_line.js';
const insert_films = async() => {
    fs.readFile('data.json', 'utf8', (error , data) => {
        if (error) {
            console.error(error);
            return;
        }
        try {
            const existingData = JSON.parse(data);
            console.log(`Insert id , title , director , release year , genre :`);
            let id = readline();
            let  title = readline();
            let director = readline();
            let release_year = readline();
            let genre = readline();
            const newData = {id , title , director , release_year , genre};
            existingData.push(newData); 
            const updatedData = JSON.stringify(existingData);
            fs.writeFile('data.json' , updatedData , 'utf8' , (error) => {
                if (error) {
                    console.error(error);
                    return;
                }
                console.log('Data appended successfully.');
            });
        } catch (error) {
            console.error('Error parsing JSON:' , error);
        }
    });
}
export default insert_films;