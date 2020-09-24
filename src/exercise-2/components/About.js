import React,{Component} from 'react'
import { Link } from 'react-router-dom'
export default class About extends Component{
    render() {
        return (
            <div>
                    <p>Company: ThoughtWorks Local.</p>
                    <p>Location: Xi'an</p>
                <p>For more information,please</p>
                <p>view our <Link to={'/'}>website</Link></p>

            </div>

        );
    }
}