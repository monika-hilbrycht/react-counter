import React , {Component} from 'react'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(

            <div>

            <h1>React Counter</h1>
            <h1>0</h1>
            <button className='btn btn-success'>Increament</button>
            <button className='btn btn-danger'>Decreament</button>
            <button className='btn btn-primary'>Neutral</button>

            </div>

        );
    }
}

export default Main;