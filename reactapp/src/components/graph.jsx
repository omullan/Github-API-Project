import React from 'react';
import Plot from 'react-plotly.js';

const graph = (props) => {
        const repoSize = [];
        const repoNames = [];
        const languageList = [];
        const languageCount = [];
        for(var i = 0; i < props.repositories.length; i++){
            repoSize.push(props.repositories[i].size);
            repoNames.push(props.repositories[i].name); 
        }
        for(var i = 0; i < props.repositories.length; i++){
            if(props.repositories[i].language != null) {
                if(languageList.indexOf(props.repositories[i].language) === -1) {
                  languageList.push(props.repositories[i].language);
                }
            }
        }
        for(var i = 0; i < languageList.length; i++) {
            languageCount[i] = 0;
        }
        for(var i = 0; i < props.repositories.length; i++) {
            for(var j = 0; j < languageList.length; j++) {
                if(props.repositories[i].language === languageList[j]) {
                    languageCount[j]++;
                }
            }
        }
        console.log(languageList.length)
        for(var i = 0; i < languageList.length; i++) {

            console.log(languageList[i]);
            console.log(languageCount[i]);
        }
        
        return (
            <div class = "row">
                <div>
                    <Plot data={[
                        {
                        values: repoSize,
                        labels: repoNames,
                        type: 'pie'
                        }
                    ]} layout={{width: 500, height: 300}}/>
                </div>
                <div>
                <Plot data={[
                        {
                        values: languageCount,
                        labels: languageList,
                        type: 'pie'
                        }
                    ]} layout={{width: 500, height: 300}}/>
                </div>
            </div>         

        )

};

export default graph;