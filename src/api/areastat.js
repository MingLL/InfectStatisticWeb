import axios from 'axios';

const baseUrl = "http://localhost:3000/areastat";

function getAreaStat(){
    axios.get(baseUrl).then(function (respose){
        console.log(respose);
    }).catch(function (error){
        console.log(error);
        alert('失败');
    })
}

export default getAreaStat;