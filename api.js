import fs from 'fs';
const api_films = async () => {
    try {
        const response = await fetch('https://mocki.io/v1/0b8959b9-0097-4ec8-b405-80b3d4798934');
        let json_data = await response.json();
        fs.readFile('data.json', 'utf8', (error, data) => {
            if (error) {
                console.error(error);
                return;
            }
            try {
                const existingData = JSON.parse(data);
                existingData.push(json_data[0]); 
                const updatedData = JSON.stringify(existingData);
                fs.writeFile('data.json' , updatedData , 'utf8' , (error) => {
                    if (error) {
                        console.error(error);
                        return;
                    }
                });
            } 
            catch (error) {
                console.error('Error parsing JSON:' , error);
            }
        });
    } 
    catch (error) {
        console.error(error);
    }
};
export default api_films;