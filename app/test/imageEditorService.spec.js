

import ImageEditor from '../js/service/ImageEditorService';
import { createJSONFile } from '../js/service/jsonFileService';
describe('ImageEditor', ()=> {

    const imageObject = {
        file:"xyz",
        src:"base64data",
        width:120,
        height:60,
        ratio:"",
        scale:1,
        x: 50,
        y: 60
    }
    const canvas ={
        height:200,
        width: 200,
        left: 10,
        top:10
    }

    const fileSelector ={
        id:"12344"
    }
    const ImageEditor_object = new ImageEditor(imageObject,canvas,"toolbar",fileSelector);
    it('Setting image object details', () => {
        expect(typeof ImageEditor_object.setImageObjectDetails).toBe("function");
    });

    it('To get Minimal Image Dimensions ', () => {
        expect(typeof ImageEditor_object.getImageDimensions).toBe("function");
    });

    it('Function to get Mouse poistion ', () => {
        const event ={
            clientX: 20,
            clientY: 20
        }
        const Expectedresult = {
            x: 10,
            y:10
        }

        expect(typeof ImageEditor_object.getMousePosition).toBe("function");
    });

    it('Function to move image up by 10 ', () => {
        expect(typeof ImageEditor_object.moveImageUp).toBe("function");
    });

    it('Function to move image down by 10', () => {
        expect(typeof ImageEditor_object.moveImageDown).toBe("function");
    });

    it('Function to scale between 10 and 200 ', () => {
        expect(typeof ImageEditor_object.scale).toBe("function");
    });
    it('Function to move image to left position by 10', () => {
        expect(typeof ImageEditor_object.moveImageLeft).toBe("function");
    });
    it('Function to move the position to dragged position', () => {
        const event ={
            clientX: 20,
            clientY: 20
        }
        expect(typeof ImageEditor_object.dragPosition).toBe("function");
    });

    it('Saving canvas data to json file', () => {
        expect(typeof ImageEditor_object.save).toBe("function");
    });

 })