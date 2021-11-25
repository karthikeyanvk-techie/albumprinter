import '../css/main.scss'
import '../css/loader.scss'
import ImageReader from './service/imageReaderService';
import { readFromJsonFile } from './service/jsonFileService';
import { BUTTONS  } from './constants';

const AppView = () => {
    /* canvas width set 1440 and 960 to match 15” x 10” in size */
    document.body.innerHTML = ` <h1>Album Printer</h1>
                                <div class="loader-wrapper" id="loader-parent">
                                    <h2> Loading Canvas </h2>
                                    <div id="loader"></div>
                                    <div id="loader"></div>
                                    <div id="loader"></div>
                                    <div id="loader"></div>
                                    <div id="loader"></div>
                                </div>
                                <div class="main-wrapper" id="main">
                                    <div class="file-selector>
                                        <form action="#">
                                            <fieldset>
                                                <label for="fileSelector">Select an Image file: </label>
                                                <input type="file" id="fileSelector" />
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div class="editor-canvas">
                                        <canvas id="editorCanvas" width="1440" height="960"></canvas> 
                                        <div id="editor-toolbar">
                                            <div class="image-action-buttons">
                                                <button id="`+BUTTONS.UP+`">Move Up</button>
                                                <button id="`+BUTTONS.DOWN+`">Move Down</button>
                                                <button id="`+BUTTONS.LEFT+`"> Move Left</button>
                                                <button id="`+BUTTONS.RIGHT+`">Move Right</button>
                                                <br />
                                                <div class="image-input-scaling">
                                                    <input type="range" name="size" min="10" max="200" class="image-scale" value="100">
                                                </div>
                                                <br />
                                                <button id="`+BUTTONS.SAVE+`">Save as JSON File</button>
                                                <button id="`+BUTTONS.RESET+`">Reset</button>
                                            </div>                                            
                                            <input type="file" id="`+BUTTONS.IMPORTFILE+`" value="Import" style="display:none"/>
                                            <button id="`+BUTTONS.IMPORT+`">Import from JSON File</button>
                                        </div>
                                    </div> 
                                    <div id="info"></div>
                                </div>
                                `;

    //to make sure we bind the on change event after entire page loads
    window.onload = function() {
        document.getElementById('loader-parent').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        setInterval(function(){
            document.getElementById('loader-parent').style.display = 'none';
            document.getElementById('main').style.display = 'block';
        }, 3000);
        //grab DOM elements inside index.html 
        const fileSelector = document.getElementById( "fileSelector" );
        const canvas = document.getElementById('editorCanvas');
        const toolbar = document.getElementById('editor-toolbar');
        const importButton = document.getElementById(BUTTONS.IMPORT);
        const jsonFileInput = document.getElementById(BUTTONS.IMPORTFILE);
        //changing onchange to addEventListener since wecan attach multiple event listeners
        fileSelector.addEventListener("change", function() {
            //setting scale to default value
            document.querySelector('.image-scale').value = 100;
            new ImageReader(fileSelector, canvas, toolbar);
        });
        importButton.addEventListener("click", function(){
            document.getElementById(BUTTONS.IMPORTFILE).click();
        });
        jsonFileInput.addEventListener("change", function() {
            readFromJsonFile(jsonFileInput, canvas, toolbar, fileSelector)
        });
    }
}

AppView();

