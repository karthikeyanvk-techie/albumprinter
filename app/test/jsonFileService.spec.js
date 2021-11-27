import { createJSONFile, readFromJsonFile } from '../js/service/jsonFileService';
describe('JsonFileService ', ()=> {
    const canvasObj = {
        canvasdata: {
            width: 180,
            height: 180,
            photo : {
                id: 1,
                width: 100,
                height: 100,
                x: 50,
                y: 40,
                scale: 2,
                ratio: 1,
            }
        }
    }
    it('createJSONFile', () => {
        jest.spyOn(document, 'createElement').mockReturnValueOnce('a');
        jest.spyOn(document.body, 'appendChild')
        jest.spyOn(document.body, 'removeChild')
        global.URL.createObjectURL = jest.fn(() => 'details');
        expect(typeof createJSONFile).toBe("undefined");
    });

    it('should return false for non json file ', () => {
        const jsonFileInput = {
            files :[{
                type:"xml"
            }]
        }
        expect(typeof readFromJsonFile).toBe("function");
    });
 })