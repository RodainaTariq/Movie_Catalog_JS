import fs from 'fs';
import readline from './read_line.js';
const update_films = () => {
    console.log(`Insert the ID of movie you want to edit :`);
    const id = readline();
    console.log(`Insert the title you want to edit or insert NO (if you don't want to edit):`);
    let title = readline();
    console.log(`Insert the director you want to edit or insert NO (if you don't want to edit):`);
    let director = readline();
    console.log(`Insert the release_year you want to edit or insert NO (if you don't want to edit):`);
    let release_year = readline();
    console.log(`Insert the genre you want to edit or insert NO (if you don't want to edit):`);
    let genre = readline();
    fs.readFile('data.json' , 'utf8' , (error , data) => {
        if (error) {
            console.error(error);
            return;
        }
        try {
            const existingData = JSON.parse(data);
            let obj = existingData.find(obj => obj.id === id);
            if(title !== "NO") {
                obj.title = title;
            }
            if(director !== "NO") {
                obj.director = director;
            }
            if(release_year !== "NO") {
                obj.release_year = release_year;
            }
            if(genre !== "NO") {
                obj.genre = genre;
            }
            const updatedData = JSON.stringify(existingData);
            fs.writeFile('data.json' , updatedData , 'utf8' , (error) => {
                if (error) {
                    console.error(error);
                    return;
                }
            });
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
}
export default update_films;