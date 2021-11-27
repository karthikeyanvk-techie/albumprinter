
import {ImageReader} from '../js/service/imageEditorService';
import { createJSONFile } from '../js/service/jsonFileService';
Object.defineProperty(global, 'FileReader', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      readAsDataURL: jest.fn(),
      onloadend: jest.fn()
    })),
});
describe('ImageReader ', ()=> {

    const fileid = {
       id: 1
    }
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
    const fileInput = {
        files :[{
            type:"jpeg"
        }]
    }
    it('ImageReader', () => {
        jest.spyOn(document, 'getElementById').mockReturnValueOnce();
        global.URL.createObjectURL = jest.fn(() => 'details');
        expect(typeof createJSONFile).toBe("undefined");
    });

 })