import React, { Component } from 'react'
import CastList from './CastView'

class CastSection extends Component {
    state = {
        isGrid: true
    }

    changeView = event => {
        event.preventDefault()
        const { isGrid } = this.state
        this.setState({ isGrid: !isGrid })
    }

    renderIcon() {
        return this.state.isGrid ? (
            <i class="medium material-icons">view_list</i>
        ) : (
            <i class="medium material-icons">view_module</i>
        )
    }

    render() {
        const { casts } = this.props
        return (
            <React.Fragment>
                <div className="col s12">
                    <hr />
                    <div className="row">
                        <h4 className="left">Actors</h4>
                        <a className="right" href="" onClick={this.changeView}>
                            {this.renderIcon()}
                        </a>
                    </div>
                    <CastList casts={casts} isGrid={this.state.isGrid} />
                </div>
            </React.Fragment>
        )
    }
}

export default CastSection
