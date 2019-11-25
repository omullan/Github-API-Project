import React from 'react';
import Plot from 'react-plotly.js';

const graph = (props) => {
        const repoSize = [];
        const repoNames = [];
        const repoCommits = [];
        for(var i = 0; i < props.repositories.length; i++){
            repoSize.push(props.repositories[i].size);
            repoNames.push(props.repositories[i].name); 
            repoCommits.push(props.repositories[i].commits); 
        }
        return (
            <div class = "row">
            <div class="col-md-8">
            <div id="demo" class="carousel slide" data-ride="carousel">


                <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                </ul>
  

                 <div class="carousel-inner">
                    <div class="carousel-item active">
                    <Plot data={[
                        {
                        values: repoSize,
                        labels: repoNames,
                        type: 'pie'
                        }
                    ]}
                    layout={ {width: 400, height: 400} }/>
                    </div>
                    <div class="carousel-item">

                    </div>
                    <div class="carousel-item">

                    </div>
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            </div>   
            </div>         

        )

};

export default graph;