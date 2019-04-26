import React, {Component} from 'react';
import Tree from '../../common/tree'
import axios from "axios";
import * as API from "../../api";
let listBox=[]
let list=[]
class Index extends Component {
    componentDidMount() {
        axios.get(API.GET_COURSE_CATALOGUE+'?courseId=2c9fa10769b899fc0169be7199ad0003',{baseURL: 'https://sixuexing.com/home/',
        }).then(res=>{
            listBox.push(res.data)
            list=listBox
        })
    }

    render() {
        return (
            <div>
                <Tree treeList = {list}/>
            </div>
        );
    }
}

export default Index;